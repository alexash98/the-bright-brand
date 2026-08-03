import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { z } from "zod";
import { requireBlogIngestAuth } from "@/lib/blog/auth";
import { isRepoPostSlug } from "@/lib/posts";
import {
  estimateReadTimeMinutes,
  sanitizeBlogHtml,
  stripDuplicateTitleHeading,
} from "@/lib/posts/sanitize";
import { getSupabaseServerClient, hasSupabaseConfig } from "@/lib/supabase/server";
import { postCanonicalPath } from "@/lib/seo/post-metadata";
import { SITE_URL } from "@/lib/site";

export const runtime = "nodejs";

const IngestSchema = z.object({
  slug: z.string().min(3).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(10),
  subtitle: z.string().optional(),
  meta_title: z.string().max(70).optional(),
  meta_description: z.string().max(160).optional(),
  excerpt: z.string().optional(),
  body_html: z.string().min(500),
  category: z.string().default("Marketing"),
  tags: z.array(z.string()).default([]),
  author_name: z.string().default("Alex Ashcroft"),
  author_role: z.string().default("Founder"),
  hero_image_url: z.string().url().optional(),
  hero_image_alt: z.string().optional(),
  featured_video: z.string().optional(),
  video_heading: z.string().optional(),
  video_date: z.string().optional(),
  read_time: z.number().int().positive().optional(),
  status: z.enum(["draft", "published"]).default("published"),
  external_id: z.string().optional(),
});

export async function POST(request: Request): Promise<NextResponse> {
  const authError = requireBlogIngestAuth(request);
  if (authError) return authError;

  if (!hasSupabaseConfig()) {
    return NextResponse.json(
      {
        error:
          "Supabase is not configured. Set SUPABASE_URL and SUPABASE_SECRET_KEY.",
      },
      { status: 500 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  const parsed = IngestSchema.safeParse(json);
  if (!parsed.success) {
    const message = parsed.error.issues
      .map((issue) => `${issue.path.join(".") || "body"}: ${issue.message}`)
      .join("; ");
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const data = parsed.data;

  if (isRepoPostSlug(data.slug)) {
    return NextResponse.json(
      {
        error: `Slug "${data.slug}" collides with an in-repo post. Choose a different slug.`,
      },
      { status: 409 },
    );
  }

  const bodyHtml = stripDuplicateTitleHeading(
    sanitizeBlogHtml(data.body_html),
    data.title,
    data.slug,
  );
  if (bodyHtml.length < 100) {
    return NextResponse.json(
      { error: "body_html was empty after sanitisation." },
      { status: 400 },
    );
  }

  const readTime = data.read_time ?? estimateReadTimeMinutes(bodyHtml);
  const now = new Date().toISOString();

  try {
    const supabase = getSupabaseServerClient();

    const { data: existing, error: lookupError } = await supabase
      .from("blog_posts")
      .select("id")
      .eq("slug", data.slug)
      .maybeSingle();

    if (lookupError) {
      console.error("[api/blog/ingest] lookup failed:", lookupError.message);
      return NextResponse.json(
        { error: `Database lookup failed: ${lookupError.message}` },
        { status: 500 },
      );
    }

    const action = existing ? "updated" : "created";
    const row = {
      slug: data.slug,
      title: data.title,
      subtitle: data.subtitle ?? null,
      meta_title: data.meta_title ?? null,
      meta_description: data.meta_description ?? null,
      excerpt: data.excerpt ?? null,
      body_html: bodyHtml,
      category: data.category,
      tags: data.tags,
      author_name: data.author_name,
      author_role: data.author_role,
      hero_image_url: data.hero_image_url ?? null,
      hero_image_alt: data.hero_image_alt ?? null,
      featured_video: data.featured_video ?? null,
      video_heading: data.video_heading ?? null,
      video_date: data.video_date ?? null,
      read_time: readTime,
      status: data.status,
      external_id: data.external_id ?? null,
      source: "n8n",
      updated_at: now,
      ...(existing ? {} : { published_at: now }),
    };

    const { error: upsertError } = await supabase
      .from("blog_posts")
      .upsert(row, { onConflict: "slug" });

    if (upsertError) {
      console.error("[api/blog/ingest] upsert failed:", upsertError.message);
      return NextResponse.json(
        { error: `Database upsert failed: ${upsertError.message}` },
        { status: 500 },
      );
    }

    const path = postCanonicalPath(data.slug);
    revalidatePath("/blog");
    revalidatePath(path);
    revalidatePath("/sitemap.xml");

    return NextResponse.json({
      ok: true,
      slug: data.slug,
      url: `${SITE_URL}${path}`,
      action,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected ingest failure";
    console.error("[api/blog/ingest]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

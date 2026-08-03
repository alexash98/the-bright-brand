import { applyInternalLinks } from "@/lib/posts/internal-links";
import { stripDuplicateTitleHeading } from "@/lib/posts/strip-title-heading";
import type { Post, PostCategory } from "@/lib/posts/types";
import { hasSupabaseConfig, getSupabaseServerClient } from "@/lib/supabase/server";

interface BlogPostRow {
  slug: string;
  title: string;
  subtitle: string | null;
  meta_title: string | null;
  meta_description: string | null;
  excerpt: string | null;
  body_html: string;
  category: string;
  tags: string[] | null;
  author_name: string;
  author_role: string;
  hero_image_url: string | null;
  hero_image_alt: string | null;
  og_image_url: string | null;
  featured_video: string | null;
  video_heading: string | null;
  video_date: string | null;
  read_time: number | null;
  published_at: string;
  updated_at: string;
}

const CATEGORIES: PostCategory[] = [
  "Marketing",
  "Strategy",
  "Digital",
  "Technology",
];

function toCategory(value: string): PostCategory {
  return CATEGORIES.includes(value as PostCategory)
    ? (value as PostCategory)
    : "Marketing";
}

function toDateOnly(iso: string): string {
  return iso.slice(0, 10);
}

function mapRow(row: BlogPostRow): Post {
  const stripped = stripDuplicateTitleHeading(row.body_html, row.title, row.slug);
  const body = applyInternalLinks(stripped, row.slug);

  return {
    title: row.title,
    slug: row.slug,
    date: toDateOnly(row.published_at),
    category: toCategory(row.category),
    subtitle: row.subtitle ?? row.excerpt ?? "",
    metaDescription:
      row.meta_description ?? row.excerpt ?? row.subtitle ?? row.title,
    metaTitle: row.meta_title ?? undefined,
    author: {
      name: row.author_name,
      position: row.author_role,
    },
    ogImage: row.og_image_url ?? undefined,
    body,
    tags: row.tags ?? [],
    updatedAt: row.updated_at,
    heroImageUrl: row.hero_image_url ?? undefined,
    heroImageAlt: row.hero_image_alt ?? undefined,
    featuredVideo: row.featured_video ?? undefined,
    videoHeading: row.video_heading ?? undefined,
    videoDate: row.video_date ?? undefined,
    readTime: row.read_time ?? undefined,
    excerpt: row.excerpt ?? undefined,
    source: "n8n",
  };
}

export async function getDbPosts(): Promise<Post[]> {
  if (!hasSupabaseConfig()) {
    return [];
  }

  try {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        "slug,title,subtitle,meta_title,meta_description,excerpt,body_html,category,tags,author_name,author_role,hero_image_url,hero_image_alt,og_image_url,featured_video,video_heading,video_date,read_time,published_at,updated_at",
      )
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (error) {
      console.error("[lib/posts/db] Supabase query failed:", error.message);
      return [];
    }

    return (data as BlogPostRow[] | null)?.map(mapRow) ?? [];
  } catch (error) {
    console.error("[lib/posts/db] Supabase unavailable:", error);
    return [];
  }
}

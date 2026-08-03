import { NextResponse } from "next/server";
import { requireBlogIngestAuth } from "@/lib/blog/auth";
import { getAllPosts } from "@/lib/posts";

export const runtime = "nodejs";

export async function GET(request: Request): Promise<NextResponse> {
  const authError = requireBlogIngestAuth(request);
  if (authError) return authError;

  try {
    const posts = await getAllPosts();
    const payload = posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      tags: post.tags ?? [],
    }));

    return NextResponse.json({ posts: payload });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to list posts";
    console.error("[api/blog/list]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

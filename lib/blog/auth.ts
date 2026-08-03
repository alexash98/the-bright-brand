import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

/**
 * Bearer auth for blog ingest/list routes.
 * Returns a NextResponse on failure, or null when the request is authorised.
 */
export function requireBlogIngestAuth(request: Request): NextResponse | null {
  const expected = process.env.BLOG_INGEST_TOKEN;
  if (!expected) {
    return NextResponse.json(
      { error: "BLOG_INGEST_TOKEN is not configured on the server." },
      { status: 500 },
    );
  }

  const header = request.headers.get("authorization") ?? "";
  const match = /^Bearer\s+(\S+)$/i.exec(header);
  const provided = match?.[1];
  if (!provided) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null;
}

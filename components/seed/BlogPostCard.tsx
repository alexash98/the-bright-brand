import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatBlogDate } from "@/lib/blog-posts";
import { isPreoptimizedLocalImage } from "@/lib/image";
import { BlogPost } from "@/lib/seed-types";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps): React.ReactElement {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white transition-colors duration-200 hover:border-neutral-300">
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
          <Image
            src={post.imageUrl}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            decoding="async"
            unoptimized={isPreoptimizedLocalImage(post.imageUrl)}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
            <span className="rounded-full border border-neutral-200 bg-[#f7f7f5] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-700">
              {post.category}
            </span>
            <span>{formatBlogDate(post.publishedAt)}</span>
            <span>{post.readTimeMinutes} min read</span>
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-neutral-900 transition-colors group-hover:text-brand-accent sm:text-[1.35rem]">
            {post.title}
          </h3>
          <p className="mt-3 flex-1 text-base leading-relaxed text-neutral-600">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-neutral-100 pt-5">
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                {post.authorName}
              </p>
              <p className="text-sm text-neutral-500">{post.authorRole}</p>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 transition-colors group-hover:text-brand-accent">
              Read article
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

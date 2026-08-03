import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatPostDate } from "@/lib/posts";
import type { Post } from "@/lib/posts/types";
import { postCanonicalPath } from "@/lib/seo/post-metadata";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps): React.ReactElement {
  return (
    <Link href={postCanonicalPath(post.slug)} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white transition-colors duration-200 hover:border-neutral-300">
        {post.heroImageUrl ? (
          <div className="relative aspect-[16/10] w-full bg-neutral-100">
            <Image
              src={post.heroImageUrl}
              alt={post.heroImageAlt || post.title}
              fill
              quality={85}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ) : null}

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
            <span className="rounded-full border border-neutral-200 bg-[#f7f7f5] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-700">
              {post.category}
            </span>
            <span>{formatPostDate(post.date)}</span>
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-neutral-900 transition-colors group-hover:text-brand-accent sm:text-[1.35rem]">
            {post.title}
          </h3>
          <p className="mt-3 flex-1 text-base leading-relaxed text-neutral-600">
            {post.subtitle}
          </p>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-neutral-100 pt-5">
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                {post.author.name}
              </p>
              <p className="text-sm text-neutral-500">{post.author.position}</p>
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

import React from "react";
import { PostCard } from "@/components/seed/PostCard";
import type { Post } from "@/lib/posts/types";

interface PostGridProps {
  posts: Post[];
}

export function PostGrid({ posts }: PostGridProps): React.ReactElement {
  return (
    <section className="relative bg-white pb-20 pt-16 text-neutral-900 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 max-w-2xl text-left md:mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Practical thinking for growth teams.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
            Guides and perspectives on paid media, search, automation and
            measurement.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="h-full">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

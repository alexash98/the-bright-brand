'use client';

import React from "react";
import { motion } from "motion/react";
import { BlogPostCard } from "@/components/seed/BlogPostCard";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { BlogPost } from "@/lib/seed-types";

const GRID_VARIANTS = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
} as const;

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
} as const;

interface BlogPostGridProps {
  posts: BlogPost[];
}

export function BlogPostGrid({ posts }: BlogPostGridProps): React.ReactElement {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative bg-white pb-20 pt-16 text-neutral-900 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 max-w-2xl text-left md:mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Practical thinking for growth teams.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
            Guides and perspectives from our specialists across search, paid
            media, creative and reporting.
          </p>
        </div>

        {prefersReducedMotion ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {posts.map((post) => (
              <div key={post.slug} className="h-full">
                <BlogPostCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.06 }}
            variants={GRID_VARIANTS}
          >
            {posts.map((post) => (
              <motion.div key={post.slug} className="h-full" variants={CARD_VARIANTS}>
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

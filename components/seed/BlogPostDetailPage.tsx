import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/seed/Footer";
import { Header } from "@/components/seed/Header";
import { MarketingHero } from "@/components/seed/MarketingHero";
import { formatBlogDate } from "@/lib/blog-posts";
import { NAV_ITEMS } from "@/lib/nav";
import { BlogPost } from "@/lib/seed-types";

interface BlogPostDetailPageProps {
  post: BlogPost;
}

export function BlogPostDetailPage({
  post,
}: BlogPostDetailPageProps): React.ReactElement {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-gray-100 antialiased selection:bg-brand-accent selection:text-black">
      <Header navItems={NAV_ITEMS} />

      <MarketingHero>
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-text-pale/70 transition-colors hover:text-brand-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          All articles
        </Link>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          {post.category}
        </p>
        <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-text-pale md:text-5xl lg:text-6xl">
          {post.title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-brand-text-pale/70 md:text-xl">
          {post.excerpt}
        </p>
      </MarketingHero>

      <main className="bg-white text-neutral-900">
        <article className="page-below-fold px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-neutral-200 pb-8 text-sm text-neutral-500">
              <span>
                By{" "}
                <span className="font-semibold text-neutral-900">
                  {post.authorName}
                </span>
                , {post.authorRole}
              </span>
              <span>{formatBlogDate(post.publishedAt)}</span>
              <span>{post.readTimeMinutes} min read</span>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-neutral-600 md:text-lg">
              {post.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
        <Footer />
      </main>
    </div>
  );
}

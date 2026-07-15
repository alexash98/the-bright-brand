import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "@/components/seed/Footer";
import { Header } from "@/components/seed/Header";
import { MarketingHero } from "@/components/seed/MarketingHero";
import { CALENDLY_URL } from "@/lib/contact";
import {
  formatPostDate,
  getRelatedPosts,
} from "@/lib/posts";
import type { Post } from "@/lib/posts/types";
import { NAV_ITEMS } from "@/lib/nav";
import { postCanonicalPath } from "@/lib/seo/post-metadata";

interface PostDetailPageProps {
  post: Post;
}

const PROSE_CLASS =
  "max-w-none text-base leading-relaxed text-neutral-700 md:text-lg " +
  "[&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-neutral-900 " +
  "[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-neutral-900 " +
  "[&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-neutral-900 " +
  "[&_p]:mb-5 [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 " +
  "[&_li]:mb-2 [&_a]:font-medium [&_a]:text-brand-accent [&_a]:underline [&_strong]:font-semibold [&_strong]:text-neutral-900 " +
  "[&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-neutral-200 [&_blockquote]:pl-4 [&_blockquote]:italic " +
  "[&_img]:my-6 [&_img]:rounded-xl [&_table]:my-6 [&_table]:w-full [&_th]:text-left [&_th]:font-semibold [&_td]:align-top " +
  "[&_.related-guides]:mt-12 [&_.related-guides]:rounded-2xl [&_.related-guides]:border [&_.related-guides]:border-neutral-200 [&_.related-guides]:bg-[#f7f7f5] [&_.related-guides]:p-6 " +
  "[&_.related-guides_h2]:mt-0 [&_.related-guides_h2]:mb-4 [&_.related-guides_h2]:text-xl " +
  "[&_.related-guides_ul]:mb-0 [&_.related-guides_ul]:list-none [&_.related-guides_ul]:pl-0 " +
  "[&_.related-guides_li]:mb-3 [&_.related-guides_li]:pl-0";

export function PostDetailPage({ post }: PostDetailPageProps): React.ReactElement {
  const related = getRelatedPosts(post.slug);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-gray-100 antialiased selection:bg-brand-accent selection:text-black">
      <Header navItems={NAV_ITEMS} />

      <MarketingHero>
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-text-pale/70 transition-colors hover:text-brand-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          View All Blogs
        </Link>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          {post.category}
        </p>
        <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-text-pale md:text-5xl lg:text-6xl">
          {post.title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-brand-text-pale/70 md:text-xl">
          {post.subtitle}
        </p>
      </MarketingHero>

      <main className="bg-white text-neutral-900">
        <article className="page-below-fold px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-neutral-200 pb-8 text-sm text-neutral-500">
              <span>
                By{" "}
                <span className="font-semibold text-neutral-900">
                  {post.author.name}
                </span>
                , {post.author.position}
              </span>
              <span>{formatPostDate(post.date)}</span>
            </div>

            {post.body ? (
              <div
                className={PROSE_CLASS}
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
            ) : (
              <p className="text-lg text-neutral-500">
                This article is being prepared and will be published shortly.
              </p>
            )}
          </div>
        </article>

        {related.length > 0 ? (
          <section className="border-t border-neutral-200 bg-[#f7f7f5] px-4 py-16 md:px-8 md:py-20">
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 flex items-end justify-between gap-4">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                  What to read next
                </h2>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 transition-colors hover:text-brand-accent"
                >
                  View All Blogs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <li key={item.slug} className="h-full">
                    <Link
                      href={postCanonicalPath(item.slug)}
                      className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-300"
                    >
                      <span className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
                        {item.category}
                      </span>
                      <span className="text-lg font-semibold tracking-tight text-neutral-900 transition-colors group-hover:text-brand-accent">
                        {item.title}
                      </span>
                      <span className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                        {item.subtitle}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section className="border-t border-neutral-200 bg-white px-4 py-16 text-center md:px-8 md:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              Ready to grow with a team that owns the numbers?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
              Book a discovery call and we will map where your next chunk of
              growth comes from.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
            >
              Book a discovery call
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

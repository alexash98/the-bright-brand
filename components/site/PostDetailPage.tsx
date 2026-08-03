import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Globe } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MarketingHero } from "@/components/site/MarketingHero";
import { ArticleBody } from "@/components/site/blog/ArticleBody";
import { AuthorBioCard } from "@/components/site/blog/AuthorBioCard";
import { BlogAuditBand } from "@/components/site/blog/BlogAuditBand";
import { ShareButtons } from "@/components/site/blog/ShareButtons";
import { resolveAuthor } from "@/lib/authors";
import { parseYouTubeVideo } from "@/lib/blog/youtube";
import {
  estimateReadTimeMinutes,
} from "@/lib/posts/sanitize";
import {
  formatPostDate,
  getAllPosts,
  getRelatedPosts,
} from "@/lib/posts";
import type { Post } from "@/lib/posts/types";
import { NAV_ITEMS } from "@/lib/nav";
import { postCanonicalPath } from "@/lib/seo/post-metadata";
import { SITE_URL } from "@/lib/site";

interface PostDetailPageProps {
  post: Post;
}

const PROSE_CLASS =
  "max-w-none font-sans text-base font-normal leading-relaxed text-neutral-600 md:text-lg " +
  "[&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:scroll-mt-28 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_h2]:text-[#232327] " +
  "[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-medium [&_h3]:tracking-tight [&_h3]:text-[#232327] " +
  "[&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:font-display [&_h4]:text-lg [&_h4]:font-medium [&_h4]:text-[#232327] " +
  "[&_p]:mb-5 [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 " +
  "[&_li]:mb-2 [&_a]:font-normal [&_a]:text-[#232327] [&_a]:underline [&_a]:decoration-brand-accent [&_a]:underline-offset-2 [&_strong]:font-medium [&_strong]:text-neutral-700 " +
  "[&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-neutral-200 [&_blockquote]:pl-4 [&_blockquote]:italic " +
  "[&_img]:my-6 [&_img]:rounded-xl [&_table]:my-6 [&_table]:w-full [&_th]:text-left [&_th]:font-medium [&_td]:align-top " +
  "[&_code]:rounded [&_code]:bg-[#f7f7f5] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em] " +
  "[&_.related-guides]:hidden";

export async function PostDetailPage({
  post,
}: PostDetailPageProps): Promise<React.ReactElement> {
  const [related, allPosts] = await Promise.all([
    getRelatedPosts(post.slug),
    getAllPosts(),
  ]);

  const pageUrl = `${SITE_URL}${postCanonicalPath(post.slug)}`;
  const author = resolveAuthor(post.author.name);
  const readTime =
    post.readTime ??
    (post.body ? estimateReadTimeMinutes(post.body) : undefined);
  const video =
    parseYouTubeVideo(
      post.featuredVideo ?? "https://www.youtube.com/watch?v=-aZDbrbbXTE",
    ) ?? null;
  const latestPosts = allPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 5)
    .map((item) => ({
      slug: item.slug,
      title: item.title,
      category: item.category,
    }));
  const authorArticles = allPosts
    .filter(
      (item) =>
        item.slug !== post.slug &&
        item.author.name.toLowerCase() === author.name.toLowerCase(),
    )
    .slice(0, 5)
    .map((item) => ({
      slug: item.slug,
      title: item.title,
    }));

  return (
    <div className="relative min-h-screen text-gray-100 antialiased selection:bg-brand-accent selection:text-black">
      <Header navItems={NAV_ITEMS} />

      <MarketingHero
        asideAlign="center"
        aside={
          post.heroImageUrl ? (
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl bg-[#232327] lg:max-w-none">
              <Image
                src={post.heroImageUrl}
                alt={post.heroImageAlt || post.title}
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
            </div>
          ) : null
        }
      >
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-brand-text-pale/70">
            <li>
              <Link href="/" className="transition-colors hover:text-brand-accent">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href="/blog"
                className="transition-colors hover:text-brand-accent"
              >
                Blog
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="max-w-[18rem] truncate text-brand-text-pale/90 md:max-w-md">
              {post.title}
            </li>
          </ol>
        </nav>
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
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-8">
              <div className="flex items-center gap-4">
                <a
                  href={author.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-accent/35 transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 sm:h-14 sm:w-14"
                >
                  <Image
                    src={author.photoSrc}
                    alt={author.photoAlt}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </a>
                <div className="min-w-0">
                  <p className="text-sm text-neutral-500">
                    Written by{" "}
                    <a
                      href={author.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#232327] underline decoration-brand-accent underline-offset-4 transition-colors hover:text-brand-accent-dark"
                    >
                      {author.name}
                    </a>
                  </p>
                  <p className="mt-0.5 text-sm text-neutral-500">
                    {author.role}
                    <span className="mx-2 text-neutral-300" aria-hidden>
                      ·
                    </span>
                    {formatPostDate(post.date)}
                    {readTime ? (
                      <>
                        <span className="mx-2 text-neutral-300" aria-hidden>
                          ·
                        </span>
                        {readTime} min read
                      </>
                    ) : null}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <a
                      href={author.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${author.name} on LinkedIn`}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#232327] text-[11px] font-bold text-brand-text-pale transition-colors hover:bg-brand-accent hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
                    >
                      in
                    </a>
                    {author.websiteUrl ? (
                      <a
                        href={author.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${author.name} website`}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:border-brand-accent hover:text-brand-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
                      >
                        <Globe className="h-3.5 w-3.5" aria-hidden />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
              <ShareButtons url={pageUrl} title={post.title} />
            </div>

            {post.body ? (
              <ArticleBody
                html={post.body}
                className={PROSE_CLASS}
                video={video}
                videoTitle={
                  post.videoHeading || "Watch the related video"
                }
                latestPosts={latestPosts}
              >
                <AuthorBioCard author={author} articles={authorArticles} />
                <BlogAuditBand compact />
              </ArticleBody>
            ) : (
              <>
                <p className="text-lg text-neutral-500">
                  This article is being prepared and will be published shortly.
                </p>
                <div className="mx-auto mt-14 max-w-3xl space-y-6">
                  <AuthorBioCard author={author} articles={authorArticles} />
                  <BlogAuditBand compact />
                </div>
              </>
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
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors hover:border-neutral-300"
                    >
                      {item.heroImageUrl ? (
                        <div className="relative aspect-[16/10] w-full bg-neutral-100">
                          <Image
                            src={item.heroImageUrl}
                            alt={item.heroImageAlt || item.title}
                            fill
                            quality={85}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover"
                          />
                        </div>
                      ) : null}
                      <div className="flex flex-1 flex-col p-6">
                        <span className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
                          {item.category}
                        </span>
                        <span className="text-lg font-semibold tracking-tight text-neutral-900 transition-colors group-hover:text-brand-accent">
                          {item.title}
                        </span>
                        <span className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                          {item.subtitle}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <Footer />
      </main>
    </div>
  );
}

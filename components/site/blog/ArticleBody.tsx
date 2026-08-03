"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, MonitorPlay } from "lucide-react";
import { YouTubeFacade } from "@/components/site/blog/YouTubeFacade";
import type { YouTubeVideo } from "@/lib/blog/youtube";
import { postCanonicalPath } from "@/lib/seo/post-metadata";

interface TocItem {
  id: string;
  text: string;
}

interface LatestPostLink {
  slug: string;
  title: string;
  category: string;
}

interface ArticleBodyProps {
  html: string;
  className: string;
  video?: YouTubeVideo | null;
  videoTitle?: string;
  latestPosts?: LatestPostLink[];
  /** Content under the article (author bio, audit) so the sidebar stays sticky to the end. */
  children?: ReactNode;
}

function slugifyHeading(text: string, index: number): string {
  const base = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 64);
  return base || `section-${index + 1}`;
}

function headerOffsetPx(): number {
  const header =
    document.getElementById("navbar") ??
    document.querySelector<HTMLElement>("nav.fixed");
  return Math.ceil((header?.getBoundingClientRect().height ?? 80) + 24);
}

export function ArticleBody({
  html,
  className,
  video = null,
  videoTitle = "Watch the video",
  latestPosts = [],
  children,
}: ArticleBodyProps): React.ReactElement {
  const rootRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const measureHeader = (): void => {
      root.style.setProperty(
        "--bb-header-offset",
        `${headerOffsetPx()}px`,
      );
    };

    measureHeader();
    window.addEventListener("resize", measureHeader);
    return () => window.removeEventListener("resize", measureHeader);
  }, []);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;

    const headings = Array.from(body.querySelectorAll("h2"));
    const used = new Set<string>();
    const items: TocItem[] = headings.map((heading, index) => {
      const text = heading.textContent?.trim() ?? `Section ${index + 1}`;
      let id = heading.id || slugifyHeading(text, index);
      if (used.has(id)) id = `${id}-${index + 1}`;
      used.add(id);
      heading.id = id;
      return { id, text };
    });
    setToc(items);
    setActiveId(items[0]?.id ?? "");
  }, [html]);

  // Active TOC item = last h2 that has crossed the header line.
  useEffect(() => {
    if (toc.length === 0) return;

    const updateActive = (): void => {
      const offset = headerOffsetPx();
      let current = toc[0]?.id ?? "";

      for (const item of toc) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) {
          current = item.id;
        } else {
          break;
        }
      }

      setActiveId((prev) => (prev === current ? prev : current));
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [toc]);

  const showToc = toc.length > 0;

  return (
    <div
      ref={rootRef}
      className="bb-article-layout mx-auto max-w-7xl [--bb-header-offset:5.5rem]"
    >
      <div className="min-[900px]:grid min-[900px]:grid-cols-[280px_minmax(0,1fr)] min-[900px]:items-start min-[900px]:gap-10 lg:gap-12">
        <aside className="order-2 mt-12 space-y-4 min-[900px]:order-1 min-[900px]:mt-0 min-[900px]:sticky min-[900px]:top-[var(--bb-header-offset)] min-[900px]:self-start">
          {showToc ? (
            <nav
              aria-label="In this article"
              className="rounded-2xl bg-[#f7f7f5] p-5 md:p-6"
            >
              <p className="font-display text-base font-semibold tracking-tight text-[#232327]">
                In this article
              </p>
              <ol className="mt-4 space-y-3">
                {toc.map((item) => {
                  const active = item.id === activeId;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        aria-current={active ? "true" : undefined}
                        className={`flex items-start gap-2.5 text-sm leading-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 ${
                          active
                            ? "font-semibold text-brand-accent"
                            : "text-[#232327]/75 hover:text-brand-accent"
                        }`}
                      >
                        <span
                          className={`mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full ${
                            active ? "bg-brand-accent" : "bg-brand-accent/30"
                          }`}
                          aria-hidden
                        />
                        <span>{item.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ol>
            </nav>
          ) : null}

          {video ? (
            <div className="hidden rounded-2xl bg-[#f7f7f5] p-5 md:p-6 min-[900px]:block">
              <div className="mb-3 flex items-start justify-between gap-3">
                <p className="font-display text-base font-semibold leading-snug tracking-tight text-[#232327]">
                  {videoTitle}
                </p>
                <MonitorPlay
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#232327]/70"
                  aria-hidden
                />
              </div>
              <YouTubeFacade
                video={video}
                title={videoTitle}
                compact
              />
            </div>
          ) : null}

          <div className="rounded-2xl bg-brand-bg p-5 text-brand-text-pale md:p-6">
            <p className="font-display text-lg font-semibold tracking-tight">
              Book an audit
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brand-text-pale/75">
              We will map where paid media and closed revenue diverge, then what
              to fix first.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
            >
              Book an audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {latestPosts.length > 0 ? (
            <div className="rounded-2xl bg-[#f7f7f5] p-5 md:p-6">
              <p className="font-display text-base font-semibold tracking-tight text-[#232327]">
                Latest articles
              </p>
              <ul className="mt-4 space-y-3">
                {latestPosts.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={postCanonicalPath(item.slug)}
                      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                        {item.category}
                      </span>
                      <span className="mt-0.5 block text-sm font-semibold leading-snug text-[#232327] transition-colors group-hover:text-brand-accent-dark">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/blog"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#232327] transition-colors hover:text-brand-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
              >
                View all
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ) : null}
        </aside>

        <div className="order-1 min-w-0 min-[900px]:order-2">
          {video ? (
            <div className="mb-10 min-[900px]:hidden">
              <p className="mb-3 font-display text-lg font-semibold tracking-tight text-[#232327]">
                {videoTitle}
              </p>
              <YouTubeFacade video={video} title={videoTitle} />
            </div>
          ) : null}

          <div
            ref={bodyRef}
            className={`bb-article__body mx-auto max-w-3xl min-[900px]:mx-0 ${className}`}
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {children ? (
            <div className="mx-auto mt-14 max-w-3xl space-y-6 min-[900px]:mx-0">
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

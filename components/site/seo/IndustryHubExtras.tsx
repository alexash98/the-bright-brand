import Link from "next/link";
import type { Industry } from "@/content/types";
import { getPostsByTags } from "@/lib/posts";
import { postCanonicalPath } from "@/lib/seo/post-metadata";

interface IndustryHubExtrasProps {
  industry: Industry;
}

// The /resources section was retired (Aug 2026); this component now only
// surfaces related blog posts. industry.resourceSlugs is unused but kept on
// the Industry type/content files in case resources return.
export async function IndustryHubExtras({
  industry,
}: IndustryHubExtrasProps): Promise<React.ReactElement | null> {
  const posts = await getPostsByTags(industry.blogTags ?? [], 3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <>
      {posts.length > 0 ? (
        <section className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              From the blog
            </p>
            <h2 className="mb-4 max-w-2xl text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              Related reading
            </h2>
            <p className="mb-12 max-w-3xl text-base leading-relaxed text-neutral-600 md:text-lg">
              Practical notes from live accounts. Start here if you want the
              longer method behind the pages above.
            </p>
            <ul className="grid gap-6 md:grid-cols-3">
              {posts.map((post, index) => (
                <li
                  key={post.slug}
                  className="motion-safe:animate-[industry-fade-up_0.5s_ease-out_both]"
                  style={{ animationDelay: `${index * 55}ms` }}
                >
                  <Link
                    href={postCanonicalPath(post.slug)}
                    className="group block h-full rounded-3xl border border-neutral-200 bg-[#f7f7f5] p-8 transition-colors hover:border-brand-accent hover:bg-white"
                  >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                      {post.category}
                    </p>
                    <h3 className="mb-3 text-lg font-semibold text-neutral-900 group-hover:text-brand-accent-dark">
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {post.subtitle}
                    </p>
                    <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-accent-dark opacity-80 transition-opacity group-hover:opacity-100">
                      Read article
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-10">
              <Link
                href="/blog"
                className="inline-flex min-h-11 items-center rounded-full bg-brand-accent px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-brand-accent-hover"
              >
                View all posts
              </Link>
            </p>
          </div>
        </section>
      ) : null}
    </>
  );
}

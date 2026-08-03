import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { AuthorProfile } from "@/lib/authors";
import { postCanonicalPath } from "@/lib/seo/post-metadata";

interface AuthorArticleLink {
  slug: string;
  title: string;
}

interface AuthorBioCardProps {
  author: AuthorProfile;
  articles: AuthorArticleLink[];
}

export function AuthorBioCard({
  author,
  articles,
}: AuthorBioCardProps): React.ReactElement {
  return (
    <aside className="rounded-2xl bg-[#f7f7f5] p-6 md:p-8">
      <div className="flex items-start gap-4">
        <a
          href={author.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
        >
          <Image
            src={author.photoSrc}
            alt={author.photoAlt}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </a>
        <div className="min-w-0">
          <a
            href={author.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xl font-semibold tracking-tight text-[#232327] transition-colors hover:text-brand-accent-dark"
          >
            {author.name}
          </a>
          <p className="mt-1 text-sm text-neutral-500">
            {author.role}, The Bright Brand
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-neutral-600 md:text-base">
        {author.bio}
      </p>

      {articles.length > 0 ? (
        <div className="mt-8 border-t border-neutral-200/80 pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent-dark">
            Latest articles
          </p>
          <ul className="mt-4 space-y-3">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={postCanonicalPath(article.slug)}
                  className="text-sm font-semibold leading-snug text-[#232327] transition-colors hover:text-brand-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/blog"
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#232327] transition-colors hover:text-brand-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
          >
            More from {author.name.split(" ")[0]}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      ) : null}
    </aside>
  );
}

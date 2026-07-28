import Link from "next/link";

export interface RelatedLink {
  href: string;
  title: string;
  description?: string;
}

interface RelatedLinksProps {
  heading: string;
  links: RelatedLink[];
  eyebrow?: string;
  /** muted = soft band; plain = white (use when the previous section is already muted). */
  surface?: "muted" | "plain";
}

export function RelatedLinks({
  heading,
  links,
  eyebrow = "Related",
  surface = "muted",
}: RelatedLinksProps): React.ReactElement | null {
  if (links.length === 0) return null;

  return (
    <section
      className={`${
        surface === "muted" ? "bg-[#f7f7f5]" : "bg-white"
      } px-4 py-16 md:px-8 md:py-24`}
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          {eyebrow}
        </p>
        <h2 className="mb-10 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
          {heading}
        </h2>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link, index) => (
            <li
              key={link.href}
              className="motion-safe:animate-[industry-fade-up_0.5s_ease-out_both]"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Link
                href={link.href}
                className={`group block h-full rounded-3xl border border-neutral-200 p-7 transition-colors hover:border-brand-accent ${
                  surface === "muted"
                    ? "bg-white hover:bg-white"
                    : "bg-[#f7f7f5] hover:bg-white"
                }`}
              >
                <h3 className="mb-3 text-xl font-semibold text-neutral-900 group-hover:text-brand-accent-dark">
                  {link.title}
                </h3>
                {link.description ? (
                  <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
                    {link.description}
                  </p>
                ) : null}
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-accent-dark opacity-80 transition-opacity group-hover:opacity-100">
                  View page
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

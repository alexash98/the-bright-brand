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
}

export function RelatedLinks({
  heading,
  links,
  eyebrow = "Related",
}: RelatedLinksProps): React.ReactElement | null {
  if (links.length === 0) return null;

  return (
    <section className="bg-[#f7f7f5] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          {eyebrow}
        </p>
        <h2 className="mb-10 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
          {heading}
        </h2>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group block h-full border border-neutral-200 bg-white p-8 transition-colors hover:border-brand-accent"
              >
                <h3 className="mb-3 text-xl font-semibold text-neutral-900 group-hover:text-brand-accent-dark">
                  {link.title}
                </h3>
                {link.description ? (
                  <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
                    {link.description}
                  </p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

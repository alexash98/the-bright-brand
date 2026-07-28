import type { Metadata } from "next";
import Link from "next/link";
import { MarketingHero } from "@/components/site/MarketingHero";
import { Breadcrumbs } from "@/components/site/seo/Breadcrumbs";
import { Cta } from "@/components/site/seo/Cta";
import { MarketingPageShell } from "@/components/site/seo/MarketingPageShell";
import { getAllResources } from "@/content/resources";
import { absolutePageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = absolutePageMetadata({
  title: "Templates and Downloads | The Bright Brand",
  description:
    "Free templates for tender pipelines, GA4 schemas, housebuilder ads structure, negatives, offline uploads and attribution audits.",
  canonicalPath: "/resources",
});

export default function ResourcesIndexPage(): React.ReactElement {
  const resources = getAllResources();

  return (
    <MarketingPageShell
      hero={
        <MarketingHero>
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Resources", href: "/resources" },
            ]}
          />
          <p className="mb-4 inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-bg px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            Free resources
          </p>
          <h1 className="mb-5 max-w-xl text-[2rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl">
            Templates and downloadables
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-brand-text-pale/80 md:text-lg">
            Practical artefacts with direct download links. Email capture is
            optional, never required.
          </p>
          <Link
            href="/industries"
            className="inline-flex h-11 min-h-11 items-center justify-center rounded-full bg-brand-accent px-7 text-sm font-bold text-brand-bg-darker transition-colors hover:bg-brand-accent-hover"
          >
            See industry hubs
          </Link>
        </MarketingHero>
      }
      afterContent={<Cta />}
    >
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <li key={resource.slug}>
                <Link
                  href={`/resources/${resource.slug}`}
                  className="group block h-full rounded-3xl border border-neutral-200 bg-white p-8 transition-colors hover:border-brand-accent"
                >
                  <h2 className="mb-3 text-xl font-semibold text-neutral-900 group-hover:text-brand-accent-dark">
                    {resource.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
                    {resource.intro}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </MarketingPageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { MarketingHero } from "@/components/site/MarketingHero";
import { Breadcrumbs } from "@/components/site/seo/Breadcrumbs";
import { Cta } from "@/components/site/seo/Cta";
import { MarketingPageShell } from "@/components/site/seo/MarketingPageShell";
import { getAllIndustries } from "@/content/registry";
import { breadcrumbList } from "@/lib/schema";
import { absolutePageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = absolutePageMetadata({
  title: "Industries | The Bright Brand",
  description:
    "Industry marketing programmes from The Bright Brand. Vertical pillars and service builds for markets where we have proof.",
  canonicalPath: "/industries",
});

export default function Page(): React.ReactElement {
  const industries = getAllIndustries({ includeExamples: false });
  const previewIndustries = getAllIndustries({ includeExamples: true });
  const list =
    industries.length > 0
      ? industries
      : previewIndustries.filter((industry) => industry.slug === "example-vertical");

  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
      <MarketingPageShell
        hero={
          <MarketingHero>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Industries", href: "/industries" },
              ]}
            />
            <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-text-pale md:text-5xl lg:text-6xl">
              Industries we know how to market
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-brand-text-pale/70 md:text-xl">
              Vertical programmes built around pipeline shape, compliance
              constraints and the infrastructure behind the ads. Pages ship only
              where we have proof.
            </p>
          </MarketingHero>
        }
        afterContent={<Cta />}
      >
        <section className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            {industries.length === 0 ? (
              <p className="mb-10 max-w-3xl text-base leading-relaxed text-neutral-600 md:text-lg">
                No production verticals are published yet. The example fixture
                below is for template review only and is excluded from the
                sitemap.
              </p>
            ) : null}
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {list.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group block h-full border border-neutral-200 bg-white p-8 transition-colors hover:border-brand-accent"
                  >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                      {industry.type === "sub" ? "Sub-vertical" : "Industry"}
                    </p>
                    <h2 className="mb-3 text-xl font-semibold text-neutral-900 group-hover:text-brand-accent-dark">
                      {industry.name}
                    </h2>
                    <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
                      {industry.intro.slice(0, 160)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </MarketingPageShell>
    </>
  );
}

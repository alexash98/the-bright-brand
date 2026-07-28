import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { MarketingHero } from "@/components/site/MarketingHero";
import { Breadcrumbs } from "@/components/site/seo/Breadcrumbs";
import { Cta } from "@/components/site/seo/Cta";
import { IndustryLinkCards } from "@/components/site/seo/IndustryLinkCards";
import { MarketingPageShell } from "@/components/site/seo/MarketingPageShell";
import { getAllIndustries, getChildren } from "@/content/registry";
import type { Industry } from "@/content/types";
import { breadcrumbList } from "@/lib/schema";
import { isHiddenIndustry } from "@/lib/seo/hidden-industries";
import { absolutePageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = absolutePageMetadata({
  title: "Industries | The Bright Brand",
  description:
    "Marketing programmes for construction, travel, and B2B SaaS and consultants. Built around pipeline shape, CRM systems and proof from live accounts.",
  canonicalPath: "/industries",
});

const HUB_ORDER = [
  "construction",
  "travel-tour-operators",
  "b2b-saas-and-platforms",
] as const;

const CHILD_ORDER: Record<string, string[]> = {
  "b2b-saas-and-platforms": [
    "consulting-firms",
    "supplier-management-platforms",
    "enterprise-saas",
  ],
};

const HUB_PROMISE =
  "Construction, travel, and B2B SaaS and consultants. Open a hub, then the sector page that matches how you sell.";

function sortPillars(industries: Industry[]): Industry[] {
  const pillars = industries.filter(
    (industry) => industry.type === "pillar" && !isHiddenIndustry(industry),
  );
  return [...pillars].sort((a, b) => {
    const ai = HUB_ORDER.indexOf(a.slug as (typeof HUB_ORDER)[number]);
    const bi = HUB_ORDER.indexOf(b.slug as (typeof HUB_ORDER)[number]);
    const aRank = ai === -1 ? 99 : ai;
    const bRank = bi === -1 ? 99 : bi;
    if (aRank !== bRank) return aRank - bRank;
    return a.name.localeCompare(b.name);
  });
}

function clip(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max).replace(/\s+\S*$/, "")}…`;
}

export default function Page(): React.ReactElement {
  const industries = getAllIndustries({ includeExamples: false });
  const pillars = sortPillars(industries);
  const previewOnly =
    pillars.length === 0
      ? getAllIndustries({ includeExamples: true }).filter(
          (industry) => industry.slug === "example-vertical",
        )
      : [];
  const list = pillars.length > 0 ? pillars : previewOnly;

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
            <p className="mb-4 inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-bg px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Industry hubs
            </p>
            <h1 className="mb-5 max-w-xl text-[2rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl">
              Industries we know how to market
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-brand-text-pale/80 md:text-lg">
              {HUB_PROMISE}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex h-11 min-h-11 items-center justify-center rounded-full bg-brand-accent px-7 text-sm font-bold text-brand-bg-darker transition-colors hover:bg-brand-accent-hover"
              >
                Arrange a 15-minute intro
              </Link>
              <Link
                href="/industries/construction"
                className="inline-flex h-11 min-h-11 items-center justify-center rounded-full border border-brand-accent/25 bg-brand-bg px-7 text-sm font-bold text-white transition-colors hover:border-brand-accent/45"
              >
                Start with construction
              </Link>
            </div>
          </MarketingHero>
        }
        afterContent={<Cta />}
      >
        <section className="bg-white px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl space-y-20">
            {list.length === 0 ? (
              <p className="max-w-3xl text-base leading-relaxed text-neutral-600 md:text-lg">
                Production verticals are still loading into the registry.
              </p>
            ) : null}

            {list.map((pillar) => {
              const preferred = CHILD_ORDER[pillar.slug];
              const children = [...getChildren(pillar.slug)].sort((a, b) => {
                if (!preferred) return a.name.localeCompare(b.name);
                const ai = preferred.indexOf(a.slug);
                const bi = preferred.indexOf(b.slug);
                const aRank = ai === -1 ? 99 : ai;
                const bRank = bi === -1 ? 99 : bi;
                if (aRank !== bRank) return aRank - bRank;
                return a.name.localeCompare(b.name);
              });
              const childCards = children.map((child) => ({
                href: `/industries/${child.slug}`,
                title: child.name,
                description: clip(child.intro, 150),
                icon: pillar.slug,
                ctaLabel: "Open sector",
              }));

              return (
                <article key={pillar.slug} className="space-y-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-3xl">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                        Industry hub
                      </p>
                      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                        <Link
                          href={`/industries/${pillar.slug}`}
                          className="transition-colors hover:text-brand-accent-dark"
                        >
                          {pillar.name}
                        </Link>
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                        {clip(pillar.intro, 220)}
                      </p>
                    </div>
                    <Link
                      href={`/industries/${pillar.slug}`}
                      className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-brand-accent px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-brand-accent-hover"
                    >
                      Open {pillar.name}
                    </Link>
                  </div>

                  {childCards.length > 0 ? (
                    <IndustryLinkCards items={childCards} />
                  ) : (
                    <IndustryLinkCards
                      items={[
                        {
                          href: `/industries/${pillar.slug}`,
                          title: pillar.name,
                          description: clip(pillar.intro, 160),
                          icon: pillar.slug,
                          ctaLabel: "Open hub",
                        },
                      ]}
                    />
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </MarketingPageShell>
    </>
  );
}

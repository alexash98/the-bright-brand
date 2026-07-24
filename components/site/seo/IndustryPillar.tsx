import Link from "next/link";
import { MarketingHero } from "@/components/site/MarketingHero";
import { Breadcrumbs } from "@/components/site/seo/Breadcrumbs";
import { Cta } from "@/components/site/seo/Cta";
import { FaqAccordion } from "@/components/site/seo/FaqAccordion";
import { MarketingPageShell } from "@/components/site/seo/MarketingPageShell";
import { ProofBlock } from "@/components/site/seo/ProofBlock";
import { RelatedLinks } from "@/components/site/seo/RelatedLinks";
import type { Industry } from "@/content/types";

interface IndustryPillarProps {
  industry: Industry;
  serviceLinks: {
    href: string;
    title: string;
    description: string;
  }[];
  relatedLinks: {
    href: string;
    title: string;
    description: string;
  }[];
  childLinks?: {
    href: string;
    title: string;
    description: string;
  }[];
}

export function IndustryPillar({
  industry,
  serviceLinks,
  relatedLinks,
  childLinks = [],
}: IndustryPillarProps): React.ReactElement {
  const h1 = `${industry.name} marketing agency`;

  return (
    <MarketingPageShell
      hero={
        <MarketingHero>
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Industries", href: "/industries" },
              { name: industry.name, href: `/industries/${industry.slug}` },
            ]}
          />
          <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-text-pale md:text-5xl lg:text-6xl">
            {h1}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-brand-text-pale/70 md:text-xl">
            {industry.intro}
          </p>
        </MarketingHero>
      }
      afterContent={<Cta />}
    >
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Pipeline
          </p>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            How the pipeline actually works in {industry.name.toLowerCase()}
          </h2>
          <div className="space-y-8">
            {industry.pipelineShape.map((section) => (
              <div key={section.heading} className="max-w-3xl">
                <h3 className="mb-3 text-xl font-semibold text-neutral-900">
                  {section.heading}
                </h3>
                <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            What we do
          </p>
          <h2 className="mb-4 max-w-2xl text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Services built for this vertical
          </h2>
          <p className="mb-12 max-w-3xl text-base leading-relaxed text-neutral-600 md:text-lg">
            Industry-specific builds where they exist, plus the broader service
            pillars when a spoke has not been written yet.
          </p>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group block h-full border border-neutral-200 bg-white p-8 transition-colors hover:border-brand-accent"
                >
                  <h3 className="mb-3 text-xl font-semibold text-neutral-900 group-hover:text-brand-accent-dark">
                    {link.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
                    {link.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProofBlock
        proof={industry.proof}
        heading={`Proof from ${industry.name.toLowerCase()} work`}
      />

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Infrastructure
          </p>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            The infrastructure we build
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {industry.infrastructure.map((section) => (
              <div
                key={section.heading}
                className="border-t border-neutral-200 pt-8"
              >
                <h3 className="mb-3 text-xl font-semibold text-neutral-900">
                  {section.heading}
                </h3>
                <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {childLinks.length > 0 ? (
        <RelatedLinks
          eyebrow="Sub-verticals"
          heading={`Related ${industry.name.toLowerCase()} markets`}
          links={childLinks}
        />
      ) : null}

      <RelatedLinks
        eyebrow="Related verticals"
        heading="Nearby industries we also work in"
        links={relatedLinks}
      />

      <FaqAccordion
        heading={`${industry.name} marketing FAQs`}
        faqs={industry.faqs}
      />
    </MarketingPageShell>
  );
}

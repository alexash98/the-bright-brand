import Link from "next/link";
import { MarketingHero } from "@/components/site/MarketingHero";
import { Breadcrumbs } from "@/components/site/seo/Breadcrumbs";
import { Cta } from "@/components/site/seo/Cta";
import { FaqAccordion } from "@/components/site/seo/FaqAccordion";
import { MarketingPageShell } from "@/components/site/seo/MarketingPageShell";
import { ProofBlock } from "@/components/site/seo/ProofBlock";
import { RelatedLinks } from "@/components/site/seo/RelatedLinks";
import type { Industry, MoneyPage as MoneyPageData } from "@/content/types";
import type { ServiceCatalogueEntry } from "@/content/services";

interface MoneyPageProps {
  industry: Industry;
  moneyPage: MoneyPageData;
  service: ServiceCatalogueEntry;
  relatedLinks: {
    href: string;
    title: string;
    description: string;
  }[];
}

export function MoneyPage({
  industry,
  moneyPage,
  service,
  relatedLinks,
}: MoneyPageProps): React.ReactElement {
  const industryHref = `/industries/${industry.slug}`;
  const serviceHref = `/services/${service.slug}`;

  return (
    <MarketingPageShell
      hero={
        <MarketingHero>
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Industries", href: "/industries" },
              { name: industry.name, href: industryHref },
              { name: service.shortName, href: `${industryHref}/${service.slug}` },
            ]}
          />
          <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-text-pale md:text-5xl lg:text-6xl">
            {moneyPage.title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-brand-text-pale/70 md:text-xl">
            {moneyPage.intro}
          </p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-brand-text-pale/60">
            Part of our{" "}
            <Link
              href={industryHref}
              className="font-semibold text-brand-accent underline-offset-4 hover:underline"
            >
              {industry.name} marketing programmes
            </Link>{" "}
            and{" "}
            <Link
              href={serviceHref}
              className="font-semibold text-brand-accent underline-offset-4 hover:underline"
            >
              {service.name} service pillar
            </Link>
            .
          </p>
        </MarketingHero>
      }
      afterContent={<Cta />}
    >
      {moneyPage.sections.map((section) => (
        <section
          key={section.heading}
          className="px-4 py-16 md:px-8 md:py-20"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              {section.heading}
            </h2>
            <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
              {section.body}
            </p>
          </div>
        </section>
      ))}

      <ProofBlock
        proof={moneyPage.proof}
        heading={`${service.shortName} proof in ${industry.name.toLowerCase()}`}
      />

      <RelatedLinks
        eyebrow="Related"
        heading="Related industries and services"
        links={relatedLinks}
      />

      <FaqAccordion
        heading={`${service.shortName} for ${industry.name.toLowerCase()} FAQs`}
        faqs={moneyPage.faqs}
      />
    </MarketingPageShell>
  );
}

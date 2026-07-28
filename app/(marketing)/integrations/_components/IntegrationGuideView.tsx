import Link from "next/link";
import { MarketingHero } from "@/components/site/MarketingHero";
import { Breadcrumbs } from "@/components/site/seo/Breadcrumbs";
import { Cta } from "@/components/site/seo/Cta";
import { FaqAccordion } from "@/components/site/seo/FaqAccordion";
import { MarketingPageShell } from "@/components/site/seo/MarketingPageShell";
import { RelatedLinks } from "@/components/site/seo/RelatedLinks";
import type { IntegrationGuide } from "@/content/integrations/types";

interface IntegrationGuideViewProps {
  guide: IntegrationGuide;
}

export function IntegrationGuideView({
  guide,
}: IntegrationGuideViewProps): React.ReactElement {
  return (
    <MarketingPageShell
      hero={
        <MarketingHero>
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Integrations", href: "/integrations" },
              { name: guide.name, href: `/integrations/${guide.slug}` },
            ]}
          />
          <p className="mb-4 inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-bg px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            Integration guide
          </p>
          <h1 className="mb-5 max-w-xl text-[2rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl">
            {guide.name}
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-brand-text-pale/80 md:text-lg">
            {guide.intro}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-11 min-h-11 items-center justify-center rounded-full bg-brand-accent px-7 text-sm font-bold text-brand-bg-darker transition-colors hover:bg-brand-accent-hover"
            >
              Arrange a 15-minute intro
            </Link>
            <Link
              href="/industries"
              className="inline-flex h-11 min-h-11 items-center justify-center rounded-full border border-brand-accent/25 bg-brand-bg px-7 text-sm font-bold text-white transition-colors hover:border-brand-accent/45"
            >
              See industry hubs
            </Link>
          </div>
        </MarketingHero>
      }
      afterContent={<Cta />}
    >
      {guide.unverifiedUiNotes.length > 0 ? (
        <section className="border-b border-amber-200 bg-amber-50 px-4 py-6 md:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
              UI verification note
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-amber-950">
              {guide.unverifiedUiNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <article className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl space-y-12">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                {section.heading}
              </h2>
              {section.body.split("\n\n").map((paragraph) => (
                <p
                  key={paragraph.slice(0, 64)}
                  className="mb-4 text-base leading-relaxed text-neutral-600 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>

      <RelatedLinks
        heading="Related guides and services"
        links={guide.relatedLinks}
      />
      <FaqAccordion heading={`${guide.name} FAQs`} faqs={guide.faqs} />
    </MarketingPageShell>
  );
}

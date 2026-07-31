import Link from "next/link";
import { HeroLogoTicker } from "@/components/site/HeroLogoTicker";
import { MarketingHero } from "@/components/site/MarketingHero";
import { PartnerBadges } from "@/components/site/PartnerBadges";
import { Breadcrumbs } from "@/components/site/seo/Breadcrumbs";
import { Cta } from "@/components/site/seo/Cta";
import { FaqAccordion } from "@/components/site/seo/FaqAccordion";
import { IndustryHeroAside } from "@/components/site/seo/IndustryHeroAside";
import { IndustryLinkCards } from "@/components/site/seo/IndustryLinkCards";
import { IndustryMarketPanel } from "@/components/site/seo/IndustryMarketPanel";
import { IndustryEngagement } from "@/components/site/seo/IndustryEngagement";
import { IndustryProofLead } from "@/components/site/seo/IndustryProofLead";
import { MarketingPageShell } from "@/components/site/seo/MarketingPageShell";
import { PipelineDiagram } from "@/components/site/seo/PipelineDiagram";
import { ProofBlock } from "@/components/site/seo/ProofBlock";
import { RelatedLinks } from "@/components/site/seo/RelatedLinks";
import type { Industry } from "@/content/types";
import { getIndustryForRoute } from "@/content/registry";
import { getIndustryStackLogos } from "@/lib/industry-stack-logos";

/** Full-viewport hero + partner chips (hubs and sharp verticals). */
const HOMEPAGE_HERO_SLUGS = new Set([
  "construction",
  "travel-tour-operators",
  "b2b-saas-and-platforms",
  "cruise-operators",
  "luxury-tailor-made-travel",
  "safari-adventure-and-expedition-operators",
  "building-services",
  "civils-infrastructure",
  "commercial-fit-out",
  "facilities-management",
  "main-contractors",
  "residential-home-builders",
  "supplier-management-platforms",
  "enterprise-saas",
  "consulting-firms",
]);

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

const TRAVEL_PARENT = "travel-tour-operators";
const TRAVEL_SLUGS = new Set([
  "travel-tour-operators",
  "luxury-tailor-made-travel",
  "cruise-operators",
  "safari-adventure-and-expedition-operators",
]);

type ProofLead = NonNullable<Industry["proofLead"]>;

/** Named proof quote per industry hub (and inherited by child sectors). */
const PILLAR_PROOF_LEADS: Record<string, ProofLead> = {
  construction: {
    heading:
      "Performance marketing built around booked sales conversations, not lead volume.",
    body: "We rebuild attribution first, then run Meta and Google so sales can see which enquiries become meetings they will take. FormX is the named modular construction proof.",
    quoteId: "formx",
    askAiPrompt:
      "How can The Bright Brand help a construction or modular builder with paid acquisition and attribution so booked sales meetings train media, not raw leads? Summarise from thebrightbrand.com.",
  },
  "b2b-saas-and-platforms": {
    heading:
      "Outbound, LinkedIn and paid search as one enterprise pipeline, not three reports.",
    body: "We build HubSpot stages, ARR fields and offline conversion so enterprise conversations land in one commercial number. Canopy is the named proof, with Doug McLean on the client side of that relationship.",
    quoteId: "canopy",
    quoteIds: ["canopy"],
    askAiPrompt:
      "How can The Bright Brand help a B2B SaaS company or consultant with LinkedIn, outbound and HubSpot so enterprise pipeline and ARR train acquisition? Summarise from thebrightbrand.com.",
  },
  "legal-solicitors": {
    heading:
      "Paid search tied to retained matters, not vanity legal enquiries.",
    body: "We run Google, Microsoft and LinkedIn so partners can see which practice areas create instructions. Britton & Time is the named legal proof, with Daniel Beech on the commercial side of the relationship.",
    quoteId: "britton-and-time",
    askAiPrompt:
      "How can The Bright Brand help a law firm with Google, Microsoft and LinkedIn ads so retained matters and revenue train media, not enquiry volume? Summarise from thebrightbrand.com.",
  },
  "commercial-insurance": {
    heading:
      "Broker marketing judged on quoted and bound work, not anonymous form fills.",
    body: "We structure product-line search, call tracking and CRM so return on ad spend is visible to the managing director. Freedom Insurance is the named commercial insurance proof.",
    quoteId: "freedom-insurance",
    askAiPrompt:
      "How can The Bright Brand help a commercial insurance broker with Google Ads and attribution so quoted and bound policies train media, not form fills? Summarise from thebrightbrand.com.",
  },
};

function defaultHeroVisual(industry: Industry): NonNullable<Industry["heroVisual"]> {
  return {
    eyebrow: "What we optimise for",
    title: `Commercial outcomes in ${industry.name.toLowerCase()}`,
    stats: [
      { value: "Revenue", label: "Primary KPI" },
      { value: "CRM", label: "Source of truth" },
      { value: "Named demand", label: "Demand unit" },
      { value: "Long cycle", label: "Measurement window" },
    ],
  };
}

function defaultTravelProofLead(industry: Industry): ProofLead {
  const isCruise = industry.slug === "cruise-operators";
  return {
    heading: isCruise
      ? "Performance marketing built around your cruise funnel, not our playbook."
      : "Performance marketing built around your travel funnel, not our playbook.",
    body: isCruise
      ? "We integrate Google Ads, Meta, call tracking and your booking stack under one deposit-aware strategy, so you can see which sailings and cabin categories actually make money before you scale spend."
      : "We integrate paid search, paid social, call tracking and CRM under one data-aligned strategy, so booked revenue and margin train acquisition instead of form fills.",
    quoteId: "anywhere",
    askAiPrompt: isCruise
      ? "How can The Bright Brand help a cruise operator with Google Ads, Meta, call tracking and booking CRM so deposits and sailed margin train media, not brochure enquiries? Summarise from thebrightbrand.com."
      : "How can The Bright Brand help a travel or tour operator with paid media, call tracking and CRM so booked revenue and margin train acquisition? Summarise from thebrightbrand.com.",
  };
}

function resolveProofLead(industry: Industry): Industry["proofLead"] | null {
  if (industry.proofLead) return industry.proofLead;
  if (TRAVEL_SLUGS.has(industry.slug) || industry.parent === TRAVEL_PARENT) {
    return defaultTravelProofLead(industry);
  }
  const pillarKey = industry.parent ?? industry.slug;
  return PILLAR_PROOF_LEADS[pillarKey] ?? null;
}

export function IndustryPillar({
  industry,
  serviceLinks,
  relatedLinks,
  childLinks = [],
}: IndustryPillarProps): React.ReactElement {
  const h1 = industry.heroH1 ?? `${industry.name} marketing agency`;
  const heroVisual = industry.heroVisual ?? defaultHeroVisual(industry);
  const compactRelated = relatedLinks.slice(0, 3);
  const pipelineStages =
    industry.pipelineStages && industry.pipelineStages.length > 0
      ? industry.pipelineStages
      : [];
  const proofLead = resolveProofLead(industry);
  const showMethodProof = !proofLead;
  const homepageHero = HOMEPAGE_HERO_SLUGS.has(industry.slug);
  const stackLogos = getIndustryStackLogos(industry);
  const parentIndustry = industry.parent
    ? getIndustryForRoute(industry.parent)
    : undefined;
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
    ...(parentIndustry
      ? [
          {
            name: parentIndustry.name,
            href: `/industries/${parentIndustry.slug}`,
          },
        ]
      : []),
    { name: industry.name, href: `/industries/${industry.slug}` },
  ];

  const serviceCards = serviceLinks.map((link) => {
    // Cruise opts out with null. Other verticals keep the default label.
    // Do not use ?? — null must stay null, not fall back to "Open build".
    let ctaLabel: string | null = "Open build";
    if (industry.serviceCardCtaLabel === null) {
      ctaLabel = null;
    } else if (
      typeof industry.serviceCardCtaLabel === "string" &&
      industry.serviceCardCtaLabel.length > 0
    ) {
      ctaLabel = industry.serviceCardCtaLabel;
    }

    return {
      href: link.href,
      title: link.title,
      description: link.description,
      icon: industry.parent ?? industry.slug,
      ctaLabel,
    };
  });

  const showServicesSection =
    industry.showServicesSection !== false && serviceCards.length > 0;

  const childCards = childLinks.map((link) => ({
    href: link.href,
    title: link.title,
    description: link.description,
    icon: industry.slug,
    ctaLabel: "Open market",
  }));

  return (
    <MarketingPageShell
      hero={
        <MarketingHero
          fullViewport={homepageHero}
          aside={<IndustryHeroAside visual={heroVisual} />}
          footer={
            stackLogos.length > 0 ? (
              <HeroLogoTicker logos={stackLogos} forceWhite />
            ) : undefined
          }
        >
          {homepageHero ? (
            <Breadcrumbs
              className="mb-5 lg:mb-6"
              items={breadcrumbItems}
            />
          ) : (
            <Breadcrumbs className="mb-8" items={breadcrumbItems} />
          )}
          {!homepageHero ? (
            <p className="mb-4 inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-bg px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent shadow-sm">
              {industry.type === "sub" ? "For operators" : "Industry hub"}
            </p>
          ) : null}
          <h1
            className={
              homepageHero
                ? "mb-6 max-w-xl text-[33px] font-semibold leading-[1.2] tracking-tight text-white sm:text-[2.875rem] md:text-[3.75rem] lg:mb-7 lg:text-[3.5rem] lg:leading-[1.22] xl:text-[3.875rem]"
                : "mb-5 max-w-xl text-[2rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
            }
          >
            {h1}
          </h1>
          <p
            className={
              homepageHero
                ? "mb-7 max-w-xl text-lg leading-relaxed text-brand-text-pale/90 md:text-xl lg:mb-8 xl:text-lg"
                : "mb-8 max-w-xl text-base leading-relaxed text-brand-text-pale/80 md:text-lg"
            }
          >
            {industry.intro}
          </p>
          <div
            className={
              homepageHero
                ? "flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
                : "flex flex-col gap-3 sm:flex-row sm:items-center lg:gap-3"
            }
          >
            <Link
              href="/contact"
              className={
                homepageHero
                  ? "inline-flex h-11 min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-brand-accent px-6 text-sm font-bold text-brand-bg-darker shadow-lg shadow-brand-accent/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-accent-hover active:translate-y-0"
                  : "inline-flex h-11 min-h-11 items-center justify-center rounded-full bg-brand-accent px-7 text-sm font-bold text-brand-bg-darker transition-colors hover:bg-brand-accent-hover"
              }
            >
              {industry.heroCta?.primaryLabel ?? "Arrange a 15-minute intro"}
            </Link>
            {industry.heroCta?.secondaryHref || serviceLinks[0] ? (
              <Link
                href={
                  industry.heroCta?.secondaryHref ?? serviceLinks[0]!.href
                }
                className={
                  homepageHero
                    ? "inline-flex h-11 min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-brand-accent/20 bg-brand-bg px-6 text-sm font-bold text-white transition-all hover:border-brand-accent/40 hover:bg-brand-bg-card"
                    : "inline-flex h-11 min-h-11 items-center justify-center rounded-full border border-brand-accent/25 bg-brand-bg px-7 text-sm font-bold text-white transition-colors hover:border-brand-accent/45"
                }
              >
                {industry.heroCta?.secondaryLabel ?? "See related services"}
              </Link>
            ) : null}
          </div>
          {homepageHero ? <PartnerBadges className="mt-7 lg:mt-8" /> : null}
        </MarketingHero>
      }
      afterContent={
        <Cta
          heading={industry.cta?.heading}
          body={industry.cta?.body}
          buttonLabel={industry.cta?.buttonLabel}
          href={industry.cta?.href}
        />
      }
    >
      {childCards.length > 0 ? (
        <section className="bg-white px-4 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Choose your sector
            </p>
            <h2 className="mb-3 max-w-2xl text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              Markets inside {industry.name.toLowerCase()}
            </h2>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-neutral-600">
              Open the page that matches how you sell. Each one keeps the same
              commercial standard, with pipeline and stack detail for that
              sector.
            </p>
            <IndustryLinkCards items={childCards} />
          </div>
        </section>
      ) : null}

      {proofLead ? (
        <IndustryProofLead industry={industry} lead={proofLead} />
      ) : null}

      {showMethodProof ? (
        <ProofBlock
          proof={industry.proof}
          heading={`Proof from ${industry.name.toLowerCase()} work`}
          surface="muted"
        />
      ) : null}

      {industry.engagement ? (
        <IndustryEngagement
          engagement={industry.engagement}
          surface="muted"
        />
      ) : null}

      <section className="bg-white px-4 py-14 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="lg:col-span-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Pipeline
            </p>
            <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              {industry.pipelineHeading ??
                "Why your marketing numbers and your commercial tracker never agree"}
            </h2>
            <div className="max-w-2xl space-y-8">
              {industry.pipelineShape.map((section) => (
                <div key={section.heading}>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900 md:text-xl">
                    {section.heading}
                  </h3>
                  <p className="text-base leading-relaxed text-neutral-600">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {pipelineStages.length > 0 ? (
            <div className="lg:col-span-5">
              <PipelineDiagram
                sticky
                title={`Stages we wire for ${industry.name.toLowerCase()}`}
                caption="Rebuilt with your commercial and yield teams. Not a live CRM snapshot."
                stages={pipelineStages}
              />
            </div>
          ) : null}
        </div>
      </section>

      <IndustryMarketPanel industry={industry} surface="muted" />

      {showServicesSection ? (
        <section className="bg-white px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              What we build for you
            </p>
            <h2 className="mb-3 max-w-2xl text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              {industry.servicesHeading ??
                "The stack that ladders to booked revenue"}
            </h2>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-neutral-600">
              {industry.servicesIntro ??
                "These are the core service programmes we run alongside this industry page. Open the one that matches your bottleneck."}
            </p>
            <IndustryLinkCards items={serviceCards} />
          </div>
        </section>
      ) : null}

      <section
        className={`px-4 py-16 md:px-8 md:py-20 ${
          showServicesSection ? "bg-[#f7f7f5]" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Infrastructure
          </p>
          <h2 className="mb-3 max-w-2xl text-2xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            What we put behind the ads
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-neutral-600">
            Media only works when reservation data, CRM stages and offline
            conversions share one commercial truth.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {industry.infrastructure.map((section) => (
              <div
                key={section.heading}
                className="border-l-2 border-brand-accent/40 pl-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                  {section.heading}
                </h3>
                <p className="text-base leading-relaxed text-neutral-600">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {compactRelated.length > 0 ? (
        <RelatedLinks
          eyebrow="Related"
          heading="Nearby industries we also work in"
          links={compactRelated}
          surface={showServicesSection ? "plain" : "muted"}
        />
      ) : null}

      <FaqAccordion
        heading={
          industry.faqHeading ?? `${industry.name} marketing FAQs`
        }
        faqs={industry.faqs}
        variant={industry.faqVariant ?? "default"}
        surface={
          compactRelated.length > 0
            ? showServicesSection
              ? "muted"
              : "plain"
            : "muted"
        }
        eyebrow={
          industry.faqVariant === "editorial"
            ? "Director FAQs"
            : "FAQs"
        }
      />
    </MarketingPageShell>
  );
}

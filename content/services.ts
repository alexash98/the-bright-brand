import type { ServiceSlug } from "@/content/types";
import { SERVICE_SLUGS } from "@/content/validate";

export interface ServiceCatalogueEntry {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  /** Structural placeholder only. Vertical proof lives on industry money pages. */
  intro: string;
  sections: { heading: string; body: string }[];
}

/**
 * Thin service catalogue for pillar routes. Full vertical proof and copy live
 * in content/industries/*.ts. These entries exist so /services/[service] can
 * render before every vertical ships, and so generateStaticParams is complete.
 */
export const SERVICE_CATALOGUE: ServiceCatalogueEntry[] = [
  {
    slug: "google-ads-management",
    name: "Google Ads management",
    shortName: "Google Ads",
    metaTitle: "Google Ads Management Agency | The Bright Brand",
    metaDescription:
      "Google Ads management for B2B and restricted verticals, built around pipeline and revenue rather than vanity ROAS.",
    intro:
      "Paid search programmes built around how your buyers actually enquire, with tracking that survives the handoff from click to closed revenue.",
    sections: [
      {
        heading: "What this service covers",
        body: "Account architecture, keyword and audience strategy, creative testing, bidding, and the measurement layer that ties spend to pipeline.",
      },
      {
        heading: "Where industry variants matter",
        body: "Policy constraints, cycle length and conversion events differ by vertical. Industry pages below show how we adapt the build.",
      },
    ],
  },
  {
    slug: "linkedin-b2b-advertising",
    name: "LinkedIn B2B advertising",
    shortName: "LinkedIn ads",
    metaTitle: "LinkedIn B2B Advertising Agency | The Bright Brand",
    metaDescription:
      "LinkedIn advertising for long-cycle B2B, with account targeting, creative testing and CRM-backed measurement.",
    intro:
      "LinkedIn programmes aimed at named roles and accounts, measured on pipeline contribution rather than cheap leads.",
    sections: [
      {
        heading: "What this service covers",
        body: "Audience design, creative systems, offer testing, and offline conversion loops into HubSpot or Salesforce.",
      },
      {
        heading: "Where industry variants matter",
        body: "Buying committees and message angles change by vertical. Industry pages below show the specific builds.",
      },
    ],
  },
  {
    slug: "crm-implementation",
    name: "CRM implementation",
    shortName: "CRM",
    metaTitle: "CRM Implementation Agency | The Bright Brand",
    metaDescription:
      "HubSpot, Salesforce and Pipedrive builds mapped to real sales cycles, not generic funnel templates.",
    intro:
      "CRM builds that mirror how your deals actually move, so forecasting and attribution mean something to the board.",
    sections: [
      {
        heading: "What this service covers",
        body: "Object and pipeline design, lifecycle stages, integrations, migration, and the reporting layer sales will actually use.",
      },
      {
        heading: "Where industry variants matter",
        body: "Tender cycles, reservation pipelines and clinic booking flows need different stage models. See the industry pages below.",
      },
    ],
  },
  {
    slug: "conversion-tracking-attribution",
    name: "Conversion tracking and attribution",
    shortName: "Attribution",
    metaTitle: "Conversion Tracking and Attribution | The Bright Brand",
    metaDescription:
      "Server-side tracking, offline conversions and blended attribution so paid media learns from revenue, not form fills.",
    intro:
      "Measurement systems that connect ad platforms to CRM and revenue events, including offline conversions and Odal.",
    sections: [
      {
        heading: "What this service covers",
        body: "Server-side tagging, consent mode, offline conversion upload, and blended reporting across channels.",
      },
      {
        heading: "Where industry variants matter",
        body: "Phone-led bookings, tender wins and clinic consultations each need a different conversion definition.",
      },
    ],
  },
  {
    slug: "call-tracking",
    name: "Call tracking",
    shortName: "Call tracking",
    metaTitle: "Call Tracking Agency | The Bright Brand",
    metaDescription:
      "Dynamic number insertion and call-to-CRM-to-ad-platform loops for phone-led conversion paths.",
    intro:
      "Call tracking that closes the loop from number swap to CRM outcome to ad platform optimisation.",
    sections: [
      {
        heading: "What this service covers",
        body: "Dynamic number insertion, call recording governance, CRM logging, and offline conversion upload from qualified calls.",
      },
      {
        heading: "Where industry variants matter",
        body: "Showhome lines, clinic booking lines and tour operator reservation teams need different pool designs.",
      },
    ],
  },
  {
    slug: "landing-pages-cro",
    name: "Landing pages and CRO",
    shortName: "Landing pages",
    metaTitle: "Landing Pages and CRO Agency | The Bright Brand",
    metaDescription:
      "Landing page build, test and iteration programmes tied to paid media and CRM conversion events.",
    intro:
      "Landing pages and CRO programmes built to test offers, prove message-market fit, and feed cleaner data upstream.",
    sections: [
      {
        heading: "What this service covers",
        body: "Page build, experiment design, analytics instrumentation, and iteration against qualified enquiry rate.",
      },
      {
        heading: "Where industry variants matter",
        body: "Compliance copy, tender-led offers and development-level pages each change the test plan.",
      },
    ],
  },
  {
    slug: "marketing-automation",
    name: "Marketing automation",
    shortName: "Automation",
    metaTitle: "Marketing Automation Agency | The Bright Brand",
    metaDescription:
      "Lifecycle nurture, CRM workflows and n8n automations that keep long B2B cycles warm without spam.",
    intro:
      "Automation that respects long buying cycles: nurture, routing and ops workflows connected to the CRM.",
    sections: [
      {
        heading: "What this service covers",
        body: "Lifecycle design, workflow build, n8n integrations, and reporting on progression rather than email vanity metrics.",
      },
      {
        heading: "Where industry variants matter",
        body: "Compliance constraints and cycle length dictate cadence and content. Industry pages cover the specifics.",
      },
    ],
  },
  {
    slug: "outbound-lead-generation",
    name: "Outbound lead generation",
    shortName: "Outbound",
    metaTitle: "Outbound Lead Generation Agency | The Bright Brand",
    metaDescription:
      "Cold email infrastructure at scale, with deliverability, list ops and CRM handoff built in.",
    intro:
      "Outbound systems for markets where search demand alone will not fill the pipeline, with infrastructure that protects domain health.",
    sections: [
      {
        heading: "What this service covers",
        body: "Domain and inbox infrastructure, list building, sequencing, and CRM logging for replies and meetings.",
      },
      {
        heading: "Where industry variants matter",
        body: "ICP definition and offer angles change sharply by vertical. See industry variants below.",
      },
    ],
  },
  {
    slug: "reporting-dashboards",
    name: "Reporting dashboards",
    shortName: "Reporting",
    metaTitle: "Marketing Reporting Dashboards | The Bright Brand",
    metaDescription:
      "Blended board-level reporting across ads, CRM and revenue so leadership sees pipeline, not clicks.",
    intro:
      "Dashboards that blend ad platforms, CRM and revenue into a view the board can use in a decision meeting.",
    sections: [
      {
        heading: "What this service covers",
        body: "Metric design, data modelling, dashboard build, and the operating cadence that keeps numbers trusted.",
      },
      {
        heading: "Where industry variants matter",
        body: "Margin-based ROAS, tender pipeline and clinic consultation rates each need different board metrics.",
      },
    ],
  },
];

export function getServiceCatalogueEntry(
  slug: string,
): ServiceCatalogueEntry | undefined {
  return SERVICE_CATALOGUE.find((entry) => entry.slug === slug);
}

export function getAllServiceCatalogueSlugs(): ServiceSlug[] {
  return [...SERVICE_SLUGS];
}

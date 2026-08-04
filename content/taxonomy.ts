export interface TaxonomyLink {
  href: string;
  anchor: string;
  description?: string;
}

export interface TaxonomyMapping {
  tag: string;
  industries: TaxonomyLink[];
  services: TaxonomyLink[];
}

export const TAXONOMY: TaxonomyMapping[] = [
  {
    tag: "offline-conversions",
    industries: [
      {
        href: "/industries/b2b-saas-and-platforms",
        anchor: "B2B SaaS and consultants marketing",
        description: "Long cycles that need closed-revenue uploads",
      },
      {
        href: "/industries/commercial-fit-out",
        anchor: "Commercial fit-out marketing",
        description: "Tender awards as the true conversion",
      },
    ],
    services: [
      {
        href: "/services/attribution",
        anchor: "Conversion tracking and attribution",
        description: "Offline conversion design and upload loops",
      },
      {
        href: "/services/attribution",
        anchor: "CRM implementation",
        description: "Stage models that carry click IDs to close",
      },
    ],
  },
  {
    tag: "google-ads",
    industries: [
      {
        href: "/industries/travel-tour-operators",
        anchor: "Travel and tour operator marketing",
        description: "Margin-aware paid search for bookings",
      },
      {
        href: "/industries/residential-home-builders",
        anchor: "Residential home builder marketing",
        description: "Development-level search structure",
      },
    ],
    services: [
      {
        href: "/services/ppc",
        anchor: "Google Ads management",
        description: "Account architecture tied to pipeline",
      },
      {
        href: "/services/attribution",
        anchor: "Conversion tracking and attribution",
        description: "Measurement behind efficient bidding",
      },
    ],
  },
  {
    tag: "meta-ads",
    industries: [
      {
        href: "/industries/legal-solicitors",
        anchor: "Legal and solicitor marketing",
        description: "Compliance-aware paid social",
      },
      {
        href: "/industries/medical-healthcare",
        anchor: "Medical and healthcare marketing",
        description: "Restricted vertical paid media",
      },
    ],
    services: [
      {
        href: "/services/attribution",
        anchor: "Conversion tracking and attribution",
        description: "Offline events and CRM-backed values",
      },
      {
        href: "/services/creative",
        anchor: "Landing pages and CRO",
        description: "Pages that match ad promise to enquiry",
      },
    ],
  },
  {
    tag: "travel",
    industries: [
      {
        href: "/industries/travel-tour-operators",
        anchor: "Travel and tour operator marketing",
        description: "Phone-led booking journeys",
      },
    ],
    services: [
      {
        href: "/services/ppc",
        anchor: "Google Ads management",
        description: "Seasonal and destination structure",
      },
      {
        href: "/services/attribution",
        anchor: "Call tracking",
        description: "Bookings that complete on the phone",
      },
    ],
  },
  {
    tag: "legal",
    industries: [
      {
        href: "/industries/legal-solicitors",
        anchor: "Legal and solicitor marketing",
        description: "Compliant lead generation for law firms",
      },
    ],
    services: [
      {
        href: "/services/ppc",
        anchor: "Google Ads management",
        description: "Restricted and high-intent search",
      },
      {
        href: "/services/creative",
        anchor: "Landing pages and CRO",
        description: "Enquiry pages that survive compliance review",
      },
    ],
  },
  {
    tag: "linkedin",
    industries: [
      {
        href: "/industries/b2b-saas-and-platforms",
        anchor: "B2B SaaS and consultants marketing",
        description: "Role-based demand and buying-committee outreach",
      },
      {
        href: "/industries/consulting-firms",
        anchor: "Consulting firms marketing",
        description: "Named-account ABM for practice-area demand",
      },
    ],
    services: [
      {
        href: "/services/social",
        anchor: "LinkedIn B2B advertising",
        description: "Paid social for long B2B cycles",
      },
      {
        href: "/services/social",
        anchor: "Outbound lead generation",
        description: "Cold email alongside paid social",
      },
    ],
  },
  {
    tag: "marketing-automation",
    industries: [
      {
        href: "/industries/b2b-saas-and-platforms",
        anchor: "B2B SaaS and consultants marketing",
        description: "Lifecycle nurture into pipeline",
      },
    ],
    services: [
      {
        href: "/services/analytics",
        anchor: "Marketing automation",
        description: "Lifecycle and n8n workflow builds",
      },
      {
        href: "/services/attribution",
        anchor: "CRM implementation",
        description: "The object model automation sits on",
      },
    ],
  },
  {
    tag: "attribution",
    industries: [
      {
        href: "/industries/commercial-fit-out",
        anchor: "Commercial fit-out marketing",
        description: "Eighteen-month attribution reality",
      },
      {
        href: "/industries/travel-tour-operators",
        anchor: "Travel and tour operator marketing",
        description: "Enquiry to booking windows",
      },
    ],
    services: [
      {
        href: "/services/attribution",
        anchor: "Conversion tracking and attribution",
        description: "Server-side and offline measurement",
      },
      {
        href: "/services/analytics",
        anchor: "Reporting dashboards",
        description: "Board views beyond last-click",
      },
    ],
  },
  {
    tag: "call-tracking",
    industries: [
      {
        href: "/industries/residential-home-builders",
        anchor: "Residential home builder marketing",
        description: "Showhome and sales line measurement",
      },
      {
        href: "/industries/travel-tour-operators",
        anchor: "Travel and tour operator marketing",
        description: "Phone-heavy booking paths",
      },
    ],
    services: [
      {
        href: "/services/attribution",
        anchor: "Call tracking",
        description: "DNI into CRM and ad platforms",
      },
      {
        href: "/services/attribution",
        anchor: "Conversion tracking and attribution",
        description: "Upload qualified call outcomes",
      },
    ],
  },
  {
    tag: "crm",
    industries: [
      {
        href: "/industries/commercial-fit-out",
        anchor: "Commercial fit-out marketing",
        description: "Tender-stage CRM design",
      },
      {
        href: "/industries/b2b-saas-and-platforms",
        anchor: "B2B SaaS and consultants marketing",
        description: "Long-cycle deal architecture",
      },
    ],
    services: [
      {
        href: "/services/attribution",
        anchor: "CRM implementation",
        description: "HubSpot, Salesforce and Pipedrive builds",
      },
      {
        href: "/services/analytics",
        anchor: "Marketing automation",
        description: "Lifecycle on a clean CRM",
      },
    ],
  },
  {
    tag: "consent",
    industries: [
      {
        href: "/industries/medical-healthcare",
        anchor: "Medical and healthcare marketing",
        description: "Special category data constraints",
      },
    ],
    services: [
      {
        href: "/services/attribution",
        anchor: "Conversion tracking and attribution",
        description: "Consent Mode and server-side tagging",
      },
    ],
  },
  {
    tag: "ai-marketing",
    industries: [
      {
        href: "/industries/b2b-saas-and-platforms",
        anchor: "B2B SaaS and consultants marketing",
        description: "Operational AI in go-to-market teams",
      },
    ],
    services: [
      {
        href: "/services/analytics",
        anchor: "Marketing automation",
        description: "Workflows that absorb AI copilots safely",
      },
      {
        href: "/services/analytics",
        anchor: "Reporting dashboards",
        description: "Human-readable performance layers",
      },
    ],
  },
  {
    tag: "tiktok",
    industries: [
      {
        href: "/industries/ecommerce",
        anchor: "Ecommerce marketing",
        description: "Short-form demand into product pages",
      },
    ],
    services: [
      {
        href: "/services/creative",
        anchor: "Landing pages and CRO",
        description: "Post-click conversion paths",
      },
      {
        href: "/services/attribution",
        anchor: "Conversion tracking and attribution",
        description: "Measurement beyond platform pixels",
      },
    ],
  },
  {
    tag: "geo-seo",
    industries: [],
    services: [
      {
        href: "/services/creative",
        anchor: "Landing pages and CRO",
        description: "Pages structured for extraction and conversion",
      },
      {
        href: "/services/analytics",
        anchor: "Reporting dashboards",
        description: "Organic and paid in one commercial view",
      },
    ],
  },
];

const BY_TAG = new Map(
  TAXONOMY.map((entry) => [entry.tag.toLowerCase(), entry]),
);

export interface RelatedPillarLink {
  href: string;
  title: string;
  description?: string;
}

/** Resolve two to three pillar links from article tags. Deduped by href. */
export function resolveRelatedPillars(tags: string[]): RelatedPillarLink[] {
  const seen = new Set<string>();
  const out: RelatedPillarLink[] = [];

  for (const raw of tags) {
    const entry = BY_TAG.get(raw.toLowerCase());
    if (!entry) continue;
    for (const link of [...entry.services, ...entry.industries]) {
      if (seen.has(link.href)) continue;
      seen.add(link.href);
      out.push({
        href: link.href,
        title: link.anchor,
        description: link.description,
      });
      if (out.length >= 3) return out;
    }
  }

  return out;
}

export function getTaxonomyTags(): string[] {
  return TAXONOMY.map((entry) => entry.tag);
}

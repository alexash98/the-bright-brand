import type { ServiceSlug } from "@/content/types";

export interface ServiceCatalogueEntry {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  /** Structural placeholder only. Vertical proof lives on industry hub pages. */
  intro: string;
  sections: { heading: string; body: string }[];
}

/**
 * SEO-wave service pillars (Google Ads management, LinkedIn B2B advertising,
 * CRM implementation, conversion tracking and attribution, call tracking,
 * landing pages and CRO, marketing automation, outbound lead generation,
 * reporting dashboards) were retired (Aug 2026). Old /services/{slug} URLs
 * 301 to the closest kept pillar in next.config.ts. Kept product services
 * (seo, ppc, social, attribution, creative, analytics) live in
 * lib/service-details.ts, not here.
 */
export const SERVICE_CATALOGUE: ServiceCatalogueEntry[] = [];

export function getServiceCatalogueEntry(
  slug: string,
): ServiceCatalogueEntry | undefined {
  return SERVICE_CATALOGUE.find((entry) => entry.slug === slug);
}

export function getAllServiceCatalogueSlugs(): ServiceSlug[] {
  return SERVICE_CATALOGUE.map((entry) => entry.slug);
}

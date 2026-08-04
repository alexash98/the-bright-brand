import type { IntegrationGuide } from "@/content/integrations/types";

/**
 * Integration guides section was retired (Aug 2026). /integrations and
 * /integrations/{slug} 301 to /services (next.config.ts). Individual guide
 * source files remain under content/integrations/*.ts but are no longer
 * registered or routed.
 */
const GUIDES: IntegrationGuide[] = [];

const BY_SLUG = new Map(GUIDES.map((guide) => [guide.slug, guide]));

export function getAllIntegrations(): IntegrationGuide[] {
  return GUIDES;
}

export function getIntegration(slug: string): IntegrationGuide | undefined {
  return BY_SLUG.get(slug);
}

export function getAllIntegrationSlugs(): string[] {
  return GUIDES.map((guide) => guide.slug);
}

import type { Industry } from "@/content/types";

/** Hubs (and their children) hidden from the industries index and sitemap for now. */
export const HIDDEN_INDUSTRY_HUB_SLUGS = new Set([
  "medical-healthcare",
  "legal-solicitors",
  "wealth-management",
  "commercial-insurance",
]);

export function isHiddenIndustry(industry: Industry): boolean {
  if (HIDDEN_INDUSTRY_HUB_SLUGS.has(industry.slug)) return true;
  if (industry.parent && HIDDEN_INDUSTRY_HUB_SLUGS.has(industry.parent)) {
    return true;
  }
  return false;
}

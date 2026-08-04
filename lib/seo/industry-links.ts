import {
  getServiceCatalogueEntry,
} from "@/content/services";
import type { Industry } from "@/content/types";
import {
  getChildren,
  getIndustryForRoute,
} from "@/content/registry";
import { isHiddenIndustry } from "@/lib/seo/hidden-industries";
import { getAllServiceSlugs, getServiceDetailBySlug } from "@/lib/service-details";

/** In-body unique internal link budget enforced by content-lint. */
const HUB_LINK_BUDGET = 12;
/** Service pillars keep four structural links, so variants max out at eight. */
const SERVICE_VARIANT_BUDGET = 8;

export function buildIndustryServiceLinks(industry: Industry): {
  href: string;
  title: string;
  description: string;
}[] {
  return buildIndustryHubLinkSets(industry).serviceLinks;
}

export function buildRelatedIndustryLinks(industry: Industry): {
  href: string;
  title: string;
  description: string;
}[] {
  return buildIndustryHubLinkSets(industry).relatedLinks;
}

export function buildChildIndustryLinks(industry: Industry): {
  href: string;
  title: string;
  description: string;
}[] {
  return buildIndustryHubLinkSets(industry).childLinks;
}

/**
 * Keep practice-area children and sideways related links inside the
 * four-to-twelve in-body budget. Remaining budget fills with core /services
 * pillars (not industry×service nested pages).
 */
export function buildIndustryHubLinkSets(industry: Industry): {
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
  childLinks: {
    href: string;
    title: string;
    description: string;
  }[];
} {
  const preferredChildOrder: Record<string, string[]> = {
    "b2b-saas-and-platforms": [
      "consulting-firms",
      "supplier-management-platforms",
      "enterprise-saas",
    ],
  };
  const preferred = preferredChildOrder[industry.slug];
  const sortedChildren = [
    ...getChildren(industry.slug, { includeExamples: true }),
  ].sort((a, b) => {
    if (!preferred) return a.name.localeCompare(b.name);
    const ai = preferred.indexOf(a.slug);
    const bi = preferred.indexOf(b.slug);
    const aRank = ai === -1 ? 99 : ai;
    const bRank = bi === -1 ? 99 : bi;
    if (aRank !== bRank) return aRank - bRank;
    return a.name.localeCompare(b.name);
  });
  const allChildren = sortedChildren.map((child) => ({
    href: `/industries/${child.slug}`,
    title: `${child.name} marketing`,
    description: child.intro.slice(0, 160),
  }));

  const allRelated = industry.relatedIndustries.flatMap((related) => {
    const target = getIndustryForRoute(related.slug);
    if (!target || isHiddenIndustry(target)) return [];
    // Children already appear in the sub-industries block; do not double-count.
    if (allChildren.some((child) => child.href === `/industries/${target.slug}`)) {
      return [];
    }
    return [
      {
        href: `/industries/${target.slug}`,
        title: `${target.name} marketing`,
        description: related.why,
      },
    ];
  });

  let remaining = HUB_LINK_BUDGET;
  const childLinks = allChildren.slice(0, Math.max(0, remaining));
  remaining -= childLinks.length;
  const relatedLinks = allRelated.slice(0, Math.max(0, remaining));
  remaining -= relatedLinks.length;

  // SEO-wave catalogue is retired (Aug 2026); fill remaining budget with the
  // kept product pillars (seo, ppc, social, attribution, creative, analytics)
  // instead of linking removed /services/{slug} pages.
  const genericLinks = getAllServiceSlugs().flatMap((slug) => {
    const detail = getServiceDetailBySlug(slug);
    if (!detail) return [];
    return [
      {
        href: `/services/${slug}`,
        title: detail.title,
        description: detail.metaDescription.slice(0, 160),
      },
    ];
  });

  const serviceLinks = genericLinks.slice(0, Math.max(0, remaining));

  return { serviceLinks, relatedLinks, childLinks };
}

/** Link service pillars to industry hubs (one page per industry). */
export function buildServiceIndustryVariantLinks(
  serviceSlug: string,
  industries: Industry[],
): {
  href: string;
  title: string;
  description: string;
}[] {
  const catalogue = getServiceCatalogueEntry(serviceSlug);
  return industries.slice(0, SERVICE_VARIANT_BUDGET).map((industry) => ({
    href: `/industries/${industry.slug}`,
    title: `${catalogue?.shortName ?? "Service"} for ${industry.name}`,
    description: `How we deliver ${catalogue?.name.toLowerCase() ?? "this service"} for ${industry.name.toLowerCase()}.`,
  }));
}

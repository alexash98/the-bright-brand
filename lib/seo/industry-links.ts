import {
  getAllServiceCatalogueSlugs,
  getServiceCatalogueEntry,
} from "@/content/services";
import type { Industry } from "@/content/types";
import {
  getChildren,
  getIndustryForRoute,
} from "@/content/registry";

export function buildIndustryServiceLinks(industry: Industry): {
  href: string;
  title: string;
  description: string;
}[] {
  const moneyByService = new Map(
    industry.moneyPages.map((page) => [page.service, page]),
  );

  const moneyLinks = industry.moneyPages.map((page) => ({
    href: `/industries/${industry.slug}/${page.service}`,
    title: page.title,
    description: page.intro.slice(0, 160),
  }));

  // Fill remaining slots with generic service pillars so the section covers
  // the catalogue without blowing past the in-body link budget (max 12).
  const genericLinks = getAllServiceCatalogueSlugs().flatMap((slug) => {
    if (moneyByService.has(slug)) return [];
    const catalogue = getServiceCatalogueEntry(slug);
    if (!catalogue) return [];
    return [
      {
        href: `/services/${slug}`,
        title: catalogue.name,
        description: catalogue.intro.slice(0, 160),
      },
    ];
  });

  const budget = Math.max(0, 8 - moneyLinks.length);
  return [...moneyLinks, ...genericLinks.slice(0, budget)];
}

export function buildRelatedIndustryLinks(industry: Industry): {
  href: string;
  title: string;
  description: string;
}[] {
  return industry.relatedIndustries.flatMap((related) => {
    const target = getIndustryForRoute(related.slug);
    if (!target) return [];
    return [
      {
        href: `/industries/${target.slug}`,
        title: `${target.name} marketing`,
        description: related.why,
      },
    ];
  });
}

export function buildChildIndustryLinks(industry: Industry): {
  href: string;
  title: string;
  description: string;
}[] {
  return getChildren(industry.slug, { includeExamples: true }).map((child) => ({
    href: `/industries/${child.slug}`,
    title: `${child.name} marketing`,
    description: child.intro.slice(0, 160),
  }));
}

export function buildMoneyPageRelatedLinks(
  industry: Industry,
  serviceSlug: string,
): {
  href: string;
  title: string;
  description: string;
}[] {
  const moneyPage = industry.moneyPages.find(
    (page) => page.service === serviceSlug,
  );
  const links: {
    href: string;
    title: string;
    description: string;
  }[] = [];

  // Industry pillar and service pillar are linked in the money-page intro.
  // RelatedLinks only adds sideways and sibling spokes to stay within the
  // four-to-twelve contextual link budget.

  for (const slug of moneyPage?.relatedIndustries ?? []) {
    const related = getIndustryForRoute(slug);
    if (!related || related.slug === industry.slug) continue;
    links.push({
      href: `/industries/${related.slug}/${serviceSlug}`,
      title: `${getServiceCatalogueEntry(serviceSlug)?.shortName ?? "Service"} for ${related.name}`,
      description: related.intro.slice(0, 140),
    });
  }

  for (const page of industry.moneyPages) {
    if (page.service === serviceSlug) continue;
    links.push({
      href: `/industries/${industry.slug}/${page.service}`,
      title: page.title,
      description: page.intro.slice(0, 140),
    });
  }

  links.push(
    {
      href: "/case-studies",
      title: "Client case studies and proof",
      description: "Named engagements that back the builds described on this page.",
    },
    {
      href: "/industries",
      title: "All industry programmes",
      description: "Browse every vertical pillar currently published.",
    },
  );

  return links.slice(0, 8);
}

import { readdirSync } from "node:fs";
import { join } from "node:path";
import { createJiti } from "jiti";

const root = process.cwd();
const jiti = createJiti(join(root, "scripts/lib/seo-corpus.mjs"), {
  interopDefault: true,
  alias: {
    "@": root,
  },
});

function loadRegistry() {
  return jiti(join(root, "content/registry.ts"));
}

function loadServices() {
  return jiti(join(root, "content/services.ts"));
}

function loadIndustryLinks() {
  return jiti(join(root, "lib/seo/industry-links.ts"));
}

/**
 * Build a lintable corpus for SEO routes from the content registry and the
 * same link helpers the templates use. Boilerplate (nav, footer, CTA) is omitted.
 */
export function buildSeoCorpus() {
  const registry = loadRegistry();
  const services = loadServices();
  const industryLinks = loadIndustryLinks();

  registry.resetRegistryCache();

  const records = registry.getAllIndustryRecords({ includeExamples: true });
  const catalogue = services.SERVICE_CATALOGUE;
  const pages = [];

  pages.push({
    route: "/industries",
    kind: "index",
    isExample: false,
    h1: ["Industries we know how to market"],
    headings: [
      { level: 1, text: "Industries we know how to market" },
      ...records.map((record) => ({
        level: 2,
        text: record.industry.name,
      })),
    ],
    bodyText: records.map((record) => record.industry.intro).join("\n"),
    links: records.map((record) => ({
      href: `/industries/${record.industry.slug}`,
      anchor: record.industry.name,
    })),
  });

  for (const entry of catalogue) {
    const variants = registry.getIndustriesForServiceRoute(entry.slug);
    const variantLinks = variants.map((industry) => {
      const moneyPage = industry.moneyPages.find(
        (page) => page.service === entry.slug,
      );
      return {
        href: `/industries/${industry.slug}/${entry.slug}`,
        anchor: moneyPage?.title ?? `${entry.shortName} for ${industry.name}`,
      };
    });

    const structuralLinks = [
      {
        href: "/services",
        anchor: "All performance marketing services",
      },
      {
        href: "/industries",
        anchor: "Industries we work in",
      },
      {
        href: "/case-studies",
        anchor: "Case studies and proof",
      },
      {
        href: "/contact",
        anchor: "Talk to the team",
      },
    ];

    pages.push({
      route: `/services/${entry.slug}`,
      kind: "service-pillar",
      isExample: false,
      h1: [entry.name],
      headings: [
        { level: 1, text: entry.name },
        ...entry.sections.map((section) => ({
          level: 2,
          text: section.heading,
        })),
        { level: 2, text: `${entry.shortName} by industry` },
        { level: 2, text: "Related service pillars" },
        ...variantLinks.map((link) => ({ level: 3, text: link.anchor })),
      ],
      bodyText: [
        entry.intro,
        ...entry.sections.map((section) => `${section.heading}\n${section.body}`),
      ].join("\n\n"),
      links: [...variantLinks, ...structuralLinks],
    });
  }

  for (const record of records) {
    const industry = record.industry;
    const serviceLinks = industryLinks.buildIndustryServiceLinks(industry);
    const relatedLinks = industryLinks.buildRelatedIndustryLinks(industry);
    const childLinks = industryLinks.buildChildIndustryLinks(industry);

    pages.push({
      route: `/industries/${industry.slug}`,
      kind: "industry-pillar",
      isExample: record.isExample,
      h1: [`${industry.name} marketing agency`],
      headings: [
        { level: 1, text: `${industry.name} marketing agency` },
        {
          level: 2,
          text: `How the pipeline actually works in ${industry.name.toLowerCase()}`,
        },
        ...industry.pipelineShape.map((section) => ({
          level: 3,
          text: section.heading,
        })),
        { level: 2, text: "Services built for this vertical" },
        ...serviceLinks.map((link) => ({ level: 3, text: link.title })),
        {
          level: 2,
          text: `Proof from ${industry.name.toLowerCase()} work`,
        },
        ...industry.proof.map((item) => ({ level: 3, text: item.client })),
        { level: 2, text: "The infrastructure we build" },
        ...industry.infrastructure.map((section) => ({
          level: 3,
          text: section.heading,
        })),
        ...(childLinks.length
          ? [
              {
                level: 2,
                text: `Related ${industry.name.toLowerCase()} markets`,
              },
            ]
          : []),
        ...(relatedLinks.length
          ? [{ level: 2, text: "Nearby industries we also work in" }]
          : []),
        { level: 2, text: `${industry.name} marketing FAQs` },
      ],
      bodyText: [
        industry.intro,
        ...industry.pipelineShape.map((s) => `${s.heading}\n${s.body}`),
        ...industry.infrastructure.map((s) => `${s.heading}\n${s.body}`),
        ...industry.proof.map(
          (p) => `${p.client}\n${p.situation}\n${p.built}`,
        ),
        ...industry.faqs.map((f) => `${f.q}\n${f.a}`),
      ].join("\n\n"),
      links: [
        ...serviceLinks.map((link) => ({
          href: link.href,
          anchor: link.title,
        })),
        ...relatedLinks.map((link) => ({
          href: link.href,
          anchor: link.title,
        })),
        ...childLinks.map((link) => ({
          href: link.href,
          anchor: link.title,
        })),
      ],
    });

    for (const moneyPage of industry.moneyPages) {
      const catalogue = services.getServiceCatalogueEntry(moneyPage.service);
      const related = industryLinks.buildMoneyPageRelatedLinks(
        industry,
        moneyPage.service,
      );

      pages.push({
        route: `/industries/${industry.slug}/${moneyPage.service}`,
        kind: "money-page",
        isExample: record.isExample,
        h1: [moneyPage.title],
        headings: [
          { level: 1, text: moneyPage.title },
          ...moneyPage.sections.map((section) => ({
            level: 2,
            text: section.heading,
          })),
          {
            level: 2,
            text: `${catalogue?.shortName ?? moneyPage.service} proof in ${industry.name.toLowerCase()}`,
          },
          { level: 2, text: "Related industries and services" },
          {
            level: 2,
            text: `${catalogue?.shortName ?? moneyPage.service} for ${industry.name.toLowerCase()} FAQs`,
          },
        ],
        bodyText: [
          moneyPage.intro,
          ...moneyPage.sections.map((s) => `${s.heading}\n${s.body}`),
          ...moneyPage.proof.map(
            (p) => `${p.client}\n${p.situation}\n${p.built}`,
          ),
          ...moneyPage.faqs.map((f) => `${f.q}\n${f.a}`),
        ].join("\n\n"),
        links: [
          {
            href: `/industries/${industry.slug}`,
            anchor: `${industry.name} marketing programmes`,
          },
          {
            href: `/services/${moneyPage.service}`,
            anchor: `${catalogue?.name ?? moneyPage.service} service pillar`,
          },
          ...related.map((link) => ({
            href: link.href,
            anchor: link.title,
          })),
        ],
      });
    }
  }

  return pages;
}

export function listIndustrySourceFiles() {
  const dir = join(root, "content/industries");
  return readdirSync(dir)
    .filter((file) => file.endsWith(".ts") && !file.endsWith(".d.ts"))
    .map((file) => join(dir, file));
}

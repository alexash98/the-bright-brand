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
    const variantLinks = industryLinks
      .buildServiceIndustryVariantLinks(entry.slug, variants)
      .map((link) => ({
        href: link.href,
        anchor: link.title,
      }));

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
    const hubLinks = industryLinks.buildIndustryHubLinkSets(industry);
    const serviceLinks = hubLinks.serviceLinks;
    const relatedLinks = hubLinks.relatedLinks;
    const childLinks = hubLinks.childLinks;

    pages.push({
      route: `/industries/${industry.slug}`,
      kind: "industry-pillar",
      isExample: record.isExample,
      h1: [`${industry.name} marketing agency`],
      headings: [
        { level: 1, text: `${industry.name} marketing agency` },
        { level: 2, text: "How this market actually buys" },
        ...industry.pipelineShape.map((section) => ({
          level: 3,
          text: section.heading,
        })),
        ...(industry.pipelineStages?.length
          ? [
              {
                level: 3,
                text: `${industry.name} commercial stages`,
              },
            ]
          : []),
        { level: 2, text: "Service builds for this vertical" },
        ...serviceLinks.map((link) => ({ level: 3, text: link.title })),
        {
          level: 2,
          text: `Proof from ${industry.name.toLowerCase()} work`,
        },
        ...industry.proof.map((item) => ({ level: 3, text: item.client })),
        { level: 2, text: "The stack behind the ads" },
        ...industry.infrastructure.map((section) => ({
          level: 3,
          text: section.heading,
        })),
        ...(industry.stackNotes?.length
          ? [
              {
                level: 2,
                text: "CRMs and tools this industry already runs",
              },
              ...industry.stackNotes.map((section) => ({
                level: 3,
                text: section.heading,
              })),
            ]
          : []),
        ...(childLinks.length
          ? [
              {
                level: 2,
                text: `Markets inside ${industry.name.toLowerCase()}`,
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
        ...(industry.pipelineStages ?? []).map(
          (stage) => `${stage.name}${stage.note ? `: ${stage.note}` : ""}`,
        ),
        ...industry.infrastructure.map((s) => `${s.heading}\n${s.body}`),
        ...(industry.stackNotes ?? []).map((s) => `${s.heading}\n${s.body}`),
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

  }

  // Wave 4: integrations
  try {
    const integrations = jiti(join(root, "content/integrations/index.ts"));
    const allIntegrations = integrations.getAllIntegrations();
    pages.push({
      route: "/integrations",
      kind: "index",
      isExample: false,
      h1: ["Integration guides you can actually implement"],
      headings: [
        {
          level: 1,
          text: "Integration guides you can actually implement",
        },
        ...allIntegrations.map((guide) => ({ level: 2, text: guide.name })),
      ],
      bodyText: allIntegrations.map((guide) => guide.intro).join("\n"),
      links: allIntegrations.map((guide) => ({
        href: `/integrations/${guide.slug}`,
        anchor: guide.name,
      })),
    });

    for (const guide of allIntegrations) {
      pages.push({
        route: `/integrations/${guide.slug}`,
        kind: "integration",
        isExample: false,
        h1: [guide.name],
        headings: [
          { level: 1, text: guide.name },
          ...guide.sections.map((section) => ({
            level: 2,
            text: section.heading,
          })),
          { level: 2, text: "Related guides and services" },
          { level: 2, text: `${guide.name} FAQs` },
        ],
        bodyText: [
          guide.intro,
          ...guide.sections.map((s) => `${s.heading}\n${s.body}`),
          ...guide.faqs.map((f) => `${f.q}\n${f.a}`),
        ].join("\n\n"),
        links: guide.relatedLinks.map((link) => ({
          href: link.href,
          anchor: link.title,
        })),
      });
    }
  } catch {
    // Integrations optional until Wave 4 lands fully.
  }

  // Wave 4: resources
  try {
    const resources = jiti(join(root, "content/resources/index.ts"));
    const allResources = resources.getAllResources();
    pages.push({
      route: "/resources",
      kind: "index",
      isExample: false,
      h1: ["Templates and downloadables"],
      headings: [
        { level: 1, text: "Templates and downloadables" },
        ...allResources.map((resource) => ({
          level: 2,
          text: resource.name,
        })),
      ],
      bodyText: allResources.map((resource) => resource.intro).join("\n"),
      links: allResources.map((resource) => ({
        href: `/resources/${resource.slug}`,
        anchor: resource.name,
      })),
    });

    for (const resource of allResources) {
      pages.push({
        route: `/resources/${resource.slug}`,
        kind: "resource",
        isExample: false,
        h1: [resource.name],
        headings: [
          { level: 1, text: resource.name },
          { level: 2, text: "Direct downloads" },
          ...resource.sections.map((section) => ({
            level: 2,
            text: section.heading,
          })),
          { level: 2, text: "Related pages" },
          { level: 2, text: `${resource.name} FAQs` },
        ],
        bodyText: [
          resource.intro,
          ...resource.sections.map((s) => `${s.heading}\n${s.body}`),
          ...resource.faqs.map((f) => `${f.q}\n${f.a}`),
        ].join("\n\n"),
        links: [
          ...resource.relatedLinks.map((link) => ({
            href: link.href,
            anchor: link.title,
          })),
          {
            href: "/services/crm-implementation",
            anchor: "CRM implementation",
          },
          {
            href: "/services/conversion-tracking-attribution",
            anchor: "conversion tracking and attribution",
          },
        ],
      });
    }
  } catch {
    // Resources optional until Wave 4 lands fully.
  }

  return pages;
}

export function listIndustrySourceFiles() {
  const dir = join(root, "content/industries");
  return readdirSync(dir)
    .filter((file) => file.endsWith(".ts") && !file.endsWith(".d.ts"))
    .map((file) => join(dir, file));
}

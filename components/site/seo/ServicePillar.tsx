import Link from "next/link";
import { MarketingHero } from "@/components/site/MarketingHero";
import { Breadcrumbs } from "@/components/site/seo/Breadcrumbs";
import { Cta } from "@/components/site/seo/Cta";
import { MarketingPageShell } from "@/components/site/seo/MarketingPageShell";
import { RelatedLinks } from "@/components/site/seo/RelatedLinks";
import type { Industry } from "@/content/types";
import type { ServiceCatalogueEntry } from "@/content/services";

interface ServicePillarProps {
  service: ServiceCatalogueEntry;
  industryVariants: Industry[];
}

export function ServicePillar({
  service,
  industryVariants,
}: ServicePillarProps): React.ReactElement {
  const variantLinks = industryVariants.map((industry) => {
    const moneyPage = industry.moneyPages.find(
      (page) => page.service === service.slug,
    );
    return {
      href: `/industries/${industry.slug}/${service.slug}`,
      title: moneyPage?.title ?? `${service.shortName} for ${industry.name}`,
      description:
        moneyPage?.intro.slice(0, 160) ??
        `How we deliver ${service.name.toLowerCase()} for ${industry.name.toLowerCase()}.`,
    };
  });

  return (
    <MarketingPageShell
      hero={
        <MarketingHero>
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: service.name, href: `/services/${service.slug}` },
            ]}
          />
          <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-text-pale md:text-5xl lg:text-6xl">
            {service.name}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-brand-text-pale/70 md:text-xl">
            {service.intro}
          </p>
        </MarketingHero>
      }
      afterContent={<Cta />}
    >
      {service.sections.map((section) => (
        <section
          key={section.heading}
          className="px-4 py-16 md:px-8 md:py-20"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              {section.heading}
            </h2>
            <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
              {section.body}
            </p>
          </div>
        </section>
      ))}

      <section className="bg-[#f7f7f5] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Industry variants
          </p>
          <h2 className="mb-4 max-w-2xl text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            {service.shortName} by industry
          </h2>
          <p className="mb-12 max-w-3xl text-base leading-relaxed text-neutral-600 md:text-lg">
            {variantLinks.length > 0
              ? "Each industry page explains how the build changes for that market."
              : "Industry-specific pages will appear here as vertical agents publish money pages."}
          </p>
          {variantLinks.length > 0 ? (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {variantLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group block h-full border border-neutral-200 bg-white p-8 transition-colors hover:border-brand-accent"
                  >
                    <h3 className="mb-3 text-xl font-semibold text-neutral-900 group-hover:text-brand-accent-dark">
                      {link.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
                      {link.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      <RelatedLinks
        eyebrow="Services"
        heading="Related service pillars"
        links={[
          {
            href: "/services",
            title: "All performance marketing services",
            description:
              "Browse the full service index across paid media, CRM, tracking and outbound.",
          },
          {
            href: "/industries",
            title: "Industries we work in",
            description:
              "Vertical pillars and industry-specific service builds.",
          },
          {
            href: "/case-studies",
            title: "Case studies and proof",
            description:
              "Named client work and results across the engagements that back these pages.",
          },
          {
            href: "/contact",
            title: "Talk to the team",
            description:
              "Share the vertical and the pipeline problem you need solved.",
          },
        ]}
      />
    </MarketingPageShell>
  );
}

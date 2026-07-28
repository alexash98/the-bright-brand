import type { Metadata } from "next";
import Link from "next/link";
import { MarketingHero } from "@/components/site/MarketingHero";
import { Breadcrumbs } from "@/components/site/seo/Breadcrumbs";
import { Cta } from "@/components/site/seo/Cta";
import { MarketingPageShell } from "@/components/site/seo/MarketingPageShell";
import { getAllIntegrations } from "@/content/integrations";
import { absolutePageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = absolutePageMetadata({
  title: "Integration Guides | The Bright Brand",
  description:
    "Implementation guides for HubSpot, Salesforce, Pipedrive, Calendly, call tracking, server-side tagging and CRM migrations.",
  canonicalPath: "/integrations",
});

export default function IntegrationsIndexPage(): React.ReactElement {
  const guides = getAllIntegrations();

  return (
    <MarketingPageShell
      hero={
        <MarketingHero>
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Integrations", href: "/integrations" },
            ]}
          />
          <p className="mb-4 inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-bg px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            Implementation guides
          </p>
          <h1 className="mb-5 max-w-xl text-[2rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl">
            Integration guides you can actually implement
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-brand-text-pale/80 md:text-lg">
            Step-by-step builds for offline conversions, booking attribution,
            call loops, Consent Mode and CRM migrations.
          </p>
          <Link
            href="/industries"
            className="inline-flex h-11 min-h-11 items-center justify-center rounded-full bg-brand-accent px-7 text-sm font-bold text-brand-bg-darker transition-colors hover:bg-brand-accent-hover"
          >
            See industry hubs
          </Link>
        </MarketingHero>
      }
      afterContent={<Cta />}
    >
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ul className="grid gap-6 md:grid-cols-2">
            {guides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/integrations/${guide.slug}`}
                  className="group block h-full rounded-3xl border border-neutral-200 bg-white p-7 transition-colors hover:border-brand-accent"
                >
                  <h2 className="mb-3 text-xl font-semibold text-neutral-900 group-hover:text-brand-accent-dark">
                    {guide.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
                    {guide.intro}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </MarketingPageShell>
  );
}

import Link from "next/link";
import { OptionalResourceEmail } from "@/app/(marketing)/resources/_components/OptionalResourceEmail";
import { MarketingHero } from "@/components/site/MarketingHero";
import { Breadcrumbs } from "@/components/site/seo/Breadcrumbs";
import { Cta } from "@/components/site/seo/Cta";
import { FaqAccordion } from "@/components/site/seo/FaqAccordion";
import { MarketingPageShell } from "@/components/site/seo/MarketingPageShell";
import { RelatedLinks } from "@/components/site/seo/RelatedLinks";
import type { ResourcePage } from "@/content/resources/types";

interface ResourcePageViewProps {
  resource: ResourcePage;
}

export function ResourcePageView({
  resource,
}: ResourcePageViewProps): React.ReactElement {
  return (
    <MarketingPageShell
      hero={
        <MarketingHero>
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Resources", href: "/resources" },
              { name: resource.name, href: `/resources/${resource.slug}` },
            ]}
          />
          <p className="mb-4 inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-bg px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            Free download
          </p>
          <h1 className="mb-5 max-w-xl text-[2rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl">
            {resource.name}
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-brand-text-pale/80 md:text-lg">
            {resource.intro}
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
      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
            Direct downloads
          </h2>
          <ul className="space-y-3">
            {resource.downloads.map((file) => (
              <li
                key={file.href}
                className="rounded-3xl border border-neutral-200 bg-white p-5"
              >
                <a
                  href={file.href}
                  className="text-lg font-semibold text-brand-accent-dark underline"
                  download
                >
                  {file.label}
                </a>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {file.description}
                </p>
              </li>
            ))}
          </ul>
          <OptionalResourceEmail />
        </div>
      </section>

      <article className="bg-[#f7f7f5] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl space-y-10">
          {resource.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-neutral-900">
                {section.heading}
              </h2>
              {section.body.split("\n\n").map((paragraph) => (
                <p
                  key={paragraph.slice(0, 64)}
                  className="mb-4 text-base leading-relaxed text-neutral-600 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <p className="text-base text-neutral-600">
            Prefer a guided build? See{" "}
            <Link
              href="/services/crm-implementation"
              className="font-medium text-brand-accent-dark underline"
            >
              CRM implementation
            </Link>{" "}
            and{" "}
            <Link
              href="/services/conversion-tracking-attribution"
              className="font-medium text-brand-accent-dark underline"
            >
              conversion tracking and attribution
            </Link>
            .
          </p>
        </div>
      </article>

      <RelatedLinks heading="Related pages" links={resource.relatedLinks} />
      <FaqAccordion heading={`${resource.name} FAQs`} faqs={resource.faqs} />
    </MarketingPageShell>
  );
}

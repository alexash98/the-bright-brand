import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "@/components/seed/Footer";
import { Header } from "@/components/seed/Header";
import { MarketingHero } from "@/components/seed/MarketingHero";
import { getServiceIcon } from "@/lib/service-icons";
import { NAV_ITEMS } from "@/lib/nav";
import { SERVICES } from "@/lib/seed-data";
import { ServiceDetail } from "@/lib/seed-types";

const EnquiryForm = dynamic(
  () =>
    import("@/components/seed/EnquiryForm").then((mod) => mod.EnquiryForm),
  { loading: () => <SectionPlaceholder heightClass="h-[640px]" /> },
);

function SectionPlaceholder({
  heightClass,
}: {
  heightClass: string;
}): React.ReactElement {
  return (
    <div
      aria-hidden="true"
      className={`${heightClass} w-full animate-pulse bg-neutral-100`}
    />
  );
}

interface ServiceDetailPageProps {
  service: ServiceDetail;
}

export function ServiceDetailPage({
  service,
}: ServiceDetailPageProps): React.ReactElement {
  const Icon = getServiceIcon(service.iconName);
  const relatedServices = SERVICES.filter((item) => item.id !== service.id);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-gray-100 antialiased selection:bg-brand-accent selection:text-black">
      <Header navItems={NAV_ITEMS} />

      <MarketingHero>
        <Link
          href="/services"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-text-pale/70 transition-colors hover:text-brand-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          All services
        </Link>

        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          <Icon className="h-6 w-6 text-brand-accent" />
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          {service.shortTitle}
        </p>
        <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-text-pale md:text-5xl lg:text-6xl">
          {service.heroTitle}{" "}
          <span className="text-brand-accent">{service.heroAccent}</span>.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-brand-text-pale/70 md:text-xl">
          {service.heroIntro}
        </p>
        {service.heroIntroSecondary ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-text-pale/60 md:text-lg">
            {service.heroIntroSecondary}
          </p>
        ) : null}
      </MarketingHero>

      <main className="bg-white text-neutral-900">
        {service.whySection ? (
          <section className="px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                  {service.whySection.eyebrow}
                </p>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                  {service.whySection.title}
                </h2>
                <p className="text-base font-semibold uppercase tracking-wide text-neutral-500 md:text-sm">
                  {service.whySection.subtitle}
                </p>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                {service.whySection.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-[#f7f7f5] px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              What&apos;s included
            </p>
            <h2 className="mb-4 max-w-2xl text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              {service.capabilitiesHeading ?? "Core service parameters"}
            </h2>
            <p className="mb-12 max-w-3xl text-base leading-relaxed text-neutral-600 md:text-lg">
              {service.capabilitiesIntro ??
                "The building blocks we deploy for every engagement, tailored to your market, margins and growth stage."}
            </p>

            <div
              className={`grid gap-6 md:gap-8 ${
                service.capabilities.length > 4
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : "md:grid-cols-2"
              }`}
            >
              {service.capabilities.map((capability, index) => (
                <article
                  key={capability.title}
                  className="flex min-h-[320px] flex-col rounded-2xl border border-neutral-200 bg-white p-8 md:min-h-[360px] md:p-10"
                >
                  <p className="mb-5 text-xs font-bold tabular-nums text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-4 text-xl font-semibold text-neutral-900 md:text-2xl">
                    {capability.title}
                  </h3>
                  <p className="mb-8 text-sm leading-relaxed text-neutral-600 md:text-base">
                    {capability.description}
                  </p>

                  <ul className="mt-auto space-y-3 border-t border-neutral-100 pt-6">
                    {capability.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-relaxed text-neutral-700 md:text-[15px]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-white px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                  How we deliver
                </p>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                  Our approach
                </h2>
                <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
                  {service.approachIntro ??
                    "A clear sequence from first access to ongoing optimisation, so you always know what we are working on and why."}
                </p>
              </div>

              <ol className="relative lg:col-span-8">
                <div
                  aria-hidden="true"
                  className="absolute bottom-4 left-[23px] top-4 w-px bg-neutral-200 md:left-[27px]"
                />

                {service.approach.map((step, index) => (
                  <li
                    key={step.title}
                    className="relative list-none pb-12 last:pb-0"
                  >
                    <div className="flex gap-6 md:gap-8">
                      <div className="relative z-10 shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-accent/40 bg-white shadow-sm md:h-14 md:w-14">
                          <span className="text-sm font-bold tabular-nums text-brand-accent-dark md:text-base">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      <div className="min-w-0 flex-1 pt-1 md:pt-2">
                        <h3 className="mb-3 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
                          {step.title}
                        </h3>
                        <p className="max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-brand-bg-darker px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Expected impact
            </p>
            <h2 className="mb-10 max-w-2xl text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Outcomes we optimise for
            </h2>

            <div className="grid gap-4 sm:grid-cols-3">
              {service.outcomes.map((outcome) => (
                <div
                  key={outcome.label}
                  className="rounded-2xl border border-white/10 bg-[#232327] px-6 py-7"
                >
                  <p className="text-3xl font-semibold tracking-tight text-brand-accent sm:text-4xl">
                    {outcome.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-neutral-400 sm:text-[15px]">
                    {outcome.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {service.testimonial ? (
          <section className="border-y border-neutral-200 bg-white px-4 py-16 md:px-8 md:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-lg leading-relaxed text-neutral-700 md:text-xl md:leading-relaxed">
                &ldquo;{service.testimonial.quote}&rdquo;
              </p>
              <div className="mt-8">
                <p className="font-semibold text-neutral-900">
                  {service.testimonial.author}
                </p>
                <p className="mt-1 text-sm text-neutral-500">
                  {service.testimonial.role}, {service.testimonial.company}
                </p>
              </div>
            </div>
          </section>
        ) : null}

        {service.faqs && service.faqs.length > 0 ? (
          <section className="px-4 py-16 md:px-8 md:py-20">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                FAQs
              </p>
              <h2 className="mb-10 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                {service.faqsHeading ?? `Common questions about ${service.shortTitle.toLowerCase()}`}
              </h2>
              <dl className="space-y-8">
                {service.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="border-b border-neutral-200 pb-8 last:border-b-0 last:pb-0"
                  >
                    <dt className="mb-3 text-lg font-semibold text-neutral-900">
                      {faq.question}
                    </dt>
                    <dd className="text-base leading-relaxed text-neutral-600">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        ) : null}

        <section className="px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Explore more
            </p>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              Other services
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((item) => {
                const RelatedIcon = getServiceIcon(item.iconName);

                return (
                  <Link
                    key={item.id}
                    href={item.linkUrl}
                    className="group flex items-start gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-5 transition-all duration-300 hover:border-brand-accent/20 hover:bg-white hover:shadow-[0_8px_30px_rgba(232,184,75,0.08)]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white transition-colors group-hover:border-brand-accent/35 group-hover:bg-brand-accent/10">
                      <RelatedIcon className="h-4 w-4 text-brand-accent" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="mb-1 text-base font-semibold text-neutral-900 transition-colors group-hover:text-brand-accent">
                        {item.title}
                      </h3>
                      <p className="line-clamp-2 text-sm leading-relaxed text-neutral-600">
                        {item.description}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-neutral-500 transition-colors group-hover:text-brand-accent">
                        View service
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <EnquiryForm />
        <Footer />
      </main>
    </div>
  );
}

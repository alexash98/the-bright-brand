import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/seed/Footer";
import { Header } from "@/components/seed/Header";
import { MarketingHero } from "@/components/seed/MarketingHero";
import { SectionPlaceholder } from "@/components/seed/SectionPlaceholder";
import { NAV_ITEMS } from "@/lib/nav";
import { CaseStudyDetail } from "@/lib/seed-types";
import { CaseStudyPerformanceSection } from "@/components/seed/CaseStudyPerformanceSection";

const EnquiryForm = dynamic(
  () =>
    import("@/components/seed/EnquiryForm").then((mod) => mod.EnquiryForm),
  { loading: () => <SectionPlaceholder heightClass="h-[640px]" /> },
);

interface CaseStudyDetailPageProps {
  study: CaseStudyDetail;
}

function ResultsStats({
  stats,
}: {
  stats: CaseStudyDetail["heroStats"];
}): React.ReactElement {
  return (
    <div className="lg:pt-12">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#232327] shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
        <div className="grid grid-cols-2 divide-x divide-y divide-white/10">
          {stats.map((item) => (
            <div key={item.label} className="px-4 py-5 sm:px-5 sm:py-6">
              <p className="text-[1.65rem] leading-none tracking-tight text-brand-accent sm:text-[1.85rem]">
                {item.stat}
              </p>
              <p className="mt-2.5 text-sm leading-snug text-neutral-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CaseStudyDetailPage({
  study,
}: CaseStudyDetailPageProps): React.ReactElement {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-gray-100 antialiased selection:bg-brand-accent selection:text-black">
      <Header navItems={NAV_ITEMS} />

      <MarketingHero
        aside={<ResultsStats stats={study.heroStats} />}
        asideAlign="start"
      >
        <Link
          href="/case-studies"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-text-pale/70 transition-colors hover:text-brand-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          All case studies
        </Link>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          {study.heroEyebrow}
        </p>
        <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-text-pale md:text-5xl lg:text-6xl">
          {study.heroTitle}{" "}
          {study.heroAccent ? (
            <span className="text-brand-accent">{study.heroAccent}</span>
          ) : null}
          .
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-brand-text-pale/70 md:text-xl">
          {study.heroIntro}
        </p>
      </MarketingHero>

      <main className="bg-white text-neutral-900">
        <div className="page-below-fold">
          <section className="bg-white px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-7xl">
              <header className="max-w-3xl border-b border-neutral-200/80 pb-10 md:pb-12">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                  {study.bodyEyebrow}
                </p>
                <h2 className="mb-5 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl lg:text-4xl">
                  {study.bodyTitle}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                  {study.bodyDescription}
                </p>
              </header>

              <div className="space-y-5 pt-10 text-base leading-relaxed text-neutral-600 md:space-y-6 md:pt-12 md:text-lg">
                {study.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          {study.visualSection ? (
            <CaseStudyPerformanceSection section={study.visualSection} />
          ) : null}

          <EnquiryForm />
        </div>
        <Footer />
      </main>
    </div>
  );
}

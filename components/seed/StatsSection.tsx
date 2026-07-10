'use client';

import React from "react";
import { CaseStudy } from "@/lib/seed-types";
import { WhatWeDoBentoGrid } from "@/components/seed/WhatWeDoBentoGrid";

const STATS: { value: React.ReactNode; label: string }[] = [
  {
    value: (
      <>
        <span className="font-semibold">£</span>
        <span className="font-semibold">5M</span>
        <span className="font-semibold">+</span>
      </>
    ),
    label: "Yearly Ad Spend Managed",
  },
  {
    value: (
      <>
        <span className="font-semibold">£</span>
        <span className="font-semibold">50M</span>
        <span className="font-semibold">+</span>
      </>
    ),
    label: "Revenue Generated",
  },
  {
    value: (
      <>
        <span className="font-semibold">10</span>
        <span className="font-semibold"> yrs</span>
      </>
    ),
    label: "Experience",
  },
  {
    value: (
      <>
        <span className="font-semibold">6.2</span>
        <span className="font-semibold">x</span>
      </>
    ),
    label: "Average ROAS",
  },
];

interface StatsSectionProps {
  caseStudies: CaseStudy[];
  theme?: "dark" | "light";
  bentoLayout?: "full" | "featured";
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  caseStudies,
  theme = "dark",
  bentoLayout = "full",
}) => {
  const isLight = theme === "light";

  return (
    <section
      id="work"
      className={`relative overflow-hidden ${
        isLight
          ? "bg-[#f7f7f5] py-16 sm:py-20"
          : "bg-brand-bg-darker pt-28 pb-20 sm:pt-32 sm:pb-24"
      }`}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
              What We Do
            </p>
            <h2
              className={`mb-6 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.15] ${
                isLight ? "text-neutral-900" : "text-white"
              }`}
            >
              Full-funnel{" "}
              <span className="text-brand-accent">growth</span> for brands that
              want to win.
            </h2>
            <p
              className={`text-base leading-relaxed md:text-lg ${
                isLight ? "text-neutral-600" : "text-neutral-400"
              }`}
            >
              A performance-driven growth partner, combining data and creativity
              across every channel that matters, so nothing&apos;s working in
              isolation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className={`flex min-h-[132px] flex-col justify-center rounded-2xl border px-5 py-6 sm:min-h-[148px] sm:px-6 sm:py-7 ${
                  isLight
                    ? "border-neutral-200 bg-white"
                    : "border-white/10 bg-[#232327]"
                }`}
              >
                <p className="text-3xl font-semibold tracking-tight text-brand-accent sm:text-4xl">
                  {stat.value}
                </p>
                <p
                  className={`mt-2 text-sm font-semibold sm:text-[15px] ${
                    isLight ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <WhatWeDoBentoGrid caseStudies={caseStudies} layout={bentoLayout} />
      </div>
    </section>
  );
};

'use client';

import React from "react";
import { CaseStudy } from "@/lib/seed-types";
import { WhatWeDoBentoGrid } from "@/components/seed/WhatWeDoBentoGrid";

const STATS = [
  { value: "£32M+", label: "Managed Spend" },
  { value: "80+", label: "Brands Served" },
  { value: "4.9★", label: "Client Rating" },
  { value: "10yrs", label: "In Business" },
];

interface StatsSectionProps {
  caseStudies: CaseStudy[];
}

export const StatsSection: React.FC<StatsSectionProps> = ({ caseStudies }) => {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 55% at 15% 20%, rgba(232, 184, 75, 0.06) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 85% 80%, rgba(0, 0, 0, 0.02) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
              What We Do
            </p>
            <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Full-funnel{" "}
              <span className="text-brand-accent">growth</span> for brands that
              want to win.
            </h2>
            <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
              A performance-driven growth partner, combining data and creativity
              across every channel that matters — so nothing&apos;s working in
              isolation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-[132px] flex-col justify-center rounded-2xl border border-neutral-200 bg-white px-5 py-6 shadow-sm sm:min-h-[148px] sm:px-6 sm:py-7"
              >
                <p className="text-3xl font-semibold tracking-tight text-brand-accent sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-500 sm:text-[15px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <WhatWeDoBentoGrid caseStudies={caseStudies} />
      </div>
    </section>
  );
};

'use client';

import React from "react";
import { CaseStudy } from "@/lib/seed-types";
import { WhatWeDoBentoGrid } from "@/components/seed/WhatWeDoBentoGrid";

const STATS: { value: React.ReactNode; label: string }[] = [
  {
    value: (
      <>
        <span className="font-semibold">£</span>
        <span className="font-semibold">32M</span>
        <span className="font-semibold">+</span>
      </>
    ),
    label: "Managed Spend",
  },
  {
    value: (
      <>
        <span className="font-semibold">80</span>
        <span className="font-semibold">+</span>
      </>
    ),
    label: "Brands Served",
  },
  {
    value: (
      <>
        <span className="font-semibold">4.9</span>
        <span className="font-semibold">★</span>
      </>
    ),
    label: "Client Rating",
  },
  {
    value: (
      <>
        <span className="font-semibold">10</span>
        <span className="font-semibold">yrs</span>
      </>
    ),
    label: "In Business",
  },
];

interface StatsSectionProps {
  caseStudies: CaseStudy[];
}

export const StatsSection: React.FC<StatsSectionProps> = ({ caseStudies }) => {
  return (
    <section id="work" className="relative overflow-hidden bg-brand-bg-darker py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 55% at 15% 20%, rgba(232, 184, 75, 0.08) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 85% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
              What We Do
            </p>
            <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Full-funnel{" "}
              <span className="text-brand-accent">growth</span> for brands that
              want to win.
            </h2>
            <p className="text-base leading-relaxed text-neutral-400 md:text-lg">
              A performance-driven growth partner, combining data and creativity
              across every channel that matters — so nothing&apos;s working in
              isolation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-[132px] flex-col justify-center rounded-2xl border border-white/10 bg-[#232327] px-5 py-6 sm:min-h-[148px] sm:px-6 sm:py-7"
              >
                <p className="text-3xl font-semibold tracking-tight text-brand-accent sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-neutral-400 sm:text-[15px]">
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

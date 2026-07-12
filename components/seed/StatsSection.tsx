'use client';

import React from "react";
import { Clock, Gauge, TrendingUp, Wallet } from "lucide-react";
import { CaseStudy } from "@/lib/seed-types";
import { WhatWeDoBentoGrid } from "@/components/seed/WhatWeDoBentoGrid";

const STATS = [
  {
    value: "£5M+",
    label: "Yearly Ad Spend Managed",
    icon: Wallet,
  },
  {
    value: "£50M+",
    label: "Revenue Generated",
    icon: TrendingUp,
  },
  {
    value: "10 yrs",
    label: "Experience",
    icon: Clock,
  },
  {
    value: "6.2x",
    label: "Average ROAS",
    icon: Gauge,
  },
] as const;

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

          <div
            className={`overflow-hidden rounded-2xl border ${
              isLight
                ? "border-neutral-200/80 bg-white shadow-sm"
                : "border-white/10 bg-[#232327]"
            }`}
          >
            <div
              className={`grid grid-cols-2 ${
                isLight ? "divide-neutral-200/80" : "divide-white/10"
              } divide-x divide-y`}
            >
              {STATS.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className={`relative px-5 py-6 sm:px-7 sm:py-8 ${
                      isLight ? "bg-white" : "bg-[#232327]"
                    }`}
                  >
                    <div
                      className={`mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full border ${
                        isLight
                          ? "border-brand-accent/20 bg-brand-accent/10 text-brand-accent-dark"
                          : "border-brand-accent/25 bg-brand-accent/10 text-brand-accent"
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-[2rem] leading-none tracking-tight text-brand-accent sm:text-[2.35rem]">
                      {stat.value}
                    </h3>
                    <p
                      className={`mt-3 max-w-[12rem] text-[11px] font-bold uppercase leading-snug tracking-[0.14em] ${
                        isLight ? "text-neutral-500" : "text-neutral-500"
                      }`}
                    >
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <WhatWeDoBentoGrid caseStudies={caseStudies} layout={bentoLayout} />
      </div>
    </section>
  );
};

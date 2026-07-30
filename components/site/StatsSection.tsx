'use client';

import React from "react";
import { Clock, Gauge, TrendingUp, Wallet } from "lucide-react";
import { motion } from "motion/react";
import { CaseStudy } from "@/lib/site-types";
import { SectionIntro } from "@/components/site/SectionIntro";
import { WhatWeDoBentoGrid } from "@/components/site/WhatWeDoBentoGrid";

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

const PRINCIPLES = [
  {
    title: "Senior ownership on every account",
    body: "The people planning the work are the people running it. No junior hand-offs once the contract is signed.",
  },
  {
    title: "Channels planned as one system",
    body: "Search, paid, creative and PR share one brief so spend compounds instead of competing for the same credit.",
  },
  {
    title: "Reporting tied to commercial outcomes",
    body: "Pipeline, revenue and cost efficiency sit in the pack. If a metric cannot inform a decision, it does not make the cut.",
  },
  {
    title: "Terms that follow the work",
    body: "Scale up, shift focus, or pause channels as priorities change. No twelve-month lock-in built for the agency.",
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
        <div
          className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${
            isLight ? "items-start" : "items-center"
          }`}
        >
          <SectionIntro
            className={`max-w-xl ${isLight ? "lg:sticky lg:top-28" : ""}`}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
              What we do
            </p>
            <h2
              className={`mb-6 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.15] ${
                isLight ? "text-neutral-900" : "text-white"
              }`}
            >
              One integrated{" "}
              <span className="text-brand-accent">plan</span> across every
              channel.
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
          </SectionIntro>

          {isLight ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <ol className="relative m-0 list-none p-0">
                <div
                  aria-hidden
                  className="absolute bottom-3 left-[5px] top-3 w-px bg-gradient-to-b from-brand-accent via-brand-accent/35 to-neutral-200"
                />

                {PRINCIPLES.map((item, i) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative flex gap-4 border-b border-neutral-200/80 py-4 last:border-b-0 last:pb-0 first:pt-0 md:gap-5 md:py-5"
                  >
                    <div className="relative z-10 mt-1.5 flex h-3 w-3 shrink-0 items-center justify-center">
                      <span
                        className={`block rounded-full ring-[5px] ring-[#f7f7f5] transition-colors duration-300 ${
                          i === 0
                            ? "h-2.5 w-2.5 bg-brand-accent"
                            : "h-2 w-2 bg-neutral-300 group-hover:bg-brand-accent"
                        }`}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[16px] font-medium leading-snug tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-brand-accent-dark md:text-[17px]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[13px] font-normal leading-relaxed text-neutral-500">
                        {item.body}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#232327]">
              <div className="grid grid-cols-2 divide-x divide-y divide-white/10">
                {STATS.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="relative bg-[#232327] px-5 py-6 sm:px-7 sm:py-8"
                    >
                      <div className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-accent/25 bg-brand-accent/10 text-brand-accent">
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </div>
                      <h3 className="text-[2rem] leading-none tracking-tight text-brand-accent sm:text-[2.35rem]">
                        {stat.value}
                      </h3>
                      <p className="mt-3 max-w-[12rem] text-[11px] font-bold uppercase leading-snug tracking-[0.14em] text-neutral-500">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <WhatWeDoBentoGrid caseStudies={caseStudies} layout={bentoLayout} />
      </div>
    </section>
  );
};

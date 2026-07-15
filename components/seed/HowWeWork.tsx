'use client';

import React from "react";
import { motion } from "motion/react";
import { CalendarDays, ClipboardCheck, TrendingUp, Zap } from "lucide-react";
import { EngagementStep } from "@/lib/seed-types";

interface HowWeWorkProps {
  steps: EngagementStep[];
}

const STEP_ICONS = {
  audit: ClipboardCheck,
  fix: Zap,
  scale: TrendingUp,
  review: CalendarDays,
} as const;

export const HowWeWork: React.FC<HowWeWorkProps> = ({ steps }) => {
  return (
    <section id="how-we-work" className="relative border-t border-neutral-200 bg-white py-20 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-2xl text-left">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent-dark">
            How We Work
          </p>
          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            What the first 90 days look like.
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            Most agencies spend months on process before anything moves. We get
            into your accounts fast, fix what is broken, and build momentum you
            can measure.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:gap-5">
          {steps.map((step, index) => {
            const Icon =
              STEP_ICONS[step.id as keyof typeof STEP_ICONS] ?? ClipboardCheck;

            return (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="list-none"
              >
                <article className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-[#f7f7f5] p-5 md:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-accent/25 bg-brand-accent/10 text-brand-accent-dark">
                      <Icon className="h-4 w-4" strokeWidth={2.25} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-accent-dark">
                        {step.phase}
                      </p>
                      <p className="text-xs font-semibold tabular-nums text-neutral-400">
                        Step {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600 md:text-[15px]">
                    {step.body}
                  </p>
                </article>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

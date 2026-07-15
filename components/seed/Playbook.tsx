'use client';

import React from "react";
import { motion } from "motion/react";
import { PlaybookRow } from "@/lib/seed-types";

interface PlaybookProps {
  rows: PlaybookRow[];
}

export const Playbook: React.FC<PlaybookProps> = ({ rows }) => {
  return (
    <section id="playbook" className="relative bg-[#f7f7f5] py-[6.9rem]">
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="text-left lg:sticky lg:top-24 lg:col-span-5">
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              The agency model, rebuilt around your outcomes.
            </h2>
            <p className="text-lg font-normal leading-relaxed text-neutral-600">
              Most agencies optimise for retainers and billable hours. We work as an extension of your team, with direct ownership, flexible terms, and reporting tied to revenue.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm lg:col-span-7"
          >
          <div className="grid md:grid-cols-2">
            <div className="border-b border-neutral-200/80 bg-neutral-50/80 px-5 py-5 md:border-b-0 md:border-r md:px-6 md:py-6">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                Instead of
              </p>
              <ul className="space-y-3.5">
                {rows.map((row, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="flex min-h-[2.75rem] items-center gap-3"
                  >
                    <span className="w-5 shrink-0 text-[11px] font-bold tabular-nums text-neutral-300">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-snug text-neutral-400 line-through decoration-neutral-300">
                      {row.from}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="px-5 py-5 md:px-6 md:py-6">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-accent-dark">
                You get
              </p>
              <ul className="space-y-3.5">
                {rows.map((row, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="flex min-h-[2.75rem] items-center gap-3"
                  >
                    <span className="w-5 shrink-0 text-[11px] font-bold tabular-nums text-brand-accent-dark/45">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-semibold leading-snug text-neutral-900">
                      {row.to}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

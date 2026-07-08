'use client';

import React from "react";
import { motion } from "motion/react";
import { ThumbsDown, ThumbsUp, ArrowRight } from "lucide-react";
import { PlaybookRow } from "@/lib/seed-types";

interface PlaybookProps {
  rows: PlaybookRow[];
}

export const Playbook: React.FC<PlaybookProps> = ({ rows }) => {
  return (
    <section id="playbook" className="relative border-b border-neutral-200 bg-[#f7f7f5] py-24">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-12">
        <div className="text-left lg:col-span-5">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
            How We Differ
          </p>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Out with the old agency playbook.
          </h2>
          <p className="mb-8 text-lg font-normal leading-relaxed text-neutral-600">
            We believe traditional agencies are structured to protect themselves, not grow their clients. Retainers tied strictly to hours incentivize slowness. We believe progressive is simply better.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/25 bg-brand-accent/10 px-4 py-1.5 text-sm font-bold text-brand-accent shadow-sm">
            <span>Result-Tied Partnerships Only</span>
          </div>
        </div>

        <div className="space-y-4 lg:col-span-7">
          {rows.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="grid grid-cols-1 items-center gap-3 md:grid-cols-11"
            >
              <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-5 py-4 text-neutral-400 md:col-span-5">
                <ThumbsDown className="h-4.5 w-4.5 shrink-0 text-neutral-300" />
                <span className="text-sm font-semibold line-through text-neutral-400 md:text-base">
                  {row.from}
                </span>
              </div>

              <div className="flex justify-center text-neutral-300 md:col-span-1">
                <ArrowRight className="h-4 w-4 rotate-90 md:rotate-0" />
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-brand-accent/30 bg-brand-accent/10 px-5 py-4 font-extrabold text-brand-accent shadow-md md:col-span-5">
                <ThumbsUp className="h-4.5 w-4.5 shrink-0 text-brand-accent" />
                <span className="text-sm text-neutral-900 md:text-base">
                  {row.to}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

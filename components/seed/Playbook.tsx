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
    <section id="playbook" className="py-24 bg-brand-bg-darker border-y border-brand-teal-light/10 relative">
      <div className="absolute top-0 right-10 w-80 h-80 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text */}
        <div className="lg:col-span-5 text-left">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-4">
            How We Differ
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Out with the old agency playbook.
          </h2>
          <p className="text-brand-text-pale/80 text-lg leading-relaxed mb-8 font-medium">
            We believe traditional agencies are structured to protect themselves, not grow their clients. Retainers tied strictly to hours incentivize slowness. We believe progressive is simply better.
          </p>
          <div className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm bg-brand-accent/10 border border-brand-accent/25 rounded-full px-4 py-1.5 shadow-sm">
            <span>Result-Tied Partnerships Only</span>
          </div>
        </div>

        {/* Right Column Grid Rows */}
        <div className="lg:col-span-7 space-y-4">
          {rows.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-11 gap-3 items-center"
            >
              {/* Old agency way */}
              <div className="md:col-span-5 flex items-center gap-3 bg-brand-bg border border-brand-teal-light/10 rounded-xl px-5 py-4 text-brand-text-pale/40">
                <ThumbsDown className="h-4.5 w-4.5 text-brand-text-pale/30 shrink-0" />
                <span className="line-through text-sm md:text-base text-brand-text-pale/40 font-semibold">
                  {row.from}
                </span>
              </div>

              {/* Transition arrow separator */}
              <div className="md:col-span-1 flex justify-center text-brand-teal-light/45">
                <ArrowRight className="h-4 w-4 rotate-90 md:rotate-0" />
              </div>

              {/* Seed's way */}
              <div className="md:col-span-5 flex items-center gap-3 bg-brand-accent/10 border border-brand-accent/30 rounded-xl px-5 py-4 text-brand-accent font-extrabold shadow-md">
                <ThumbsUp className="h-4.5 w-4.5 shrink-0 text-brand-accent" />
                <span className="text-sm md:text-base text-white">
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

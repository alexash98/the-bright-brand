'use client';

import React, { useState } from "react";
import Image from "next/image";
import { CaseStudyModalLayer } from "@/components/seed/CaseStudyModal";
import { isPreoptimizedLocalImage } from "@/lib/image";
import { CaseStudy } from "@/lib/seed-types";
import { motion, AnimatePresence } from "motion/react";

interface CaseStudiesProps {
  items: CaseStudy[];
}

export function CaseStudies({ items }: CaseStudiesProps) {
  const [filter, setFilter] = useState<"All" | "Paid" | "Organic" | "Social" | "PR">("All");
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  const filteredItems = filter === "All"
    ? items
    : items.filter(item => item.category === filter);

  return (
    <section id="work" className="relative border-t border-neutral-200 bg-white py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
              Our Proven Work
            </p>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              Real results for ambitious brands.
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
              We focus on incremental growth, profitability, and transparent metrics. Click any card to read the full case study.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 self-start rounded-full border border-neutral-200 bg-neutral-50 p-1.5 md:self-auto">
            {(["All", "Paid", "Organic", "Social", "PR"] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                  filter === cat
                    ? "bg-brand-accent text-brand-bg-darker shadow-md"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {cat === "All" ? "All Work" : cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((study) => (
              <motion.div
                layout
                key={study.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveStudy(study)}
                className="group relative flex h-96 cursor-pointer flex-col justify-end overflow-hidden rounded-xl border border-neutral-200 p-6 shadow-lg transition-all duration-300 hover:border-brand-accent/30"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={study.imageUrl}
                    alt={study.clientName}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    decoding="async"
                    unoptimized={isPreoptimizedLocalImage(study.imageUrl)}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-darker via-brand-bg-darker/70 to-transparent" />
                  <div className="absolute inset-0 bg-brand-bg-darker/10 transition-colors duration-300 group-hover:bg-brand-bg-darker/5" />
                </div>

                <div className="relative z-10 flex h-full flex-col items-start justify-between">
                  <div className="rounded-sm border border-white/20 bg-brand-bg-darker/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-accent backdrop-blur-sm">
                    {study.category}
                  </div>

                  <div>
                    <span className="mb-2 block text-3xl font-black tracking-tight text-brand-accent drop-shadow-[0_2px_8px_rgba(232,184,75,0.2)] md:text-4xl">
                      {study.highlightStat}
                    </span>
                    <h3 className="mb-2 text-xl font-semibold leading-tight text-white transition-colors group-hover:text-brand-accent">
                      {study.clientName}
                    </h3>
                    <p className="line-clamp-2 text-xs font-normal leading-relaxed text-white/90 md:text-sm">
                      {study.tagline}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <CaseStudyModalLayer
          study={activeStudy}
          onClose={() => setActiveStudy(null)}
        />
      </div>
    </section>
  );
}

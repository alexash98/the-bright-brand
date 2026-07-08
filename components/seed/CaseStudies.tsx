'use client';

import React, { useState } from "react";
import Image from "next/image";
import { CaseStudy } from "@/lib/seed-types";
import { motion, AnimatePresence } from "motion/react";
import { X, TrendingUp, CheckCircle2 } from "lucide-react";

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

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 self-start rounded-full border border-neutral-200 bg-neutral-50 p-1.5 md:self-auto">
            {(["All", "Paid", "Organic", "Social", "PR"] as const).map((cat) => (
              <button
                key={cat}
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

        {/* Case Studies Grid */}
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
                {/* Background Image with Zoom */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={study.imageUrl}
                    alt={study.clientName}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Rich Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-darker via-brand-bg-darker/70 to-transparent" />
                  <div className="absolute inset-0 bg-brand-bg-darker/10 transition-colors duration-300 group-hover:bg-brand-bg-darker/5" />
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex h-full flex-col items-start justify-between">
                  {/* Category Badge */}
                  <div className="rounded-sm border border-white/20 bg-brand-bg-darker/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-accent backdrop-blur-sm">
                    {study.category}
                  </div>

                  {/* Metrics and descriptions */}
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

        {/* Detailed Modal/Dialog Deep-Dive Popup */}
        <AnimatePresence>
          {activeStudy && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveStudy(null)}
                className="absolute inset-0 bg-brand-bg-darker/80 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="custom-scrollbar relative z-10 max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-neutral-200 bg-white text-left"
              >
                {/* Image Banner Header */}
                <div className="relative h-64 overflow-hidden md:h-80">
                  <Image
                    src={activeStudy.imageUrl}
                    alt={activeStudy.clientName}
                    fill
                    sizes="(max-width: 768px) 100vw, 896px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-darker via-brand-bg-darker/60 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-sm bg-brand-accent px-3 py-1 text-xs font-black uppercase tracking-wider text-brand-bg-darker">
                    {activeStudy.category} Case Study
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setActiveStudy(null)}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-brand-bg-darker/60 text-white transition-colors hover:border-brand-accent/40 hover:text-brand-accent"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-sm font-bold uppercase tracking-wider text-brand-accent">
                      Client Case Study
                    </span>
                    <h3 className="mt-2 text-3xl font-semibold leading-tight text-white md:text-5xl">
                      {activeStudy.clientName}
                    </h3>
                  </div>
                </div>

                {/* Content body */}
                <div className="space-y-8 p-6 md:p-10">
                  {/* Highlight Stats Bento Block */}
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {activeStudy.stats.map((statItem, idx) => (
                      <div key={idx} className="flex flex-col items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 p-5 text-center">
                        <TrendingUp className="mb-2 h-5 w-5 text-brand-accent" />
                        <span className="block text-3xl font-black tracking-tight text-neutral-900">
                          {statItem.stat}
                        </span>
                        <span className="mt-1 text-xs text-neutral-500">
                          {statItem.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Narrative details */}
                  <div className="grid gap-8 pt-4 md:grid-cols-12">
                    <div className="space-y-6 md:col-span-8">
                      <div>
                        <h4 className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-accent">
                          The Challenge
                        </h4>
                        <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
                          {activeStudy.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-accent">
                          The Approach
                        </h4>
                        <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
                          {activeStudy.approach}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6 md:col-span-4">
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-accent">
                          The Deliverables
                        </h4>
                        <ul className="space-y-2.5">
                          {activeStudy.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                              <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-accent" />
                              <span className="leading-snug">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Quote Testimonial inside Modal if present */}
                  {activeStudy.testimonial && (
                    <div className="space-y-4 rounded-r-xl border-l-2 border-brand-accent bg-neutral-50 p-6 md:p-8">
                      <p className="text-base italic leading-relaxed text-neutral-600">
                        "{activeStudy.testimonial.text}"
                      </p>
                      <div>
                        <p className="text-sm font-bold text-neutral-900">
                          {activeStudy.testimonial.author}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {activeStudy.testimonial.role}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Action row */}
                  <div className="flex items-center justify-between border-t border-neutral-200 pt-6">
                    <div className="flex gap-2">
                      <div className="rounded-sm bg-neutral-100 px-3 py-1 text-xs font-semibold text-brand-accent">
                        Tag: #{activeStudy.category}
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveStudy(null)}
                      className="rounded-full bg-brand-accent px-6 py-2.5 text-sm font-bold text-brand-bg-darker transition-colors duration-200 hover:bg-brand-accent-hover"
                    >
                      Close Overview
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from "react";
import { CaseStudy } from "@/lib/seed-types";
import { motion, AnimatePresence } from "motion/react";
import { X, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

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
    <section id="work" className="py-24 bg-brand-bg relative border-t border-brand-teal-light/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--color-brand-accent),transparent_70%)] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-4">
              Our Proven Work
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Real results for ambitious brands.
            </h2>
            <p className="text-brand-text-pale/80 text-sm md:text-base leading-relaxed">
              We focus on incremental growth, profitability, and transparent metrics. Click any card to read the full case study.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 bg-brand-bg-darker/60 p-1.5 rounded-full border border-brand-teal-light/10 self-start md:self-auto">
            {(["All", "Paid", "Organic", "Social", "PR"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${
                  filter === cat
                    ? "bg-brand-accent text-brand-bg-darker shadow-md"
                    : "text-brand-text-pale/70 hover:text-white"
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                className="group relative h-96 rounded-xl overflow-hidden cursor-pointer border border-brand-teal-light/10 flex flex-col justify-end p-6 hover:border-brand-accent/30 transition-all duration-300 shadow-lg"
              >
                {/* Background Image with Zoom */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={study.imageUrl}
                    alt={study.clientName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Rich Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-darker via-brand-bg-darker/70 to-transparent" />
                  <div className="absolute inset-0 bg-brand-bg-darker/10 group-hover:bg-brand-bg-darker/5 transition-colors duration-300" />
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full justify-between items-start">
                  {/* Category Badge */}
                  <div className="bg-brand-bg-darker/95 border border-brand-teal-light/20 backdrop-blur-sm px-3 py-1 rounded-sm text-[10px] font-bold tracking-wider text-brand-accent uppercase">
                    {study.category}
                  </div>

                  {/* Metrics and descriptions */}
                  <div>
                    <span className="text-3xl md:text-4xl font-black text-brand-accent tracking-tight block mb-2 drop-shadow-[0_2px_8px_rgba(91,159,255,0.2)]">
                      {study.highlightStat}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-brand-accent transition-colors">
                      {study.clientName}
                    </h3>
                    <p className="text-brand-text-pale/90 text-xs md:text-sm line-clamp-2 leading-relaxed font-medium">
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
                className="relative bg-brand-bg border border-brand-teal-light/20 rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto z-10 text-left custom-scrollbar"
              >
                {/* Image Banner Header */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={activeStudy.imageUrl}
                    alt={activeStudy.clientName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent" />
                  <div className="absolute top-4 left-4 bg-brand-accent text-brand-bg-darker px-3 py-1 rounded-sm text-xs font-black tracking-wider uppercase">
                    {activeStudy.category} Case Study
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setActiveStudy(null)}
                    className="absolute top-4 right-4 h-10 w-10 rounded-full bg-brand-bg-darker/60 border border-brand-teal-light/20 flex items-center justify-center text-white hover:text-brand-accent hover:border-brand-accent/40 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-sm font-bold tracking-wider text-brand-accent uppercase">
                      Client Case Study
                    </span>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-white mt-2 leading-tight">
                      {activeStudy.clientName}
                    </h3>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 md:p-10 space-y-8">
                  {/* Highlight Stats Bento Block */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {activeStudy.stats.map((statItem, idx) => (
                      <div key={idx} className="bg-brand-bg-darker/60 border border-brand-teal-light/10 rounded-xl p-5 flex flex-col justify-center items-center text-center">
                        <TrendingUp className="h-5 w-5 text-brand-accent mb-2" />
                        <span className="text-3xl font-black text-white block tracking-tight">
                          {statItem.stat}
                        </span>
                        <span className="text-xs text-brand-text-pale/50 mt-1">
                          {statItem.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Narrative details */}
                  <div className="grid md:grid-cols-12 gap-8 pt-4">
                    <div className="md:col-span-8 space-y-6">
                      <div>
                        <h4 className="text-sm uppercase tracking-widest text-brand-accent font-bold mb-2">
                          The Challenge
                        </h4>
                        <p className="text-brand-text-pale/85 text-sm md:text-base leading-relaxed">
                          {activeStudy.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm uppercase tracking-widest text-brand-accent font-bold mb-2">
                          The Approach
                        </h4>
                        <p className="text-brand-text-pale/85 text-sm md:text-base leading-relaxed">
                          {activeStudy.approach}
                        </p>
                      </div>
                    </div>

                    <div className="md:col-span-4 space-y-6">
                      <div>
                        <h4 className="text-sm uppercase tracking-widest text-brand-accent font-bold mb-3">
                          The Deliverables
                        </h4>
                        <ul className="space-y-2.5">
                          {activeStudy.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-brand-text-pale/85">
                              <CheckCircle2 className="h-4.5 w-4.5 text-brand-accent shrink-0 mt-0.5" />
                              <span className="leading-snug">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Quote Testimonial inside Modal if present */}
                  {activeStudy.testimonial && (
                    <div className="bg-brand-bg-darker/50 border-l-2 border-brand-accent rounded-r-xl p-6 md:p-8 space-y-4">
                      <p className="text-brand-text-pale/90 text-base italic leading-relaxed">
                        "{activeStudy.testimonial.text}"
                      </p>
                      <div>
                        <p className="text-sm font-bold text-white">
                          {activeStudy.testimonial.author}
                        </p>
                        <p className="text-xs text-brand-text-pale/50">
                          {activeStudy.testimonial.role}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Action row */}
                  <div className="flex items-center justify-between pt-6 border-t border-brand-teal-light/10">
                    <div className="flex gap-2">
                      <div className="bg-brand-bg-darker text-brand-accent px-3 py-1 rounded-sm text-xs font-semibold">
                        Tag: #{activeStudy.category}
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveStudy(null)}
                      className="bg-brand-accent hover:bg-brand-accent-hover text-brand-bg-darker font-bold text-sm px-6 py-2.5 rounded-full transition-colors duration-200"
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

'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { AccordionItem } from "@/lib/seed-types";

interface HowWeWorkProps {
  items: AccordionItem[];
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ items }) => {
  const [expandedId, setExpandedId] = useState<string | null>("team");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="how-we-work" className="relative border-t border-neutral-200 bg-white py-24">
      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-12 px-4 md:px-8 lg:grid-cols-12">
        <div className="text-left lg:sticky lg:top-24 lg:col-span-5">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
            How We Work
          </p>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Bespoke squads built around <span className="text-brand-accent">your</span> goals.
          </h2>
          <div className="space-y-4 text-lg font-normal leading-relaxed text-neutral-600">
            <p>
              Your account is run directly by your Pod — a dedicated, cross-functional team assembled for your exact objectives.
            </p>
            <p>
              Decisions happen in hours, not weeks, because the specialists executing your campaigns have complete ownership of the results.
            </p>
          </div>
        </div>

        <div className="space-y-3 lg:col-span-7">
          {items.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isExpanded
                    ? "border-brand-accent/30 bg-white shadow-lg"
                    : "border-neutral-200 bg-neutral-50 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <span className={`text-base font-bold transition-colors duration-200 md:text-lg ${
                    isExpanded ? "text-brand-accent" : "text-neutral-900"
                  }`}>
                    {item.title}
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex h-7 w-7 items-center justify-center rounded-full border transition-colors ${
                      isExpanded
                        ? "border-brand-accent/25 bg-brand-accent/10 text-brand-accent"
                        : "border-neutral-200 bg-white text-neutral-400"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="border-t border-neutral-200 px-6 pb-6 pt-4 text-sm font-normal leading-relaxed text-neutral-600 md:text-base">
                        {item.body}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

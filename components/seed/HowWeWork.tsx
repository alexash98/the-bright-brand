'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { AccordionItem } from "@/lib/seed-types";

interface HowWeWorkProps {
  items: AccordionItem[];
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ items }) => {
  const [expandedId, setExpandedId] = useState<string | null>("team"); // default the first item open

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="how-we-work" className="py-24 bg-brand-bg-darker border-y border-brand-teal-light/10 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-brand-accent),transparent_70%)] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Grid Copy */}
        <div className="lg:col-span-5 text-left lg:sticky lg:top-24">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-4">
            How We Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Bespoke squads built around <span className="text-brand-accent">your</span> goals.
          </h2>
          <div className="space-y-4 text-brand-text-pale/80 text-lg leading-relaxed font-medium">
            <p>
              Your account is run directly by your Pod — a dedicated, cross-functional team assembled for your exact objectives.
            </p>
            <p>
              Decisions happen in hours, not weeks, because the specialists executing your campaigns have complete ownership of the results.
            </p>
          </div>
        </div>

        {/* Right Grid Accordion */}
        <div className="lg:col-span-7 space-y-3">
          {items.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? "bg-brand-bg border-brand-accent/30 shadow-lg" 
                    : "bg-brand-bg-card hover:bg-brand-bg border-brand-teal-light/10"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <span className={`text-base md:text-lg font-bold transition-colors duration-200 ${
                    isExpanded ? "text-brand-accent" : "text-white"
                  }`}>
                    {item.title}
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`h-7 w-7 rounded-full flex items-center justify-center border transition-colors ${
                      isExpanded 
                        ? "bg-brand-accent/10 border-brand-accent/25 text-brand-accent" 
                        : "bg-brand-bg-darker border-brand-teal-light/20 text-brand-text-pale/50"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-brand-teal-light/10 text-brand-text-pale/85 text-sm md:text-base leading-relaxed pt-4 font-medium">
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

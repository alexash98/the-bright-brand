'use client';

import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, TrendingUp, X } from "lucide-react";
import { isPreoptimizedLocalImage } from "@/lib/image";
import { CaseStudy } from "@/lib/seed-types";

interface CaseStudyModalProps {
  study: CaseStudy;
  onClose: () => void;
}

export function CaseStudyModal({
  study,
  onClose,
}: CaseStudyModalProps): React.ReactElement {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-bg-darker/80 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="custom-scrollbar relative z-10 max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-neutral-200 bg-white text-left"
      >
        <div className="relative h-64 overflow-hidden md:h-80">
          <Image
            src={study.imageUrl}
            alt={study.clientName}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            unoptimized={isPreoptimizedLocalImage(study.imageUrl)}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-darker via-brand-bg-darker/60 to-transparent" />
          <div className="absolute left-4 top-4 rounded-sm bg-brand-accent px-3 py-1 text-xs font-black uppercase tracking-wider text-brand-bg-darker">
            {study.category} Case Study
          </div>

          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-brand-bg-darker/60 text-white transition-colors hover:border-brand-accent/40 hover:text-brand-accent"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-accent">
              Client Case Study
            </span>
            <h3 className="mt-2 text-3xl font-semibold leading-tight text-white md:text-5xl">
              {study.clientName}
            </h3>
          </div>
        </div>

        <div className="space-y-8 p-6 md:p-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {study.stats.map((statItem, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 p-5 text-center"
              >
                <TrendingUp className="mb-2 h-5 w-5 text-brand-accent" />
                <span className="block text-3xl font-black tracking-tight text-neutral-900">
                  {statItem.stat}
                </span>
                <span className="mt-1 text-xs text-neutral-500">{statItem.label}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-8 pt-4 md:grid-cols-12">
            <div className="space-y-6 md:col-span-8">
              <div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-accent">
                  The Challenge
                </h4>
                <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
                  {study.challenge}
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-accent">
                  The Approach
                </h4>
                <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
                  {study.approach}
                </p>
              </div>
            </div>

            <div className="space-y-6 md:col-span-4">
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-accent">
                  The Deliverables
                </h4>
                <ul className="space-y-2.5">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                      <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-accent" />
                      <span className="leading-snug">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {study.testimonial ? (
            <div className="space-y-4 rounded-r-xl border-l-2 border-brand-accent bg-neutral-50 p-6 md:p-8">
              <p className="text-base italic leading-relaxed text-neutral-600">
                &ldquo;{study.testimonial.text}&rdquo;
              </p>
              <div>
                <p className="text-sm font-bold text-neutral-900">
                  {study.testimonial.author}
                </p>
                <p className="text-xs text-neutral-500">{study.testimonial.role}</p>
              </div>
            </div>
          ) : null}

          <div className="flex items-center justify-between border-t border-neutral-200 pt-6">
            <div className="rounded-sm bg-neutral-100 px-3 py-1 text-xs font-semibold text-brand-accent">
              Tag: #{study.category}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-brand-accent px-6 py-2.5 text-sm font-bold text-brand-bg-darker transition-colors duration-200 hover:bg-brand-accent-hover"
            >
              Close Overview
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface CaseStudyModalLayerProps {
  study: CaseStudy | null;
  onClose: () => void;
}

export function CaseStudyModalLayer({
  study,
  onClose,
}: CaseStudyModalLayerProps): React.ReactElement | null {
  return (
    <AnimatePresence>
      {study ? <CaseStudyModal study={study} onClose={onClose} /> : null}
    </AnimatePresence>
  );
}

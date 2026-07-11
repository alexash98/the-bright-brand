'use client';

import React from "react";
import { motion } from "motion/react";
import { CaseStudy } from "@/lib/seed-types";
import { PortfolioCard } from "@/components/seed/PortfolioCard";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const GRID_VARIANTS = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
} as const;

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
} as const;

interface CaseStudiesPortfolioGridProps {
  caseStudies: CaseStudy[];
}

export function CaseStudiesPortfolioGrid({
  caseStudies,
}: CaseStudiesPortfolioGridProps): React.ReactElement {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative bg-white pb-20 pt-16 text-neutral-900 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 max-w-2xl text-left md:mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Results that speak for themselves.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
            A selection of measurable outcomes from brands we work with across
            search, paid media, social and PR.
          </p>
        </div>

        {prefersReducedMotion ? (
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {caseStudies.map((study) => (
              <div key={study.id} className="h-full">
                <PortfolioCard study={study} />
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.06 }}
            variants={GRID_VARIANTS}
          >
            {caseStudies.map((study) => (
              <motion.div key={study.id} className="h-full" variants={CARD_VARIANTS}>
                <PortfolioCard study={study} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

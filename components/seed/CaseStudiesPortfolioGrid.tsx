'use client';

import React from "react";
import { motion } from "motion/react";
import { CaseStudy } from "@/lib/seed-types";
import { PortfolioCard } from "@/components/seed/PortfolioCard";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const CARD_INTRO_TRANSITION = {
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1] as const,
};

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

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {caseStudies.map((study, index) => {
            const card = <PortfolioCard study={study} />;

            if (prefersReducedMotion) {
              return (
                <div key={study.id} className="h-full">
                  {card}
                </div>
              );
            }

            return (
              <motion.div
                key={study.id}
                className="h-full"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  ...CARD_INTRO_TRANSITION,
                  delay: index * 0.12,
                }}
              >
                {card}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

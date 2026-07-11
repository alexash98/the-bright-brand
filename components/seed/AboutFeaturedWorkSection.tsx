'use client';

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { PortfolioCard } from "@/components/seed/PortfolioCard";
import { AboutFeaturedWorkContent, CaseStudy } from "@/lib/seed-types";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

interface AboutFeaturedWorkSectionProps {
  content: AboutFeaturedWorkContent;
  caseStudies: CaseStudy[];
}

const GRID_VARIANTS = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
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

export function AboutFeaturedWorkSection({
  content,
  caseStudies,
}: AboutFeaturedWorkSectionProps): React.ReactElement {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <section className="bg-white py-20 text-neutral-900 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 grid gap-8 lg:mb-14 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="text-left lg:col-span-7">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
              {content.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {content.title}{" "}
              <span className="text-brand-accent">{content.highlight}</span>
            </h2>
          </div>

          <div className="text-left lg:col-span-5">
            <p className="mb-5 text-base leading-relaxed text-neutral-600 md:text-lg">
              {content.intro}
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 transition-colors hover:text-brand-accent-dark"
            >
              View all work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {prefersReducedMotion ? (
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {caseStudies.map((study) => (
              <PortfolioCard key={study.id} study={study} />
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
              <motion.div key={study.id} variants={CARD_VARIANTS}>
                <PortfolioCard study={study} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

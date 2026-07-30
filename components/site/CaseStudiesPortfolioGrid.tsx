'use client';

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { CaseStudy } from "@/lib/site-types";
import { PortfolioCard } from "@/components/site/PortfolioCard";
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

function PortfolioContactCta(): React.ReactElement {
  return (
    <Link
      href="/contact"
      className="group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-brand-bg-darker p-5 sm:min-h-[350px] sm:p-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_100%_0%,rgba(232,184,75,0.18),transparent_55%)]"
      />
      <p className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
        Next brief
      </p>
      <div className="relative z-10">
        <h3 className="max-w-sm text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Ready to see numbers like these on your accounts?
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-text-pale/70 sm:text-[15px]">
          Tell us where you want to go. We will come back with a clear next
          step.
        </p>
      </div>
      <span className="relative z-10 inline-flex w-fit items-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-sm font-bold text-brand-bg-darker transition-colors group-hover:bg-brand-accent-hover">
        Contact us now
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function CaseStudiesPortfolioGrid({
  caseStudies,
}: CaseStudiesPortfolioGridProps): React.ReactElement {
  const prefersReducedMotion = usePrefersReducedMotion();
  // Fill the trailing empty cells on the last row (3-col desktop, 2-col tablet).
  const remainderLg = caseStudies.length % 3;
  const contactColSpanClass =
    remainderLg === 1
      ? "sm:col-span-1 lg:col-span-2"
      : remainderLg === 2
        ? "sm:col-span-1 lg:col-span-1"
        : "sm:col-span-2 lg:col-span-3";

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
            <div className={`h-full ${contactColSpanClass}`}>
              <PortfolioContactCta />
            </div>
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
            <motion.div
              className={`h-full ${contactColSpanClass}`}
              variants={CARD_VARIANTS}
            >
              <PortfolioContactCta />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

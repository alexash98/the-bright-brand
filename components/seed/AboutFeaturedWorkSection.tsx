'use client';

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { PortfolioCard } from "@/components/seed/PortfolioCard";
import { AboutFeaturedWorkContent, CaseStudy } from "@/lib/seed-types";

interface AboutFeaturedWorkSectionProps {
  content: AboutFeaturedWorkContent;
  caseStudies: CaseStudy[];
}

const CARD_INTRO_TRANSITION = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function AboutFeaturedWorkSection({
  content,
  caseStudies,
}: AboutFeaturedWorkSectionProps): React.ReactElement {
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

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                ...CARD_INTRO_TRANSITION,
                delay: index * 0.1,
              }}
            >
              <PortfolioCard study={study} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

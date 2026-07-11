'use client';

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { CaseStudy } from "@/lib/seed-types";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const CARD_INTRO_TRANSITION = {
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1] as const,
};

function PortfolioCard({ study }: { study: CaseStudy }): React.ReactElement {
  const logoLines = study.clientName.split(" ");
  const primaryLine = logoLines[0] ?? study.clientName;
  const secondaryLine = logoLines.slice(1).join(" ");

  return (
    <article className="group relative min-h-[320px] overflow-hidden rounded-2xl border border-neutral-200/80 sm:min-h-[350px]">
      <Image
        src={study.imageUrl}
        alt={study.clientName}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        loading="lazy"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />

      <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-between p-5 sm:min-h-[350px] sm:p-6">
        <div className="flex items-center justify-start">
          {study.clientLogo ? (
            <div className="flex h-7 w-28 items-center justify-start sm:h-8 sm:w-32">
              <Image
                src={`/client-logos/${study.clientLogo}`}
                alt={study.clientName}
                width={128}
                height={32}
                className="h-full w-full object-contain object-left brightness-0 invert"
              />
            </div>
          ) : (
            <div className="inline-flex w-fit max-w-full items-center rounded-md border border-white/25 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
              <span className="truncate text-[10px] font-bold uppercase tracking-[0.14em] text-white sm:text-[11px]">
                {primaryLine}
                {secondaryLine ? ` ${secondaryLine}` : ""}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col justify-center py-4">
          <p className="text-4xl font-semibold tracking-tight text-brand-accent sm:text-5xl">
            {study.highlightStat}
          </p>
        </div>

        <div>
          <h1 className="text-[1.05rem] font-bold text-white sm:text-[1.2rem]">
            {study.clientName}
          </h1>
          <p className="mt-1 max-w-[280px] text-sm leading-snug text-white/90 sm:text-[15px]">
            {study.highlightLabel}
          </p>
        </div>
      </div>
    </article>
  );
}

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

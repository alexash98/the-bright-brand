'use client';

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { CaseStudyModalLayer } from "@/components/seed/CaseStudyModal";
import { isPreoptimizedLocalImage } from "@/lib/image";
import { CaseStudy } from "@/lib/seed-types";
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

interface BentoItemConfig {
  id: string;
  gridClass: string;
  tags?: string[];
  logoScale?: number;
}

const BENTO_LAYOUT: BentoItemConfig[] = [
  {
    id: "direct2",
    gridClass: "md:col-start-1 md:row-start-1 md:row-span-2",
    tags: ["Paid"],
    logoScale: 1.56,
  },
  {
    id: "airbox",
    gridClass: "md:col-start-2 md:row-start-1",
    tags: ["Paid"],
    logoScale: 1.3,
  },
  {
    id: "britton-and-time",
    gridClass: "md:col-start-2 md:row-start-2",
    tags: ["Paid"],
    logoScale: 1.2,
  },
  {
    id: "menzies-law",
    gridClass: "md:col-start-1 md:row-start-3",
    tags: ["Organic"],
  },
  {
    id: "formx",
    gridClass: "md:col-start-1 md:row-start-4",
    tags: ["Paid"],
  },
  {
    id: "releaf",
    gridClass: "md:col-start-2 md:row-start-3 md:row-span-2",
    tags: ["Paid", "Social"],
  },
];

function BentoCard({
  study,
  config,
  onClick,
}: {
  study: CaseStudy;
  config: BentoItemConfig;
  onClick: () => void;
}): React.ReactElement {
  const logoScale = config.logoScale ?? 1;
  const logoHeight = 28 * logoScale;
  const logoWidth = 120 * logoScale;
  const logoLines = study.clientName.split(" ");
  const primaryLine = logoLines[0] ?? study.clientName;
  const secondaryLine = logoLines.slice(1).join(" ");

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative h-full min-h-[220px] w-full overflow-hidden rounded-2xl border border-white/10 text-left transition-transform duration-300 hover:scale-[1.01] sm:min-h-[240px]"
    >
      <Image
        src={study.imageUrl}
        alt={study.clientName}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
        decoding="async"
        unoptimized={isPreoptimizedLocalImage(study.imageUrl)}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />

      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-center justify-start">
          {study.clientLogo ? (
            <div
              className="flex items-center justify-start"
              style={{ height: logoHeight, width: logoWidth }}
            >
              <Image
                src={`/client-logos/${study.clientLogo}`}
                alt={study.clientName}
                width={Math.round(logoWidth)}
                height={Math.round(logoHeight)}
                loading="lazy"
                decoding="async"
                unoptimized
                className="h-full w-full object-contain object-left brightness-0 invert"
              />
            </div>
          ) : (
            <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-md border border-white/25 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
              <span className="truncate text-[10px] font-bold uppercase tracking-[0.14em] text-white sm:text-[11px]">
                {primaryLine}
                {secondaryLine ? ` ${secondaryLine}` : ""}
              </span>
            </div>
          )}
        </div>

        <div>
          <p className="max-w-[280px] text-sm leading-snug text-white/90 sm:text-[15px]">
            {study.highlightLabel}
          </p>

          {config.tags && config.tags.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {config.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-[#f7f7f5] px-3 py-1 text-[11px] font-semibold text-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </button>
  );
}

const FEATURED_BENTO_LAYOUT: BentoItemConfig[] = BENTO_LAYOUT.slice(0, 3);

interface WhatWeDoBentoGridProps {
  caseStudies: CaseStudy[];
  layout?: "full" | "featured";
}

export function WhatWeDoBentoGrid({
  caseStudies,
  layout = "full",
}: WhatWeDoBentoGridProps): React.ReactElement {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const activeLayout = layout === "featured" ? FEATURED_BENTO_LAYOUT : BENTO_LAYOUT;

  const bentoStudies = activeLayout.map((config) => ({
    config,
    study: caseStudies.find((item) => item.id === config.id),
  })).filter(
    (
      item,
    ): item is { config: BentoItemConfig; study: CaseStudy } =>
      item.study !== undefined,
  );

  return (
    <>
      <motion.div
        className={`mt-16 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:gap-4 ${
          layout === "featured" ? "md:grid-rows-2" : "md:grid-rows-4"
        }`}
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.06 }}
        variants={prefersReducedMotion ? undefined : GRID_VARIANTS}
      >
        {bentoStudies.map(({ config, study }) => {
          const card = (
            <BentoCard
              study={study}
              config={config}
              onClick={() => setActiveStudy(study)}
            />
          );

          if (prefersReducedMotion) {
            return (
              <div key={study.id} className={config.gridClass}>
                {card}
              </div>
            );
          }

          return (
            <motion.div
              key={study.id}
              className={config.gridClass}
              variants={CARD_VARIANTS}
            >
              {card}
            </motion.div>
          );
        })}
      </motion.div>

      <CaseStudyModalLayer
        study={activeStudy}
        onClose={() => setActiveStudy(null)}
      />
    </>
  );
}

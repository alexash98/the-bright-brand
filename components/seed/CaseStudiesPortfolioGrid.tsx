'use client';

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { CaseStudyModalLayer } from "@/components/seed/CaseStudyModal";
import { CaseStudy } from "@/lib/seed-types";

type CaseStudyFilter = "All" | CaseStudy["category"];

const FILTERS: CaseStudyFilter[] = ["All", "Organic", "PR", "Paid", "Social"];

const CATEGORY_SERVICE_LINKS: Record<CaseStudy["category"], string> = {
  Organic: "/services/seo",
  PR: "/services/digital-pr",
  Paid: "/services/ppc",
  Social: "/services/social",
};

function getResultLine(study: CaseStudy): string {
  if (study.category === "PR") {
    const tagline = study.tagline.split(".")[0]?.trim() ?? study.tagline;
    return tagline.charAt(0).toUpperCase() + tagline.slice(1);
  }

  const label = study.highlightLabel
    .replace(/\s+(improvement|rise)$/i, "")
    .replace(/\s+growth$/i, " growth")
    .replace(/year on year/i, "YoY")
    .replace(/YoY improvement/i, "YoY")
    .trim();

  return `${study.highlightStat} ${label}`.replace(/\s+/g, " ").trim();
}

function PortfolioCard({
  study,
  onSelect,
}: {
  study: CaseStudy;
  onSelect: () => void;
}): React.ReactElement {
  const serviceHref = CATEGORY_SERVICE_LINKS[study.category];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      className="group text-left"
    >
      <button
        type="button"
        onClick={onSelect}
        className="w-full text-left"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-neutral-200 transition duration-300 group-hover:ring-neutral-300">
          {study.imageUrl ? (
            <Image
              src={study.imageUrl}
              alt={study.clientName}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <Briefcase className="h-8 w-8 text-neutral-300" />
            </div>
          )}
        </div>
      </button>

      <div className="mt-4">
        <div className="mb-2.5 flex flex-wrap gap-2">
          <Link
            href={serviceHref}
            onClick={(event) => event.stopPropagation()}
            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-100"
          >
            {study.category}
          </Link>
        </div>

        <button
          type="button"
          onClick={onSelect}
          className="w-full text-left"
        >
          <h3 className="text-lg font-semibold tracking-tight text-neutral-900 transition-colors group-hover:text-brand-accent md:text-xl">
            {study.clientName}
          </h3>
          <p className="mt-1.5 text-sm font-medium leading-snug text-brand-accent md:text-[15px]">
            {getResultLine(study)}
          </p>
        </button>
      </div>
    </motion.article>
  );
}

interface CaseStudiesPortfolioGridProps {
  caseStudies: CaseStudy[];
}

export function CaseStudiesPortfolioGrid({
  caseStudies,
}: CaseStudiesPortfolioGridProps): React.ReactElement {
  const [filter, setFilter] = useState<CaseStudyFilter>("All");
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  const counts = useMemo(() => {
    const totals: Record<CaseStudyFilter, number> = {
      All: caseStudies.length,
      Organic: 0,
      PR: 0,
      Paid: 0,
      Social: 0,
    };

    for (const study of caseStudies) {
      totals[study.category] += 1;
    }

    return totals;
  }, [caseStudies]);

  const filteredStudies =
    filter === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === filter);

  return (
    <section className="relative bg-white pb-20 pt-16 text-neutral-900 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 flex flex-wrap gap-2 md:mb-12">
          {FILTERS.map((item) => {
            const isActive = filter === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 md:px-5 md:py-2.5 ${
                  isActive
                    ? "bg-brand-accent text-brand-bg-darker shadow-md shadow-brand-accent/20"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
                }`}
              >
                {item} · {counts[item]}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <PortfolioCard
                key={study.id}
                study={study}
                onSelect={() => setActiveStudy(study)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <CaseStudyModalLayer
        study={activeStudy}
        onClose={() => setActiveStudy(null)}
      />
    </section>
  );
}

'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroCaseStudyTicker } from "@/components/seed/HeroCaseStudyTicker";
import { HeroLogoTicker } from "@/components/seed/HeroLogoTicker";
import { useScrollToSection } from "@/components/seed/SmoothScrollProvider";
import { CaseStudy, ClientLogo } from "@/lib/seed-types";

interface HeroProps {
  rotatingWords: string[];
  description: string;
  caseStudies: CaseStudy[];
  clientLogos: ClientLogo[];
}

export const Hero: React.FC<HeroProps> = ({
  rotatingWords,
  description,
  caseStudies,
  clientLogos,
}) => {
  const [index, setIndex] = useState(0);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [rotatingWords]);

  const handleScrollTo = (id: string) => {
    scrollToSection(id);
  };

  return (
    <section
      id="hero"
      className="relative flex h-auto flex-col overflow-hidden bg-brand-bg-darker pt-20 lg:h-dvh lg:max-h-dvh"
    >
      <div className="relative flex min-h-0 flex-1 overflow-hidden">
        <div className="relative z-10 mx-auto grid h-full min-h-0 w-full max-w-7xl grid-cols-1 gap-12 overflow-hidden px-4 py-8 md:px-8 lg:grid-cols-12 lg:items-stretch lg:gap-0 lg:py-0">
        {/* Main Text Copy Column */}
        <div className="flex min-h-0 flex-col items-start justify-center py-4 text-left lg:col-span-6 lg:py-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-bg px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-accent shadow-sm lg:mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-accent animate-pulse" />
            Performance Marketing Agency
          </motion.div>

          <h1 className="mb-6 text-[32px] font-semibold leading-[1.2] tracking-tight text-white sm:text-5xl md:text-6xl lg:mb-7 lg:text-[3.25rem] lg:leading-[1.22] xl:text-6xl">
            <span className="block">Your Most</span>
            <span className="relative block h-[1.2em] text-brand-accent">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[index]}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 16 }}
                  className="absolute left-0 top-0 block font-semibold tracking-tight drop-shadow-[0_2px_10px_rgba(232,184,75,0.2)] whitespace-nowrap"
                >
                  {rotatingWords[index]}
                </motion.span>
              </AnimatePresence>
              <span
                className="invisible block font-semibold tracking-tight whitespace-nowrap"
                aria-hidden="true"
              >
                Growth-Obsessed
              </span>
            </span>
            <span className="block">Growth Partner.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-7 max-w-xl text-lg leading-relaxed text-brand-text-pale/85 md:text-xl lg:mb-8 xl:text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4 lg:gap-3"
          >
            <button
              onClick={() => handleScrollTo("enquire")}
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-accent px-7 text-sm font-bold text-brand-bg-darker shadow-lg shadow-brand-accent/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-accent-hover active:translate-y-0 lg:h-10 lg:px-6"
            >
              Arrange a 15-minute intro
              <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => handleScrollTo("services")}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-brand-accent/20 bg-brand-bg px-7 text-sm font-bold text-white transition-all hover:border-brand-accent/40 hover:bg-brand-bg-card lg:h-10 lg:px-6"
            >
              See what we do
            </button>
          </motion.div>

          {/* Partner Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-7 flex w-full flex-wrap gap-2 lg:mt-8 lg:gap-3"
          >
            {[
              {
                name: "Google",
                icon: (
                  <svg
                    className="h-6 w-6 shrink-0 text-brand-text-pale/75"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                ),
              },
              {
                name: "Microsoft",
                icon: (
                  <div
                    className="grid h-6 w-6 shrink-0 grid-cols-2 gap-0.5"
                    aria-hidden="true"
                  >
                    <div className="rounded-sm bg-brand-text-pale/75" />
                    <div className="rounded-sm bg-brand-text-pale/75" />
                    <div className="rounded-sm bg-brand-text-pale/75" />
                    <div className="rounded-sm bg-brand-text-pale/75" />
                  </div>
                ),
              },
              {
                name: "Meta",
                icon: (
                  <svg
                    className="h-6 w-6 shrink-0 text-brand-text-pale/75"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M16.51 6c-1.58 0-3.1.84-4.51 2.52C10.59 6.84 9.07 6 7.49 6 3.91 6 1 8.91 1 12.5S3.91 19 7.49 19c1.58 0 3.1-.84 4.51-2.52 1.41 1.68 2.93 2.52 4.51 2.52 3.58 0 6.49-2.91 6.49-6.5S20.09 6 16.51 6zm-9.02 10.8c-2.37 0-4.29-1.92-4.29-4.3s1.92-4.3 4.29-4.3c1.17 0 2.27.61 3.12 1.71-1.39 1.83-2.33 3.32-3.12 6.89zm9.02 0c-.79 0-1.73-1.49-3.12-6.89.85-1.1 1.95-1.71 3.12-1.71 2.37 0 4.29 1.92 4.29 4.3s-1.92 4.3-4.29 4.3z"
                    />
                  </svg>
                ),
              },
            ].map((partner) => (
              <div
                key={partner.name}
                className="flex h-12 w-36 items-center gap-2.5 rounded-xl border border-white/10 bg-[#232327] px-3.5 shadow-lg transition-colors hover:bg-[#2a2a2e] lg:h-11 lg:w-32"
              >
                {partner.icon}
                <div className="flex min-w-0 flex-col justify-center">
                  <span className="truncate text-xs font-semibold leading-tight text-brand-text-pale/85">
                    {partner.name}
                  </span>
                  <span className="text-[10px] font-medium uppercase leading-tight tracking-wide text-brand-text-pale/50">
                    Partner
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Case study scroller — full height to bottom ticker */}
        <div className="relative hidden min-h-0 lg:col-span-6 lg:flex lg:pl-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full min-h-0 w-full"
          >
            <HeroCaseStudyTicker items={caseStudies} />
          </motion.div>
        </div>
      </div>
      </div>

      <HeroLogoTicker logos={clientLogos} />
    </section>
  );
};

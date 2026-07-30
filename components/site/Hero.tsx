'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroCaseStudyTicker } from "@/components/site/HeroCaseStudyTicker";
import { HeroLogoTicker } from "@/components/site/HeroLogoTicker";
import { PartnerBadges } from "@/components/site/PartnerBadges";
import { SectionIntro } from "@/components/site/SectionIntro";
import { useScrollToSection } from "@/components/site/SmoothScrollProvider";
import { CaseStudy, ClientLogo } from "@/lib/site-types";

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
        <div className="flex min-h-0 flex-col items-start justify-center py-4 text-left lg:col-span-6 lg:py-6">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-bg px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-accent shadow-sm lg:mb-6">
            <Sparkles className="h-3.5 w-3.5 text-brand-accent animate-pulse" />
            Performance Marketing Agency
          </div>

          {/* No opacity fade on LCP text; Motion initial opacity:0 was delaying LCP */}
          <SectionIntro>
            <h1 className="mb-6 text-[33px] font-semibold leading-[1.2] tracking-tight text-white sm:text-[2.875rem] md:text-[3.75rem] lg:mb-7 lg:text-[3.5rem] lg:leading-[1.22] xl:text-[3.875rem]">
              <span className="block">We help you win on</span>
              <span className="relative block h-[1.2em] text-brand-accent">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[index]}
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -16, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 140, damping: 18 }}
                    className="absolute left-0 top-0 block font-semibold tracking-tight drop-shadow-[0_2px_10px_rgba(232,184,75,0.2)] whitespace-nowrap"
                  >
                    {rotatingWords[index]}.
                  </motion.span>
                </AnimatePresence>
                <span
                  className="invisible block font-semibold tracking-tight whitespace-nowrap"
                  aria-hidden="true"
                >
                  lead generation.
                </span>
              </span>
            </h1>

            <p className="mb-7 max-w-xl text-lg leading-relaxed text-brand-text-pale/90 md:text-xl lg:mb-8 xl:text-lg">
              {description}
            </p>
          </SectionIntro>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4 lg:gap-3">
            <button
              type="button"
              onClick={() => handleScrollTo("enquire")}
              className="group inline-flex h-11 min-h-11 items-center justify-center gap-2 rounded-full bg-brand-accent px-7 text-sm font-bold text-brand-bg-darker shadow-lg shadow-brand-accent/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-accent-hover active:translate-y-0 lg:h-11 lg:px-6"
            >
              Arrange a 15-minute intro
              <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </button>
            <Link
              href="/services"
              className="inline-flex h-11 min-h-11 items-center justify-center gap-2 rounded-full border border-brand-accent/20 bg-brand-bg px-7 text-sm font-bold text-white transition-all hover:border-brand-accent/40 hover:bg-brand-bg-card lg:h-11 lg:px-6"
            >
              See what we do
            </Link>
          </div>

          <PartnerBadges className="mt-7 lg:mt-8" />
        </div>

        <div className="relative hidden min-h-0 lg:col-span-6 lg:flex lg:pl-6">
          <div className="h-full min-h-0 w-full">
            <HeroCaseStudyTicker items={caseStudies} />
          </div>
        </div>
      </div>
      </div>

      <HeroLogoTicker logos={clientLogos} />
    </section>
  );
};

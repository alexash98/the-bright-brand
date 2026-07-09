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
            <span className="block">Win on</span>
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
                  {rotatingWords[index]}.
                </motion.span>
              </AnimatePresence>
              <span
                className="invisible block font-semibold tracking-tight whitespace-nowrap"
                aria-hidden="true"
              >
                revenue.
              </span>
            </span>
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
                  <svg
                    className="h-5 w-5 shrink-0 text-brand-text-pale/75"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M0 0v11.408h11.408V0zm12.594 0v11.408H24V0zM0 12.594V24h11.408V12.594zm12.594 0V24H24V12.594z"
                    />
                  </svg>
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
                      d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
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

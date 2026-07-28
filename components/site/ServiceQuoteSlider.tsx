"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  QuoteLocation,
  ServiceHighlightQuote,
} from "@/lib/site-types";
import { QuotePartnerLogoTicker } from "@/components/site/QuotePartnerLogoTicker";
import { QuoteHighlightFooter } from "@/components/site/QuoteHighlightFooter";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

interface ServiceQuoteSliderProps {
  quotes: ServiceHighlightQuote[];
  /** Override auto-advance interval. Defaults to 3000ms. */
  autoAdvanceMs?: number;
  /** Crossfade / slide duration in seconds. Defaults to 0.4. */
  transitionDuration?: number;
}

const LOCATION_LABEL: Record<QuoteLocation, string> = {
  UK: "United Kingdom",
  US: "United States",
};

const DEFAULT_AUTO_ADVANCE_MS = 3000;

export function ServiceQuoteSlider({
  quotes,
  autoAdvanceMs = DEFAULT_AUTO_ADVANCE_MS,
  transitionDuration = 0.4,
}: ServiceQuoteSliderProps): React.ReactElement {
  const rootRef = useRef<HTMLElement | null>(null);
  const wasInViewRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = Boolean(entry?.isIntersecting);
        // Only reset when first entering view, not on every observer tick.
        if (visible && !wasInViewRef.current) {
          setActiveIndex(0);
        }
        wasInViewRef.current = visible;
        setIsInView(visible);
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (
      quotes.length <= 1 ||
      !isInView ||
      isPaused ||
      prefersReducedMotion
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % quotes.length);
    }, autoAdvanceMs);

    return () => window.clearInterval(timer);
  }, [quotes.length, isInView, isPaused, prefersReducedMotion, autoAdvanceMs]);

  const activeQuote = quotes[activeIndex];

  if (!activeQuote) {
    return <></>;
  }

  return (
    <aside
      ref={rootRef}
      className="flex min-h-[280px] flex-col justify-center lg:pl-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeQuote.id}
          initial={
            prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 28 }
          }
          animate={{ opacity: 1, x: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -28 }}
          transition={{ duration: transitionDuration, ease: "easeOut" }}
        >
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="inline-flex rounded-full border border-neutral-200 bg-[#f7f7f5] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-neutral-800">
              {activeQuote.company}
            </span>
            {activeQuote.location ? (
              <span
                className="inline-flex shrink-0 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-accent-dark"
                title={LOCATION_LABEL[activeQuote.location]}
                aria-label={LOCATION_LABEL[activeQuote.location]}
              >
                {activeQuote.location}
              </span>
            ) : null}
          </div>

          <blockquote className="min-h-[8.5rem] text-[0.9rem] leading-relaxed text-neutral-700 md:min-h-[9.5rem] md:text-base lg:min-h-[10rem] lg:text-[1.08rem] lg:leading-relaxed">
            &ldquo;{activeQuote.quote}&rdquo;
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <Image
              src={activeQuote.imageSrc}
              alt={activeQuote.imageAlt}
              width={48}
              height={48}
              loading="lazy"
              decoding="async"
              unoptimized
              className="h-12 w-12 shrink-0 rounded-full object-cover"
            />
            <div>
              {activeQuote.author ? (
                <>
                  <p className="font-semibold text-neutral-900">
                    {activeQuote.author}
                  </p>
                  {activeQuote.role ? (
                    <p className="text-sm text-neutral-600">
                      {activeQuote.role}
                    </p>
                  ) : null}
                </>
              ) : (
                <p className="font-semibold text-neutral-900">
                  {activeQuote.company}
                </p>
              )}
            </div>
          </div>

          {activeQuote.partnerLogos?.length || activeQuote.highlight ? (
            <div className="mt-5 border-t border-neutral-100 pt-4">
              {activeQuote.partnerLogos?.length ? (
                <>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    {activeQuote.partnerLogosLabel ?? "Trusted by"}
                  </p>
                  <QuotePartnerLogoTicker
                    logos={activeQuote.partnerLogos}
                    ariaLabel={activeQuote.partnerLogosLabel ?? "Trusted by"}
                  />
                </>
              ) : null}

              {activeQuote.highlight ? (
                <div
                  className={
                    activeQuote.partnerLogos?.length
                      ? "border-t border-neutral-100"
                      : undefined
                  }
                >
                  <QuoteHighlightFooter highlight={activeQuote.highlight} />
                </div>
              ) : null}
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>

      {quotes.length > 1 ? (
        <div
          className="mt-6 flex items-center gap-2"
          role="tablist"
          aria-label="Client quotes"
        >
          {quotes.map((quote, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={quote.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show quote from ${quote.company}`}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "h-2 w-8 bg-neutral-800"
                    : "h-2 w-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            );
          })}
        </div>
      ) : null}
    </aside>
  );
}

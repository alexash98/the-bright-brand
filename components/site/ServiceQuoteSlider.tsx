"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
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
  /** Kept for API compatibility; crossfade is CSS opacity. */
  transitionDuration?: number;
}

const LOCATION_LABEL: Record<QuoteLocation, string> = {
  UK: "United Kingdom",
  US: "United States",
};

const DEFAULT_AUTO_ADVANCE_MS = 4500;

function QuoteSlide({
  quote,
}: {
  quote: ServiceHighlightQuote;
}): React.ReactElement {
  return (
    <>
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full border border-neutral-200 bg-[#f7f7f5] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-neutral-800">
          {quote.company}
        </span>
        {quote.location ? (
          <span
            className="inline-flex shrink-0 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-accent-dark"
            title={LOCATION_LABEL[quote.location]}
            aria-label={LOCATION_LABEL[quote.location]}
          >
            {quote.location}
          </span>
        ) : null}
      </div>

      <blockquote className="text-[0.9rem] leading-relaxed text-neutral-700 md:text-base lg:text-[1.08rem] lg:leading-relaxed">
        &ldquo;{quote.quote}&rdquo;
      </blockquote>

      <div className="mt-8 flex items-center gap-4">
        <Image
          src={quote.imageSrc}
          alt={quote.imageAlt}
          width={48}
          height={48}
          loading="lazy"
          decoding="async"
          unoptimized
          className="h-12 w-12 shrink-0 rounded-full object-cover"
        />
        <div>
          {quote.author ? (
            <>
              <p className="font-semibold text-neutral-900">{quote.author}</p>
              {quote.role ? (
                <p className="text-sm text-neutral-600">{quote.role}</p>
              ) : null}
            </>
          ) : (
            <p className="font-semibold text-neutral-900">{quote.company}</p>
          )}
        </div>
      </div>

      {/* Shared footer footprint so every slide's "Featured in" row matches. */}
      <div className="mt-5 min-h-[7.5rem] border-t border-neutral-100 pt-4 sm:min-h-[8rem]">
        {quote.partnerLogos?.length ? (
          <>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
              {quote.partnerLogosLabel ?? "Featured in"}
            </p>
            <QuotePartnerLogoTicker
              logos={quote.partnerLogos}
              ariaLabel={quote.partnerLogosLabel ?? "Featured in"}
            />
          </>
        ) : null}

        {quote.highlight ? (
          <div
            className={
              quote.partnerLogos?.length
                ? "border-t border-neutral-100"
                : undefined
            }
          >
            <QuoteHighlightFooter highlight={quote.highlight} />
          </div>
        ) : null}
      </div>
    </>
  );
}

export function ServiceQuoteSlider({
  quotes,
  autoAdvanceMs = DEFAULT_AUTO_ADVANCE_MS,
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

  if (quotes.length === 0) {
    return <></>;
  }

  return (
    <aside
      ref={rootRef}
      className="flex flex-col justify-center lg:pl-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      {/*
        Grid stack: every slide sits in the same cell, so the panel height
        is always the tallest quote. Crossfade opacity keeps the page still.
      */}
      <div className="grid">
        {quotes.map((quote, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={quote.id}
              className={`col-start-1 row-start-1 transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
                isActive
                  ? "relative z-10 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              <QuoteSlide quote={quote} />
            </div>
          );
        })}
      </div>

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
                className={`rounded-full transition-all duration-500 ease-in-out ${
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

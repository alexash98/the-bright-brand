"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  QuoteLocation,
  ServiceHighlightQuote,
} from "@/lib/site-types";
import { QuotePartnerLogoTicker } from "@/components/site/QuotePartnerLogoTicker";
import { QuoteHighlightFooter } from "@/components/site/QuoteHighlightFooter";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

interface ServiceQuoteSliderProps {
  quotes: ServiceHighlightQuote[];
  /** Override auto-advance interval. Defaults to 4500ms. */
  autoAdvanceMs?: number;
  /** Kept for API compatibility. */
  transitionDuration?: number;
}

const LOCATION_LABEL: Record<QuoteLocation, string> = {
  UK: "United Kingdom",
  US: "United States",
};

const DEFAULT_AUTO_ADVANCE_MS = 4500;

type Direction = 1 | -1;

const slideVariants = {
  enter: (direction: Direction) => ({
    x: direction > 0 ? 36 : -36,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: Direction) => ({
    x: direction > 0 ? -36 : 36,
    opacity: 0,
  }),
};

/**
 * Fixed vertical rhythm matching Britton & Time:
 * badge → quote (flex grow) → avatar/name/role → Featured in → logos.
 */
function QuoteSlide({
  quote,
}: {
  quote: ServiceHighlightQuote;
}): React.ReactElement {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="mb-5 flex shrink-0 items-center justify-between gap-3">
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

      <blockquote className="min-h-0 flex-1 text-[0.9rem] leading-relaxed text-neutral-700 md:text-base lg:text-[1.08rem] lg:leading-relaxed">
        &ldquo;{quote.quote}&rdquo;
      </blockquote>

      <div className="mt-8 shrink-0">
        <div className="flex h-12 items-center gap-4">
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
          <div className="min-w-0">
            <p className="truncate font-semibold leading-tight text-neutral-900">
              {quote.author ?? quote.company}
            </p>
            <p className="mt-0.5 truncate text-sm leading-tight text-neutral-600">
              {quote.role ?? "\u00a0"}
            </p>
          </div>
        </div>

        <div className="mt-5 border-t border-neutral-100 pt-4">
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
      </div>
    </div>
  );
}

function NavArrow({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 transition-colors duration-200 hover:border-brand-accent/40 hover:bg-brand-accent/10 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50"
    >
      {children}
    </button>
  );
}

export function ServiceQuoteSlider({
  quotes,
  autoAdvanceMs = DEFAULT_AUTO_ADVANCE_MS,
}: ServiceQuoteSliderProps): React.ReactElement {
  const rootRef = useRef<HTMLElement | null>(null);
  const wasInViewRef = useRef(false);
  const [[activeIndex, direction], setSlide] = useState<[number, Direction]>([
    0, 1,
  ]);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const paginate = useCallback(
    (step: Direction) => {
      if (quotes.length <= 1) return;
      setSlide(([current]) => {
        const next = (current + step + quotes.length) % quotes.length;
        return [next, step];
      });
    },
    [quotes.length],
  );

  const goToSlide = useCallback(
    (index: number) => {
      setSlide(([current]) => {
        if (index === current) return [current, 1];
        const forward =
          (index - current + quotes.length) % quotes.length <=
          quotes.length / 2;
        return [index, forward ? 1 : -1];
      });
    },
    [quotes.length],
  );

  useEffect(() => {
    const node = rootRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = Boolean(entry?.isIntersecting);
        if (visible && !wasInViewRef.current) {
          setSlide([0, 1]);
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
      paginate(1);
    }, autoAdvanceMs);

    return () => window.clearInterval(timer);
  }, [
    quotes.length,
    isInView,
    isPaused,
    prefersReducedMotion,
    autoAdvanceMs,
    paginate,
  ]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || quotes.length <= 1) return;

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        paginate(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        paginate(1);
      }
    };

    node.addEventListener("keydown", onKeyDown);
    return () => node.removeEventListener("keydown", onKeyDown);
  }, [paginate, quotes.length]);

  const activeQuote = quotes[activeIndex];

  if (!activeQuote) {
    return <></>;
  }

  return (
    <aside
      ref={rootRef}
      tabIndex={0}
      className="flex flex-col justify-center outline-none lg:pl-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="relative">
        {/* Invisible stack sets a stable height from the tallest quote. */}
        <div className="grid invisible pb-2" aria-hidden>
          {quotes.map((quote) => (
            <div key={`sizer-${quote.id}`} className="col-start-1 row-start-1">
              <QuoteSlide quote={quote} />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={activeQuote.id}
              custom={direction}
              variants={slideVariants}
              initial={prefersReducedMotion ? false : "enter"}
              animate="center"
              exit={prefersReducedMotion ? undefined : "exit"}
              transition={{
                duration: prefersReducedMotion ? 0.2 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              <QuoteSlide quote={activeQuote} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {quotes.length > 1 ? (
        <div className="mt-6 flex items-center justify-between gap-4">
          <NavArrow label="Previous review" onClick={() => paginate(-1)}>
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </NavArrow>

          <div
            className="flex items-center gap-2"
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

          <NavArrow label="Next review" onClick={() => paginate(1)}>
            <ChevronRight className="h-5 w-5" aria-hidden />
          </NavArrow>
        </div>
      ) : null}
    </aside>
  );
}

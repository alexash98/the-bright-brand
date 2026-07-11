'use client';

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ServiceHighlightQuote } from "@/lib/seed-types";

interface ServiceQuoteSliderProps {
  quotes: ServiceHighlightQuote[];
}

const AUTO_ADVANCE_MS = 6000;

export function ServiceQuoteSlider({
  quotes,
}: ServiceQuoteSliderProps): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (quotes.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % quotes.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [quotes.length]);

  const activeQuote = quotes[activeIndex];

  if (!activeQuote) {
    return <></>;
  }

  return (
    <aside className="flex min-h-[280px] flex-col justify-center lg:pl-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeQuote.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <span className="mb-5 inline-flex rounded-full border border-neutral-200 bg-[#f7f7f5] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-neutral-800">
            {activeQuote.company}
          </span>
          <blockquote className="text-[0.9rem] leading-relaxed text-neutral-700 md:text-base lg:text-[1.08rem] lg:leading-relaxed">
            &ldquo;{activeQuote.quote}&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <Image
              src={activeQuote.imageSrc}
              alt={activeQuote.imageAlt}
              width={48}
              height={48}
              loading="lazy"
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
        </motion.div>
      </AnimatePresence>

      {quotes.length > 1 ? (
        <div
          className="mt-10 flex items-center gap-2"
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

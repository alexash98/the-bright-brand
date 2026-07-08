'use client';

import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { CaseStudy } from "@/lib/seed-types";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

interface HeroCaseStudyTickerProps {
  items: CaseStudy[];
}

const CARD_HEIGHT = "h-[248px]";
const COPY_GAP_PX = 14;
const LOGO_WIDTH_PX = 120;
const LOGO_HEIGHT_PX = 28;
const SCROLL_DURATION_LEFT = 58;
const SCROLL_DURATION_RIGHT = 66;

function CaseStudyCard({ study }: { study: CaseStudy }): React.ReactElement {
  const logoLines = study.clientName.split(" ");
  const primaryLine = logoLines[0] ?? study.clientName;
  const secondaryLine = logoLines.slice(1).join(" ");

  return (
    <div
      className={`relative w-full shrink-0 overflow-hidden rounded-[16px] shadow-[0_10px_32px_rgba(0,0,0,0.24)] ${CARD_HEIGHT}`}
    >
      <Image
        src={study.imageUrl}
        alt=""
        fill
        sizes="(max-width: 1024px) 42vw, 280px"
        quality={70}
        loading="lazy"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />

      <div className="absolute inset-0 flex flex-col items-center justify-between px-5 py-6 text-center">
        <div
          className="flex items-center justify-center"
          style={{ width: LOGO_WIDTH_PX, height: LOGO_HEIGHT_PX }}
        >
          {study.clientLogo ? (
            <Image
              src={`/client-logos/${study.clientLogo}`}
              alt={study.clientName}
              width={LOGO_WIDTH_PX}
              height={LOGO_HEIGHT_PX}
              className="h-full w-full object-contain object-center brightness-0 invert"
            />
          ) : (
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                {primaryLine}
              </p>
              {secondaryLine ? (
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/80">
                  {secondaryLine}
                </p>
              ) : null}
            </div>
          )}
        </div>

        <p className="text-[2rem] font-black leading-none tracking-tight text-brand-accent xl:text-[2.25rem]">
          {study.highlightStat}
        </p>

        <p className="max-w-[220px] text-[13px] font-normal leading-snug text-white/95">
          {study.highlightLabel}
        </p>
      </div>
    </div>
  );
}

function CaseStudyCopy({
  items,
  copyRef,
  ariaHidden = false,
}: {
  items: CaseStudy[];
  copyRef?: React.RefObject<HTMLDivElement | null>;
  ariaHidden?: boolean;
}): React.ReactElement {
  return (
    <div
      ref={copyRef}
      aria-hidden={ariaHidden || undefined}
      className="flex flex-col"
      style={{ gap: COPY_GAP_PX }}
    >
      {items.map((study) => (
        <CaseStudyCard key={study.id} study={study} />
      ))}
    </div>
  );
}

function ScrollingColumn({
  items,
  direction,
  duration,
}: {
  items: CaseStudy[];
  direction: "up" | "down";
  duration: number;
}): React.ReactElement {
  const copyRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState<number | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const measure = (): void => {
      if (!copyRef.current) {
        return;
      }

      setScrollDistance(copyRef.current.offsetHeight + COPY_GAP_PX);
    };

    measure();

    const observer = new ResizeObserver(measure);
    if (copyRef.current) {
      observer.observe(copyRef.current);
    }

    return () => observer.disconnect();
  }, [items]);

  if (scrollDistance === null || prefersReducedMotion) {
    return (
      <div className="relative h-full min-h-0 overflow-hidden">
        <CaseStudyCopy items={items} copyRef={copyRef} />
      </div>
    );
  }

  const startY = direction === "down" ? -scrollDistance : 0;

  return (
    <div className="relative h-full min-h-0 overflow-hidden">
      <motion.div
        className="flex flex-col will-change-transform"
        style={{ gap: COPY_GAP_PX }}
        initial={{ y: startY }}
        animate={{
          y:
            direction === "up"
              ? [0, -scrollDistance]
              : [-scrollDistance, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        <CaseStudyCopy items={items} />
        <CaseStudyCopy items={items} ariaHidden />
      </motion.div>
    </div>
  );
}

export function HeroCaseStudyTicker({
  items,
}: HeroCaseStudyTickerProps): React.ReactElement {
  const featured = items;
  const leftColumn = featured.filter((_, index) => index % 2 === 0);
  const rightColumn = featured.filter((_, index) => index % 2 === 1);

  return (
    <div className="relative h-full min-h-0 w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[56px] bg-gradient-to-b from-[#1b1b1f] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[56px] bg-gradient-to-t from-[#232327] to-transparent" />

      <div className="grid h-full min-h-0 grid-cols-2 gap-[14px]">
        <ScrollingColumn
          items={leftColumn}
          direction="up"
          duration={SCROLL_DURATION_LEFT}
        />
        <ScrollingColumn
          items={rightColumn}
          direction="down"
          duration={SCROLL_DURATION_RIGHT}
        />
      </div>
    </div>
  );
}

'use client';

import React, { useLayoutEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { CaseStudy } from "@/lib/seed-types";

interface HeroCaseStudyTickerProps {
  items: CaseStudy[];
}

const CARD_HEIGHTS = ["h-[207px]", "h-[242px]", "h-[224px]", "h-[259px]", "h-[219px]", "h-[247px]"];
const COPY_GAP_PX = 18;

function getCardHeightClass(itemIndex: number): string {
  return CARD_HEIGHTS[itemIndex % CARD_HEIGHTS.length] ?? "h-[276px]";
}

function CaseStudyCard({
  study,
  heightClass,
}: {
  study: CaseStudy;
  heightClass: string;
}): React.ReactElement {
  return (
    <div
      className={`relative w-full shrink-0 overflow-hidden rounded-[18px] ${heightClass}`}
    >
      <img
        src={study.imageUrl}
        alt={study.clientName}
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-[18px] py-[23px] text-center">
        {/* Subheading — client name */}
        <p className="max-w-[230px] text-[11.5px] font-bold uppercase leading-tight tracking-[0.14em] text-white">
          {study.clientName}
        </p>

        {/* Metric — headline stat */}
        <p className="mt-[18px] whitespace-nowrap text-[2.3rem] font-black leading-none tracking-tight text-brand-accent xl:mt-[23px] xl:text-[3.15rem]">
          {study.highlightStat}
        </p>

        {/* Section — supporting result line */}
        <p className="mt-[14px] max-w-[242px] text-[16px] font-normal leading-snug text-white/90 xl:mt-[18px]">
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
      className="flex flex-col gap-[18px]"
    >
      {items.map((study, itemIndex) => (
        <CaseStudyCard
          key={study.id}
          study={study}
          heightClass={getCardHeightClass(itemIndex)}
        />
      ))}
    </div>
  );
}

function ScrollingColumn({
  items,
  direction,
}: {
  items: CaseStudy[];
  direction: "up" | "down";
}): React.ReactElement {
  const copyRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState<number | null>(null);

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

  if (scrollDistance === null) {
    return (
      <div className="relative h-full min-h-0 overflow-hidden">
        <div className="flex flex-col gap-[18px]">
          <CaseStudyCopy items={items} copyRef={copyRef} />
        </div>
      </div>
    );
  }

  const startY = direction === "down" ? -scrollDistance : 0;

  return (
    <div className="relative h-full min-h-0 overflow-hidden">
      <motion.div
        className="flex flex-col gap-[18px]"
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
            duration: 28,
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
  const featured = items.slice(0, 8);
  const leftColumn = featured.filter((_, index) => index % 2 === 0);
  const rightColumn = featured.filter((_, index) => index % 2 === 1);

  return (
    <div className="relative h-full min-h-0 w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[46px] bg-gradient-to-b from-[#1b1b1f] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[46px] bg-gradient-to-t from-[#232327] to-transparent" />

      <div className="grid h-full min-h-0 grid-cols-2 gap-[14px]">
        <ScrollingColumn items={leftColumn} direction="up" />
        <ScrollingColumn items={rightColumn} direction="down" />
      </div>
    </div>
  );
}

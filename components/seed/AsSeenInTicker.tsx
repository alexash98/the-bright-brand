'use client';

import React, { useLayoutEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { PressPublication } from "@/lib/seed-types";

interface AsSeenInTickerProps {
  publications: PressPublication[];
}

const LOGO_GAP_CLASS = "gap-12 sm:gap-14 lg:gap-16";

function PublicationLogo({
  publication,
}: {
  publication: PressPublication;
}): React.ReactElement {
  return (
    <div className="flex h-8 w-[140px] shrink-0 items-center justify-center sm:h-9 sm:w-[160px]">
      <img
        src={`/press-logos/${publication.logo}`}
        alt={publication.name}
        className="max-h-8 max-w-[140px] object-contain opacity-85 sm:max-h-9 sm:max-w-[160px]"
      />
    </div>
  );
}

function PublicationSegment({
  publications,
  segmentRef,
  segmentKey,
  ariaHidden = false,
}: {
  publications: PressPublication[];
  segmentRef?: React.RefObject<HTMLDivElement | null>;
  segmentKey: string;
  ariaHidden?: boolean;
}): React.ReactElement {
  return (
    <div
      ref={segmentRef}
      aria-hidden={ariaHidden || undefined}
      className={`flex shrink-0 items-center ${LOGO_GAP_CLASS}`}
    >
      {publications.map((publication) => (
        <PublicationLogo
          key={`${segmentKey}-${publication.id}`}
          publication={publication}
        />
      ))}
    </div>
  );
}

function ScrollingTrack({
  publications,
}: {
  publications: PressPublication[];
}): React.ReactElement {
  const segmentRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState<number | null>(null);

  useLayoutEffect(() => {
    const measure = (): void => {
      if (!segmentRef.current?.parentElement) {
        return;
      }

      const segmentWidth = segmentRef.current.offsetWidth;
      const parentStyles = window.getComputedStyle(segmentRef.current.parentElement);
      const trackGap = Number.parseFloat(parentStyles.columnGap || parentStyles.gap || "0");

      setScrollDistance(segmentWidth + trackGap);
    };

    measure();

    const observer = new ResizeObserver(measure);
    if (segmentRef.current) {
      observer.observe(segmentRef.current);
    }

    return () => observer.disconnect();
  }, [publications]);

  if (scrollDistance === null) {
    return (
      <div className={`flex ${LOGO_GAP_CLASS}`}>
        <PublicationSegment
          publications={publications}
          segmentKey="measure"
          segmentRef={segmentRef}
        />
      </div>
    );
  }

  return (
    <motion.div
      className={`flex ${LOGO_GAP_CLASS}`}
      initial={{ x: 0 }}
      animate={{ x: [0, -scrollDistance] }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 55,
          ease: "linear",
        },
      }}
    >
      <PublicationSegment
        publications={publications}
        segmentKey="a"
        segmentRef={segmentRef}
      />
      <PublicationSegment publications={publications} segmentKey="b" ariaHidden />
      <PublicationSegment publications={publications} segmentKey="c" ariaHidden />
    </motion.div>
  );
}

export function AsSeenInTicker({
  publications,
}: AsSeenInTickerProps): React.ReactElement {
  return (
    <div className="relative mt-16 overflow-hidden bg-white py-10 sm:py-12">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <ScrollingTrack publications={publications} />
      </div>
    </div>
  );
}

'use client';

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { PressPublication } from "@/lib/seed-types";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

interface AsSeenInTickerProps {
  publications: PressPublication[];
}

interface TiledPublication extends PressPublication {
  tileKey: string;
}

const LOGO_GAP_CLASS = "gap-10 sm:gap-11 lg:gap-12";
const MIN_TILE_ROUNDS = 6;
const LOGO_BOX_CLASS = "h-[25.6px] w-[112px] sm:h-[28.8px] sm:w-[128px]";
const LOGO_IMAGE_CLASS =
  "max-h-[25.6px] max-w-[112px] object-contain opacity-85 sm:max-h-[28.8px] sm:max-w-[128px]";

function buildTiledPublications(
  publications: PressPublication[],
  rounds: number,
): TiledPublication[] {
  return Array.from({ length: rounds }, (_, round) =>
    publications.map((publication) => ({
      ...publication,
      tileKey: `${publication.id}-${round}`,
    })),
  ).flat();
}

function PublicationLogo({
  publication,
}: {
  publication: TiledPublication;
}): React.ReactElement {
  return (
    <div className={`flex shrink-0 items-center justify-center ${LOGO_BOX_CLASS}`}>
      <Image
        src={`/press-logos/${publication.logo}`}
        alt={publication.name}
        width={128}
        height={29}
        loading="lazy"
        className={LOGO_IMAGE_CLASS}
      />
    </div>
  );
}

function PublicationCopy({
  publications,
  copyRef,
  copyKey,
  ariaHidden = false,
}: {
  publications: TiledPublication[];
  copyRef?: React.RefObject<HTMLDivElement | null>;
  copyKey: string;
  ariaHidden?: boolean;
}): React.ReactElement {
  return (
    <div
      ref={copyRef}
      aria-hidden={ariaHidden || undefined}
      className={`flex shrink-0 items-center ${LOGO_GAP_CLASS}`}
    >
      {publications.map((publication) => (
        <PublicationLogo
          key={`${copyKey}-${publication.tileKey}`}
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
  const containerRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState<number | null>(null);
  const [tileRounds, setTileRounds] = useState(MIN_TILE_ROUNDS);
  const prefersReducedMotion = usePrefersReducedMotion();

  const tiledPublications = useMemo(
    () => buildTiledPublications(publications, tileRounds),
    [publications, tileRounds],
  );

  useLayoutEffect(() => {
    const measure = (): void => {
      if (!copyRef.current?.parentElement || !containerRef.current) {
        return;
      }

      const viewportWidth = containerRef.current.offsetWidth;
      const copyWidth = copyRef.current.offsetWidth;
      const parentStyles = window.getComputedStyle(copyRef.current.parentElement);
      const trackGap = Number.parseFloat(parentStyles.columnGap || parentStyles.gap || "0");

      if (copyWidth > 0 && copyWidth < viewportWidth + 128) {
        const nextRounds = Math.ceil(tileRounds * ((viewportWidth + 128) / copyWidth)) + 1;
        if (nextRounds > tileRounds) {
          setScrollDistance(null);
          setTileRounds(nextRounds);
          return;
        }
      }

      if (copyWidth > 0) {
        setScrollDistance(copyWidth + trackGap);
      }
    };

    measure();

    const observer = new ResizeObserver(measure);
    if (copyRef.current) {
      observer.observe(copyRef.current);
    }
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const images = copyRef.current?.querySelectorAll("img") ?? [];
    images.forEach((image) => {
      if (!image.complete) {
        image.addEventListener("load", measure);
      }
    });

    return () => {
      observer.disconnect();
      images.forEach((image) => {
        image.removeEventListener("load", measure);
      });
    };
  }, [publications, tileRounds, tiledPublications]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <motion.div
        className={`flex w-max ${LOGO_GAP_CLASS}`}
        initial={{ x: 0 }}
        animate={
          scrollDistance && !prefersReducedMotion
            ? { x: [0, -scrollDistance] }
            : { x: 0 }
        }
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: Math.max(50, tiledPublications.length * 3.5),
            ease: "linear",
          },
        }}
      >
        <PublicationCopy
          publications={tiledPublications}
          copyKey="a"
          copyRef={copyRef}
        />
        <PublicationCopy
          publications={tiledPublications}
          copyKey="b"
          ariaHidden
        />
      </motion.div>
    </div>
  );
}

export function AsSeenInTicker({
  publications,
}: AsSeenInTickerProps): React.ReactElement {
  return (
    <div className="relative w-full overflow-hidden border-b border-neutral-200 bg-[#f7f7f5] py-8 sm:py-9">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f7f7f5] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f7f7f5] to-transparent" />

      <ScrollingTrack publications={publications} />
    </div>
  );
}

'use client';

import Image from "next/image";
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { ClientLogo } from "@/lib/seed-types";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

interface ClientLogoMarqueeProps {
  logos: ClientLogo[];
}

interface TiledLogo extends ClientLogo {
  tileKey: string;
}

const LOGO_GAP_CLASS = "gap-12 sm:gap-16 md:gap-20";
const MIN_TILE_ROUNDS = 2;

function buildTiledLogos(logos: ClientLogo[], rounds: number): TiledLogo[] {
  return Array.from({ length: rounds }, (_, round) =>
    logos.map((logo) => ({
      ...logo,
      tileKey: `${logo.seed}-${round}`,
    })),
  ).flat();
}

function LogoItem({ logo }: { logo: TiledLogo }): React.ReactElement {
  const folder = logo.folder ?? "client-logos";

  return (
    <div
      className={`relative shrink-0 opacity-70 transition-opacity duration-300 hover:opacity-100 ${logo.heightClass ?? "h-[1.8rem] sm:h-[2.1rem]"} ${logo.widthClass ?? "w-[8.4rem]"}`}
      style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
    >
      <Image
        src={`/${folder}/${logo.logo}`}
        alt={logo.name}
        fill
        sizes="168px"
        loading="lazy"
        decoding="async"
        unoptimized
        className={`object-contain ${logo.preserveColors ? "" : "brightness-0"}`}
      />
    </div>
  );
}

function LogoCopy({
  logos,
  copyRef,
  copyKey,
  ariaHidden = false,
}: {
  logos: TiledLogo[];
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
      {logos.map((logo) => (
        <LogoItem key={`${copyKey}-${logo.tileKey}`} logo={logo} />
      ))}
    </div>
  );
}

function ScrollingTrack({ logos }: { logos: ClientLogo[] }): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState<number | null>(null);
  const [tileRounds, setTileRounds] = useState(MIN_TILE_ROUNDS);
  const prefersReducedMotion = usePrefersReducedMotion();

  const tiledLogos = useMemo(
    () => buildTiledLogos(logos, tileRounds),
    [logos, tileRounds],
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
  }, [logos, tileRounds, tiledLogos]);

  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className="overflow-x-auto">
        <div className={`flex items-center ${LOGO_GAP_CLASS}`}>
          <LogoCopy logos={tiledLogos} copyKey="static" copyRef={copyRef} />
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <motion.div
        className={`flex w-max ${LOGO_GAP_CLASS}`}
        initial={{ x: 0 }}
        animate={
          scrollDistance ? { x: [0, -scrollDistance] } : { x: 0 }
        }
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: Math.max(55, tiledLogos.length * 2.2),
            ease: "linear",
          },
        }}
      >
        <LogoCopy logos={tiledLogos} copyKey="a" copyRef={copyRef} />
        <LogoCopy logos={tiledLogos} copyKey="b" ariaHidden />
      </motion.div>
    </div>
  );
}

export function ClientLogoMarquee({
  logos,
}: ClientLogoMarqueeProps): React.ReactElement {
  return (
    <div className="overflow-hidden border-y border-neutral-200/80 bg-white py-6 md:py-7">
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />
        <ScrollingTrack logos={logos} />
      </div>
    </div>
  );
}

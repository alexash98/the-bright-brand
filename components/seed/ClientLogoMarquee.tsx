'use client';

import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ClientLogo } from "@/lib/seed-types";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

interface ClientLogoMarqueeProps {
  logos: ClientLogo[];
}

const LOGO_GAP_CLASS = "gap-12 sm:gap-16 md:gap-20";

function LogoItem({ logo }: { logo: ClientLogo }): React.ReactElement {
  return (
    <div
      className="relative h-6 w-24 shrink-0 opacity-70 transition-opacity duration-300 hover:opacity-100 sm:h-7 sm:w-28"
      style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
    >
      <Image
        src={`/client-logos/${logo.logo}`}
        alt={logo.name}
        fill
        sizes="112px"
        loading="lazy"
        className="object-contain brightness-0"
      />
    </div>
  );
}

function LogoSegment({
  logos,
  segmentRef,
  segmentKey,
  ariaHidden = false,
}: {
  logos: ClientLogo[];
  segmentRef?: React.RefObject<HTMLDivElement | null>;
  segmentKey: string;
  ariaHidden?: boolean;
}): React.ReactElement {
  return (
    <div
      ref={segmentRef}
      aria-hidden={ariaHidden || undefined}
      className={`flex ${LOGO_GAP_CLASS}`}
    >
      {logos.map((logo) => (
        <LogoItem key={`${segmentKey}-${logo.seed}`} logo={logo} />
      ))}
    </div>
  );
}

function ScrollingTrack({ logos }: { logos: ClientLogo[] }): React.ReactElement {
  const segmentRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState<number | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

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
  }, [logos]);

  if (scrollDistance === null || prefersReducedMotion) {
    return (
      <div className={`flex overflow-x-auto ${LOGO_GAP_CLASS}`}>
        <LogoSegment logos={logos} segmentKey="static" segmentRef={segmentRef} />
      </div>
    );
  }

  return (
    <motion.div
      className={`flex ${LOGO_GAP_CLASS}`}
      animate={{ x: [-scrollDistance, 0] }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 55,
          ease: "linear",
        },
      }}
    >
      <LogoSegment logos={logos} segmentKey="a" segmentRef={segmentRef} />
      <LogoSegment logos={logos} segmentKey="b" ariaHidden />
      <LogoSegment logos={logos} segmentKey="c" ariaHidden />
    </motion.div>
  );
}

export function ClientLogoMarquee({
  logos,
}: ClientLogoMarqueeProps): React.ReactElement {
  return (
    <div className="overflow-hidden border-y border-neutral-200/80 bg-white py-9 md:py-10">
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />
        <ScrollingTrack logos={logos} />
      </div>
    </div>
  );
}

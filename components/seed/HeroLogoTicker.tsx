'use client';

import React, { useLayoutEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ClientLogo } from "@/lib/seed-types";

interface HeroLogoTickerProps {
  logos: ClientLogo[];
}

const LOGO_GAP_CLASS = "gap-10 sm:gap-12 lg:gap-14";

function LogoItem({ logo }: { logo: ClientLogo }): React.ReactElement {
  return (
    <div className="flex h-6 w-24 shrink-0 items-center justify-center">
      <img
        src={`/client-logos/${logo.logo}`}
        alt={logo.name}
        className="max-h-6 max-w-24 object-contain opacity-90"
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
      className={`flex shrink-0 items-center ${LOGO_GAP_CLASS}`}
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

  if (scrollDistance === null) {
    return (
      <div className={`flex ${LOGO_GAP_CLASS}`}>
        <LogoSegment logos={logos} segmentKey="measure" segmentRef={segmentRef} />
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
          duration: 65,
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

export function HeroLogoTicker({ logos }: HeroLogoTickerProps): React.ReactElement {
  return (
    <div className="relative z-20 w-full shrink-0 overflow-hidden bg-[#232327] py-6 select-none lg:py-7">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#232327] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#232327] to-transparent" />

      <ScrollingTrack logos={logos} />
    </div>
  );
}

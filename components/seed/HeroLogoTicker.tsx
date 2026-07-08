'use client';

import React from "react";
import { motion } from "motion/react";
import { ClientLogo } from "@/lib/seed-types";

interface HeroLogoTickerProps {
  logos: ClientLogo[];
}

function LogoSet({ logos }: { logos: ClientLogo[] }): React.ReactElement {
  return (
    <div className="flex min-w-full shrink-0 items-center justify-around gap-10 px-8 sm:gap-12 sm:px-12 lg:gap-16 lg:px-16">
      {logos.map((logo) => (
        <div
          key={logo.seed}
          className="flex h-6 w-24 shrink-0 items-center justify-center"
        >
          <img
            src={`/client-logos/${logo.logo}`}
            alt={logo.name}
            className="max-h-6 max-w-24 object-contain opacity-90"
          />
        </div>
      ))}
    </div>
  );
}

export function HeroLogoTicker({ logos }: HeroLogoTickerProps): React.ReactElement {
  return (
    <div className="relative z-20 w-full shrink-0 overflow-hidden bg-[#232327] py-6 select-none lg:py-7">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#232327] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#232327] to-transparent" />

      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
        className="flex whitespace-nowrap"
      >
        <LogoSet logos={logos} />
        <LogoSet logos={logos} />
      </motion.div>
    </div>
  );
}

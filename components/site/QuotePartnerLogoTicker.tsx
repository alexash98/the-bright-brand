'use client';

import React from "react";
import Image from "next/image";
import { QuotePartnerLogo } from "@/lib/site-types";

interface QuotePartnerLogoTickerProps {
  logos: QuotePartnerLogo[];
  ariaLabel?: string;
}

export function QuotePartnerLogoTicker({
  logos,
  ariaLabel = "Partner logos",
}: QuotePartnerLogoTickerProps): React.ReactElement {
  return (
    <ul
      className="m-0 grid w-full list-none gap-x-3 py-5 sm:gap-x-4 sm:py-6"
      style={{
        gridTemplateColumns: `repeat(${logos.length}, minmax(0, 1fr))`,
      }}
      aria-label={ariaLabel}
    >
      {logos.map((logo) => (
        <li key={logo.id} className="min-w-0">
          <div className="relative mx-auto aspect-[200/72] w-full">
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              sizes="140px"
              loading="lazy"
              decoding="async"
              unoptimized
              className="object-contain object-center opacity-95"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

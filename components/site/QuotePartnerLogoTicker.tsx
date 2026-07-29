'use client';

import React from "react";
import Image from "next/image";
import { QuotePartnerLogo } from "@/lib/site-types";

interface QuotePartnerLogoTickerProps {
  logos: QuotePartnerLogo[];
  ariaLabel?: string;
}

/** Fixed six-column row — same footprint as Britton & Time on every slide. */
const SLOT_COUNT = 6;

export function QuotePartnerLogoTicker({
  logos,
  ariaLabel = "Partner logos",
}: QuotePartnerLogoTickerProps): React.ReactElement {
  const slots = Array.from(
    { length: SLOT_COUNT },
    (_, index) => logos[index] ?? null,
  );

  return (
    <ul
      className="m-0 grid w-full list-none grid-cols-6 items-center gap-x-3 py-5 sm:gap-x-4 sm:py-6"
      aria-label={ariaLabel}
    >
      {slots.map((logo, index) => (
        <li key={logo?.id ?? `empty-${index}`} className="min-w-0">
          {logo ? (
            <div
              className="relative mx-auto h-9 w-full overflow-visible sm:h-10"
              style={
                logo.scale
                  ? { transform: `scale(${logo.scale})` }
                  : undefined
              }
            >
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
          ) : (
            <div className="h-9 w-full sm:h-10" aria-hidden />
          )}
        </li>
      ))}
    </ul>
  );
}

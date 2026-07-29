'use client';

import React from "react";
import Image from "next/image";
import { QuotePartnerLogo } from "@/lib/site-types";

interface QuotePartnerLogoTickerProps {
  logos: QuotePartnerLogo[];
  ariaLabel?: string;
}

/** Fixed six-column row. Every asset is normalised to 280×80. */
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
      className="m-0 grid w-full list-none grid-cols-6 items-center gap-x-2 py-4 sm:gap-x-3 sm:py-5"
      aria-label={ariaLabel}
    >
      {slots.map((logo, index) => (
        <li key={logo?.id ?? `empty-${index}`} className="min-w-0">
          {logo ? (
            <div className="relative mx-auto aspect-[280/80] w-full">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                sizes="160px"
                loading="lazy"
                decoding="async"
                unoptimized
                className="object-contain object-center"
              />
            </div>
          ) : (
            <div className="aspect-[280/80] w-full" aria-hidden />
          )}
        </li>
      ))}
    </ul>
  );
}

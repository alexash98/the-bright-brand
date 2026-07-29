'use client';

import React from "react";
import Image from "next/image";
import { QuotePartnerLogo } from "@/lib/site-types";

interface QuotePartnerLogoTickerProps {
  logos: QuotePartnerLogo[];
  ariaLabel?: string;
}

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
        <li key={logo?.id ?? `empty-${index}`} className="flex min-w-0 items-center justify-center">
          {logo ? (
            <div className="relative aspect-[200/72] w-full">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                sizes="120px"
                loading="lazy"
                decoding="async"
                unoptimized
                className="object-contain object-center"
              />
            </div>
          ) : (
            <div className="aspect-[200/72] w-full" aria-hidden />
          )}
        </li>
      ))}
    </ul>
  );
}

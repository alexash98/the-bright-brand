'use client';

import React from "react";
import { AboutHeroHighlight } from "@/lib/seed-types";

interface AboutHeroAsideProps {
  highlights: AboutHeroHighlight[];
}

export function AboutHeroAside({
  highlights,
}: AboutHeroAsideProps): React.ReactElement {
  return (
    <div className="w-full max-w-md lg:ml-auto lg:max-w-lg xl:max-w-xl">
      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-300 hover:border-brand-accent/25 hover:bg-white/[0.06] sm:p-5"
          >
            <p className="mb-2 text-2xl font-semibold tracking-tight text-brand-accent sm:text-3xl">
              {item.value}
            </p>
            <p className="text-sm leading-snug text-brand-text-pale/70">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

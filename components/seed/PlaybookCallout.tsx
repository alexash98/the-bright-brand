'use client';

import React from "react";
import { useScrollToSection } from "@/components/seed/SmoothScrollProvider";

export function PlaybookCallout(): React.ReactElement {
  const scrollToSection = useScrollToSection();

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-[98.5rem] flex-col gap-5 rounded-xl border border-neutral-200 bg-[#f7f7f5] px-6 py-5 shadow-xl sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8">
      <p className="max-w-2xl flex-1 text-[15px] leading-relaxed text-neutral-600">
        Flexible engagements, clear accountability, and no off-the-shelf retainers.
      </p>
      <button
        type="button"
        onClick={() => scrollToSection("enquire")}
        className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-brand-accent px-6 text-sm font-bold text-brand-bg-darker transition-colors hover:bg-brand-accent-hover"
      >
        Start a conversation
      </button>
    </div>
  );
}

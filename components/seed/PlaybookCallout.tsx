'use client';

import React from "react";
import Link from "next/link";
import { useScrollToSection } from "@/components/seed/SmoothScrollProvider";

interface PlaybookCalloutProps {
  theme?: "light" | "dark";
  href?: string;
  className?: string;
}

export function PlaybookCallout({
  theme = "light",
  href,
  className = "",
}: PlaybookCalloutProps): React.ReactElement {
  const scrollToSection = useScrollToSection();
  const isDark = theme === "dark";

  const buttonClassName =
    "inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-brand-accent px-6 text-sm font-bold text-brand-bg-darker transition-colors hover:bg-brand-accent-hover";

  return (
    <div
      className={`relative z-10 flex w-full flex-col gap-5 rounded-2xl border px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 md:py-6 ${
        isDark
          ? "border-white/10 bg-brand-bg-darker shadow-none"
          : "mx-auto max-w-[98.5rem] border-neutral-200 bg-[#f7f7f5]"
      } ${className}`}
    >
      <p
        className={`max-w-2xl flex-1 text-[15px] leading-relaxed ${
          isDark ? "text-brand-text-pale/75" : "text-neutral-600"
        }`}
      >
        Flexible engagements, clear accountability, and no off-the-shelf retainers.
      </p>
      {href ? (
        <Link href={href} className={buttonClassName}>
          Start a conversation
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => scrollToSection("enquire")}
          className={buttonClassName}
        >
          Start a conversation
        </button>
      )}
    </div>
  );
}

'use client';

import React from "react";
import Image from "next/image";
import { isPreoptimizedLocalImage } from "@/lib/image";
import { CaseStudy } from "@/lib/seed-types";

export function PortfolioCard({
  study,
}: {
  study: CaseStudy;
}): React.ReactElement {
  const logoLines = study.clientName.split(" ");
  const primaryLine = logoLines[0] ?? study.clientName;
  const secondaryLine = logoLines.slice(1).join(" ");
  const invertLogo = study.clientLogoInvert !== false;
  const logoContainerClass =
    study.id === "heat-from-the-spire"
      ? "flex h-7 w-32 origin-left scale-[0.87] items-center justify-start sm:h-8 sm:w-36"
      : study.id === "baker-ashley"
        ? "flex h-8 w-36 origin-left -translate-x-[20px] scale-[1.3] items-center justify-start sm:h-9 sm:w-40"
        : study.id === "direct2"
          ? "flex h-7 w-28 origin-left scale-[1.4] items-center justify-start sm:h-8 sm:w-32"
          : study.id === "northwest-solicitors"
            ? "flex h-7 w-28 origin-left scale-[1.5] items-center justify-start sm:h-8 sm:w-32"
            : study.id === "formx" || study.id === "releaf"
              ? "flex h-7 w-28 origin-left scale-[0.909] items-center justify-start sm:h-8 sm:w-32"
              : study.id === "anywhere-travel"
                ? "flex h-7 w-28 origin-left scale-[1.2] items-center justify-start sm:h-8 sm:w-32"
                : study.id === "menzies-law"
                  ? "flex h-7 w-28 origin-left scale-[1.2] items-center justify-start sm:h-8 sm:w-32"
                  : study.id === "airbox"
                    ? "flex h-7 w-28 origin-left scale-[1.2] items-center justify-start sm:h-8 sm:w-32"
                    : study.id === "britton-and-time"
                      ? "flex h-7 w-28 origin-left scale-[1.2] items-center justify-start sm:h-8 sm:w-32"
                      : study.id === "manor-interior"
                        ? "flex h-8 w-40 origin-left items-center justify-start sm:h-9 sm:w-44"
                        : "flex h-7 w-28 items-center justify-start sm:h-8 sm:w-32";

  return (
    <article className="group relative min-h-[320px] overflow-hidden rounded-2xl border border-neutral-200/80 sm:min-h-[350px]">
      <Image
        src={study.imageUrl}
        alt={study.clientName}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        loading="lazy"
        decoding="async"
        unoptimized={isPreoptimizedLocalImage(study.imageUrl)}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />

      <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-between p-5 sm:min-h-[350px] sm:p-6">
        <div className="flex items-center justify-start">
          {study.clientLogo ? (
            <div className={logoContainerClass}>
              <Image
                src={`/client-logos/${study.clientLogo}`}
                alt={study.clientName}
                width={160}
                height={44}
                loading="lazy"
                decoding="async"
                unoptimized
                className={`h-full w-full object-contain object-left ${
                  invertLogo ? "brightness-0 invert" : ""
                }`}
              />
            </div>
          ) : (
            <div className="inline-flex w-fit max-w-full items-center rounded-md border border-white/25 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
              <span className="truncate text-[10px] font-bold uppercase tracking-[0.14em] text-white sm:text-[11px]">
                {primaryLine}
                {secondaryLine ? ` ${secondaryLine}` : ""}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col justify-center py-4">
          <p className="text-4xl font-semibold tracking-tight text-brand-accent sm:text-5xl">
            {study.highlightStat}
          </p>
        </div>

        <div>
          <h3 className="text-[1.05rem] font-bold text-white sm:text-[1.2rem]">
            {study.clientName}
          </h3>
          <p className="mt-1 max-w-[280px] text-sm leading-snug text-white/90 sm:text-[15px]">
            {study.highlightLabel}
          </p>
        </div>
      </div>
    </article>
  );
}

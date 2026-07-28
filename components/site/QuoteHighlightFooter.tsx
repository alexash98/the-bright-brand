'use client';

import React from "react";
import Image from "next/image";
import { QuoteHighlight, QuoteReviewProvider } from "@/lib/site-types";

interface QuoteHighlightFooterProps {
  highlight: QuoteHighlight;
}

function TrustpilotStarIcon({ className }: { className?: string }): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 1.5l2.74 6.64 7.26.78-5.45 4.84 1.56 7.14L12 17.77 5.89 20.9l1.56-7.14L2 8.92l7.26-.78L12 1.5z"
      />
    </svg>
  );
}

function FeefoStarIcon({ className }: { className?: string }): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.2l2.55 6.2 6.75.62-5.15 4.45 1.5 6.55L12 16.7 6.35 20.02l1.5-6.55L2.7 9.02l6.75-.62L12 2.2z"
      />
    </svg>
  );
}

function StarRow({
  rating,
  provider,
}: {
  rating: number;
  provider: QuoteReviewProvider;
}): React.ReactElement {
  const filledColor = provider === "feefo" ? "bg-[#ffcd00]" : "bg-[#00b67a]";
  const emptyColor = "bg-[#dcdce6]";
  const Star = provider === "feefo" ? FeefoStarIcon : TrustpilotStarIcon;

  const fullStars = Math.min(5, Math.floor(rating));
  const fractional = Math.max(0, Math.min(1, rating - fullStars));
  const showFraction = fractional >= 0.25;

  return (
    <div className="flex items-center gap-[2px]" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => {
        const isFull = index < fullStars;
        const isPartial = index === fullStars && showFraction;

        if (isPartial) {
          return (
            <span
              key={index}
              className={`relative flex h-4 w-4 items-center justify-center overflow-hidden ${emptyColor} text-white`}
            >
              <span
                className={`absolute inset-y-0 left-0 ${filledColor}`}
                style={{ width: `${Math.max(fractional, 0.5) * 100}%` }}
              />
              <Star className="relative z-10 h-2.5 w-2.5" />
            </span>
          );
        }

        return (
          <span
            key={index}
            className={`flex h-4 w-4 items-center justify-center text-white ${
              isFull ? filledColor : emptyColor
            }`}
          >
            <Star className="h-2.5 w-2.5" />
          </span>
        );
      })}
    </div>
  );
}

function formatReviewCount(count: number): string {
  return count.toLocaleString("en-GB");
}

function resolveProvider(highlight: QuoteHighlight): QuoteReviewProvider {
  return highlight.provider ?? "trustpilot";
}

export function QuoteHighlightFooter({
  highlight,
}: QuoteHighlightFooterProps): React.ReactElement {
  const provider = resolveProvider(highlight);
  const providerName = provider === "feefo" ? "Feefo" : "Trustpilot";
  const hasStat = Boolean(
    highlight.statValue && highlight.statCaption && highlight.statLogo,
  );
  const hasAward = Boolean(highlight.awardLogo);

  return (
    <div className="flex flex-nowrap items-center justify-between gap-x-6 overflow-hidden py-5 sm:py-6">
      {/* Score-first layout — same hierarchy as Anywhere Trustpilot */}
      <div
        className="flex min-w-0 flex-col gap-1"
        aria-label={`${highlight.rating} ${highlight.label} on ${providerName}, ${highlight.reviews} reviews`}
      >
        <p className="text-[22px] font-semibold leading-none tracking-tight text-[#191919]">
          {highlight.rating.toFixed(1)}
        </p>
        <p className="text-[13px] font-medium leading-none text-[#191919]">
          {highlight.label}
        </p>
        <StarRow rating={highlight.rating} provider={provider} />
        <p className="text-[11px] leading-none text-neutral-500">
          {formatReviewCount(highlight.reviews)} reviews
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-4">
        {hasStat && highlight.statLogo ? (
          <div className="flex flex-col items-end gap-1.5 text-right">
            <div className="flex items-center gap-1.5">
              <Image
                src={highlight.statLogo.src}
                alt=""
                width={highlight.statLogo.width}
                height={highlight.statLogo.height}
                loading="lazy"
                decoding="async"
                unoptimized
                style={{ height: 14, width: "auto" }}
                className="object-contain object-right opacity-90"
              />
              {highlight.statHandle ? (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-600">
                  {highlight.statHandle}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3 text-[#0095f6]"
                    aria-label="Verified"
                  >
                    <circle cx="12" cy="12" r="10" fill="currentColor" />
                    <path
                      d="M10.2 15.4l-3-3 1.2-1.2 1.8 1.8 4.4-4.4 1.2 1.2-5.6 5.6z"
                      fill="#fff"
                    />
                  </svg>
                </span>
              ) : null}
            </div>
            <p className="text-[20px] font-semibold leading-none tracking-tight text-neutral-900">
              {highlight.statValue}
            </p>
            <p className="text-[11px] leading-none text-neutral-500">
              {highlight.statCaption}
              <span className="sr-only"> via {highlight.statLogo.name}</span>
            </p>
          </div>
        ) : null}

        {hasAward && highlight.awardLogo ? (
          <Image
            src={highlight.awardLogo.src}
            alt={highlight.awardLogo.name}
            width={highlight.awardLogo.width}
            height={highlight.awardLogo.height}
            loading="lazy"
            decoding="async"
            unoptimized
            style={{ height: 56, width: "auto", flexShrink: 0 }}
            className="object-contain object-right"
          />
        ) : null}
      </div>
    </div>
  );
}

'use client';

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { Testimonial } from "@/lib/seed-types";
import { TestimonialCard } from "@/components/seed/TestimonialCard";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

interface TiledTestimonial extends Testimonial {
  tileKey: string;
}

const CARD_GAP_CLASS = "gap-4";
const MIN_TILE_ROUNDS = 2;

function buildTiledTestimonials(
  testimonials: Testimonial[],
  rounds: number,
): TiledTestimonial[] {
  return Array.from({ length: rounds }, (_, round) =>
    testimonials.map((testimonial) => ({
      ...testimonial,
      tileKey: `${testimonial.id}-${round}`,
    })),
  ).flat();
}

function TestimonialCopy({
  testimonials,
  copyRef,
  copyKey,
  ariaHidden = false,
}: {
  testimonials: TiledTestimonial[];
  copyRef?: React.RefObject<HTMLDivElement | null>;
  copyKey: string;
  ariaHidden?: boolean;
}): React.ReactElement {
  return (
    <div
      ref={copyRef}
      aria-hidden={ariaHidden || undefined}
      className={`flex shrink-0 items-stretch ${CARD_GAP_CLASS}`}
    >
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={`${copyKey}-${testimonial.tileKey}`}
          testimonial={testimonial}
          className="min-h-[280px] w-[300px] shrink-0 sm:w-[340px]"
        />
      ))}
    </div>
  );
}

export function TestimonialTrack({
  testimonials,
}: {
  testimonials: Testimonial[];
}): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState<number | null>(null);
  const [tileRounds, setTileRounds] = useState(MIN_TILE_ROUNDS);
  const prefersReducedMotion = usePrefersReducedMotion();

  const tiledTestimonials = useMemo(
    () => buildTiledTestimonials(testimonials, tileRounds),
    [testimonials, tileRounds],
  );

  useLayoutEffect(() => {
    const measure = (): void => {
      if (!copyRef.current?.parentElement || !containerRef.current) {
        return;
      }

      const viewportWidth = containerRef.current.offsetWidth;
      const copyWidth = copyRef.current.offsetWidth;
      const parentStyles = window.getComputedStyle(copyRef.current.parentElement);
      const trackGap = Number.parseFloat(parentStyles.columnGap || parentStyles.gap || "0");

      if (copyWidth > 0 && copyWidth < viewportWidth + 128) {
        const nextRounds = Math.ceil(tileRounds * ((viewportWidth + 128) / copyWidth)) + 1;

        if (nextRounds > tileRounds) {
          setScrollDistance(null);
          setTileRounds(nextRounds);
          return;
        }
      }

      if (copyWidth > 0) {
        setScrollDistance(copyWidth + trackGap);
      }
    };

    measure();

    const observer = new ResizeObserver(measure);

    if (copyRef.current) {
      observer.observe(copyRef.current);
    }

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const images = copyRef.current?.querySelectorAll("img") ?? [];

    images.forEach((image) => {
      if (!image.complete) {
        image.addEventListener("load", measure);
      }
    });

    return () => {
      observer.disconnect();
      images.forEach((image) => {
        image.removeEventListener("load", measure);
      });
    };
  }, [testimonials, tileRounds, tiledTestimonials]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <motion.div
        className={`flex w-max ${CARD_GAP_CLASS}`}
        initial={{ x: 0 }}
        animate={
          scrollDistance && !prefersReducedMotion
            ? { x: [0, -scrollDistance] }
            : { x: 0 }
        }
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: Math.max(80, tiledTestimonials.length * 8),
            ease: "linear",
          },
        }}
      >
        <TestimonialCopy
          testimonials={tiledTestimonials}
          copyKey="a"
          copyRef={copyRef}
        />
        <TestimonialCopy testimonials={tiledTestimonials} copyKey="b" ariaHidden />
      </motion.div>
    </div>
  );
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#f7f7f5] py-20 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-3xl text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Trusted by brands that don&apos;t settle.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
            Numbers tell one story. Here&apos;s what our clients say about getting
            there.
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-12 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f7f7f5] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f7f7f5] to-transparent sm:w-24" />

        <TestimonialTrack testimonials={testimonials} />
      </div>
    </section>
  );
};

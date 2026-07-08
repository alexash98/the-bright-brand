'use client';

import React, { useLayoutEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Testimonial } from "@/lib/seed-types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const CARD_GAP_PX = 16;

function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}): React.ReactElement {
  return (
    <article className="flex h-[280px] w-[300px] shrink-0 flex-col rounded-2xl border border-neutral-200/80 bg-[#f7f7f5] p-6 sm:h-[300px] sm:w-[340px] sm:p-7">
      <p className="flex-1 text-sm leading-relaxed text-neutral-800 sm:text-[15px]">
        {testimonial.text}
      </p>

      <div className="mt-5 border-t border-neutral-900/10 pt-5">
        <div className="flex items-center gap-3">
          <img
            src={`https://picsum.photos/seed/${testimonial.avatarSeed}/80/80`}
            alt={testimonial.author}
            referrerPolicy="no-referrer"
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-neutral-900">
              {testimonial.author}
            </p>
            <p className="text-sm text-neutral-600">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function TestimonialSegment({
  testimonials,
  segmentRef,
  segmentKey,
  ariaHidden = false,
}: {
  testimonials: Testimonial[];
  segmentRef?: React.RefObject<HTMLDivElement | null>;
  segmentKey: string;
  ariaHidden?: boolean;
}): React.ReactElement {
  return (
    <div
      ref={segmentRef}
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-stretch gap-4"
    >
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={`${segmentKey}-${testimonial.id}`}
          testimonial={testimonial}
        />
      ))}
    </div>
  );
}

function TestimonialTrack({
  testimonials,
}: {
  testimonials: Testimonial[];
}): React.ReactElement {
  const segmentRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState<number | null>(null);

  useLayoutEffect(() => {
    const measure = (): void => {
      if (!segmentRef.current?.parentElement) {
        return;
      }

      const segmentWidth = segmentRef.current.offsetWidth;
      const parentStyles = window.getComputedStyle(segmentRef.current.parentElement);
      const trackGap = Number.parseFloat(parentStyles.columnGap || parentStyles.gap || "0");

      setScrollDistance(segmentWidth + (trackGap || CARD_GAP_PX));
    };

    measure();

    const observer = new ResizeObserver(measure);
    if (segmentRef.current) {
      observer.observe(segmentRef.current);
    }

    return () => observer.disconnect();
  }, [testimonials]);

  if (scrollDistance === null) {
    return (
      <div className="flex gap-4">
        <TestimonialSegment
          testimonials={testimonials}
          segmentKey="measure"
          segmentRef={segmentRef}
        />
      </div>
    );
  }

  return (
    <motion.div
      className="flex gap-4"
      initial={{ x: 0 }}
      animate={{ x: [0, -scrollDistance] }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 80,
          ease: "linear",
        },
      }}
    >
      <TestimonialSegment
        testimonials={testimonials}
        segmentKey="a"
        segmentRef={segmentRef}
      />
      <TestimonialSegment testimonials={testimonials} segmentKey="b" ariaHidden />
      <TestimonialSegment testimonials={testimonials} segmentKey="c" ariaHidden />
    </motion.div>
  );
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-20 sm:py-24">
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
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

        <TestimonialTrack testimonials={testimonials} />
      </div>
    </section>
  );
};

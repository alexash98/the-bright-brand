'use client';

import { TestimonialTrack } from "@/components/seed/Testimonials";
import { TESTIMONIALS } from "@/lib/seed-data";

export function ContactTestimonialsSection(): React.ReactElement {
  return (
    <section
      aria-label="Client testimonials"
      className="relative overflow-hidden border-t border-neutral-200 bg-[#f7f7f5] py-14 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          Client stories
        </p>
        <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
          Trusted by brands that don&apos;t settle.
        </h2>
      </div>

      <div className="relative mt-10 overflow-hidden md:mt-12">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f7f7f5] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f7f7f5] to-transparent sm:w-24" />

        <TestimonialTrack testimonials={TESTIMONIALS} />
      </div>
    </section>
  );
}

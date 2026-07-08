'use client';

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Testimonial } from "@/lib/seed-types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [index, setIndex] = useState(0);
  const [direction, setIndexDirection] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 7000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [index]);

  const handlePrev = () => {
    setIndexDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndexDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (idx: number) => {
    setIndexDirection(idx > index ? 1 : -1);
    setIndex(idx);
  };

  const active = testimonials[index];

  if (!active || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="relative overflow-hidden border-y border-neutral-200 bg-white py-24">
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
            Client Success
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Trusted by brands that don't settle.
          </h2>
        </div>

        <div className="relative flex min-h-[300px] w-full flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-10 shadow-xl md:px-12">
          <Quote className="absolute left-8 top-8 h-12 w-12 text-brand-accent/10" />

          <div className="relative flex min-h-[160px] w-full items-center justify-center overflow-hidden text-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 50 }}
                transition={{ duration: 0.35 }}
                className="w-full"
              >
                <blockquote className="mx-auto max-w-3xl text-xl font-semibold italic leading-relaxed text-neutral-700 md:text-2xl">
                  "{active.text}"
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-lg font-bold text-brand-accent">
              {active.author[0]}
            </div>
            <div className="mt-3 text-center">
              <cite className="block text-lg font-bold not-italic text-neutral-900">
                {active.author}
              </cite>
              <span className="mt-0.5 block text-sm font-medium text-neutral-500">
                {active.role}, <span className="text-brand-accent">{active.company}</span>
              </span>
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-all hover:border-brand-accent/45 hover:text-brand-accent md:left-4"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-all hover:border-brand-accent/45 hover:text-brand-accent md:right-4"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2.5">
          {testimonials.map((testimonial, idx) => (
            <button
              key={testimonial.id}
              onClick={() => handleDotClick(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${idx === index ? "w-8 bg-brand-accent" : "w-2.5 bg-neutral-300 hover:bg-neutral-400"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

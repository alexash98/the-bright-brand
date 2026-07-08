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
  const [direction, setIndexDirection] = useState(0); // -1 for left, 1 for right
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
    <section id="testimonials" className="py-24 bg-brand-bg-darker border-y border-brand-teal-light/10 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-teal-light/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-3">
            Client Success
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Trusted by brands that don't settle.
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="w-full min-h-[300px] flex flex-col justify-center items-center relative px-6 md:px-12 py-10 rounded-2xl bg-brand-bg border border-brand-teal-light/10 backdrop-blur-sm shadow-xl">
          <Quote className="h-12 w-12 text-brand-accent/10 absolute top-8 left-8" />

          <div className="w-full text-center relative overflow-hidden min-h-[160px] flex items-center justify-center">
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
                <blockquote className="text-xl md:text-2xl font-semibold text-brand-text-pale/90 leading-relaxed max-w-3xl mx-auto italic">
                  "{active.text}"
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* User Bio Details */}
          <div className="mt-8 flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-brand-bg-darker border border-brand-teal-light/20 flex items-center justify-center font-bold text-lg text-brand-accent">
              {active.author[0]}
            </div>
            <div className="text-center mt-3">
              <cite className="not-italic text-white font-bold text-lg block">
                {active.author}
              </cite>
              <span className="text-brand-text-pale/50 text-sm block mt-0.5 font-medium">
                {active.role}, <span className="text-brand-accent">{active.company}</span>
              </span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-brand-teal-light/20 bg-brand-bg-darker/80 flex items-center justify-center text-brand-text-pale hover:text-brand-accent hover:border-brand-accent/45 transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-brand-teal-light/20 bg-brand-bg-darker/80 flex items-center justify-center text-brand-text-pale hover:text-brand-accent hover:border-brand-accent/45 transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="flex gap-2.5 mt-8 items-center justify-center">
          {testimonials.map((testimonial, idx) => (
            <button
              key={testimonial.id}
              onClick={() => handleDotClick(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${idx === index ? "w-8 bg-brand-accent" : "w-2.5 bg-brand-teal-light/30 hover:bg-brand-teal-light/50"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

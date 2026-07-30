'use client';

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { Testimonial } from "@/lib/site-types";
import { SHOW_TESTIMONIALS_SECTION } from "@/lib/feature-flags";
import { SectionIntro } from "@/components/site/SectionIntro";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

interface TestimonialsProps {
  testimonials: Testimonial[];
  /**
   * `marquee` — horizontal ticker (case studies page).
   * `featured` — single static card.
   * `rotate` — one card at a time, auto-advancing (homepage).
   */
  layout?: "marquee" | "featured" | "rotate";
  /** Auto-advance interval for `rotate` layout. Defaults to 2000ms. */
  autoAdvanceMs?: number;
}

interface TiledTestimonial extends Testimonial {
  tileKey: string;
}

const CARD_GAP_CLASS = "gap-4";
const MIN_TILE_ROUNDS = 2;
const DEFAULT_ROTATE_MS = 3500;

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

function RotatingTestimonials({
  testimonials,
  autoAdvanceMs,
}: {
  testimonials: Testimonial[];
  autoAdvanceMs: number;
}): React.ReactElement {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const wasInViewRef = useRef(false);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + testimonials.length) % testimonials.length);
    },
    [testimonials.length],
  );

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = Boolean(entry?.isIntersecting);
        if (visible && !wasInViewRef.current) {
          setActiveIndex(0);
        }
        wasInViewRef.current = visible;
        setIsInView(visible);
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (
      testimonials.length <= 1 ||
      !isInView ||
      isPaused ||
      prefersReducedMotion
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, autoAdvanceMs);

    return () => window.clearInterval(timer);
  }, [
    testimonials.length,
    isInView,
    isPaused,
    prefersReducedMotion,
    autoAdvanceMs,
  ]);

  const active = testimonials[activeIndex];

  if (!active) {
    return <></>;
  }

  return (
    <div
      ref={sectionRef}
      className="relative z-10 mx-auto mt-12 max-w-7xl px-4 md:px-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative mx-auto max-w-2xl">
        <div className="grid invisible" aria-hidden>
          {testimonials.map((testimonial) => (
            <div key={`sizer-${testimonial.id}`} className="col-start-1 row-start-1">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{
                duration: prefersReducedMotion ? 0.15 : 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              <TestimonialCard testimonial={active} className="h-full" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {testimonials.length > 1 ? (
        <div
          className="mt-6 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Client testimonials"
        >
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={testimonial.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show testimonial from ${testimonial.company}`}
                onClick={() => goTo(index)}
                className={`rounded-full transition-all duration-500 ease-in-out ${
                  isActive
                    ? "h-2 w-8 bg-neutral-800"
                    : "h-2 w-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials,
  layout = "marquee",
  autoAdvanceMs = DEFAULT_ROTATE_MS,
}) => {
  if (!SHOW_TESTIMONIALS_SECTION) {
    return null;
  }

  if (testimonials.length === 0) {
    return null;
  }

  const featured =
    layout === "featured" || (layout === "marquee" && testimonials.length === 1);
  const rotate = layout === "rotate";
  const featuredTestimonial = testimonials[0];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#f7f7f5] py-20 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <SectionIntro className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Straight from the{" "}
            <span className="text-brand-accent">people</span> we work with.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
            Founders and operators on the accounts we run, in their words, not
            ours.
          </p>
        </SectionIntro>
      </div>

      {rotate ? (
        <RotatingTestimonials
          testimonials={testimonials}
          autoAdvanceMs={autoAdvanceMs}
        />
      ) : featured && featuredTestimonial ? (
        <div className="relative z-10 mx-auto mt-12 max-w-7xl px-4 md:px-8">
          <TestimonialCard
            testimonial={featuredTestimonial}
            className="mx-auto max-w-2xl"
          />
        </div>
      ) : (
        <div className="relative z-10 mt-12 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f7f7f5] to-transparent sm:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f7f7f5] to-transparent sm:w-24" />

          <TestimonialTrack testimonials={testimonials} />
        </div>
      )}
    </section>
  );
};

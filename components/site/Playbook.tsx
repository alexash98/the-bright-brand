'use client';

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { SectionIntro } from "@/components/site/SectionIntro";

const items: { outcome: string; objection: string }[] = [
  {
    outcome: "Direct ownership from day one",
    objection: "No middlemen, no hand-offs between teams",
  },
  {
    outcome: "One integrated growth plan",
    objection: "Not channels managed in silos",
  },
  {
    outcome: "Reporting tied to revenue and pipeline",
    objection: "Not another dashboard of vanity metrics",
  },
  {
    outcome: "Flexible terms that follow progress",
    objection: "No bloated retainers, no twelve-month lock-in",
  },
  {
    outcome: "Plans built from your analytics",
    objection: "Not strategy written before anyone sees your data",
  },
];

export const Playbook: React.FC = () => {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [scrollActive, setScrollActive] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeIndex = hoveredIndex ?? scrollActive;

  useEffect(() => {
    let frame = 0;

    const updateActive = (): void => {
      frame = 0;
      const line = window.innerHeight * 0.42;
      let next = 0;

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        if (top <= line) {
          next = i;
        }
      });

      setScrollActive((current) => (current === next ? current : next));
    };

    const onScrollOrResize = (): void => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="playbook"
      className="relative overflow-hidden bg-[#f7f7f5] py-[6.9rem]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_10%,rgba(232,184,75,0.08),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-20">
          <SectionIntro className="lg:sticky lg:top-28 lg:max-w-none">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-accent-dark">
              The model
            </p>
            <h2 className="mb-5 text-balance text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl xl:text-[2.75rem] xl:leading-[1.12]">
              The agency model, rebuilt around your{" "}
              <span className="text-brand-accent">outcomes</span>.
            </h2>
            <p className="text-lg font-normal leading-relaxed text-neutral-600">
              You get one team, one plan, and reporting that ties spend to
              pipeline. No hand-offs, no lock-in, no strategy written before
              anyone has seen your data.
            </p>
          </SectionIntro>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)] md:p-8"
          >
            <ol className="relative m-0 list-none p-0">
              <div
                aria-hidden
                className="absolute bottom-3 left-[5px] top-3 w-px bg-gradient-to-b from-brand-accent via-brand-accent/35 to-neutral-200"
              />

              {items.map((item, i) => {
                const isActive = i === activeIndex;

                return (
                  <motion.li
                    key={item.outcome}
                    ref={(el) => {
                      itemRefs.current[i] = el;
                    }}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group relative flex gap-4 border-b border-neutral-100 py-4 last:border-b-0 last:pb-0 first:pt-0 md:gap-5 md:py-5 md:last:pb-0 md:first:pt-0"
                  >
                    <div className="relative z-10 mt-1.5 flex h-3 w-3 shrink-0 items-center justify-center">
                      <span
                        className={`block rounded-full ring-[5px] ring-white transition-all duration-300 ${
                          isActive
                            ? "h-2.5 w-2.5 bg-brand-accent"
                            : "h-2 w-2 bg-neutral-300"
                        }`}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-[16px] font-medium leading-snug tracking-tight transition-colors duration-300 md:text-[17px] ${
                          isActive
                            ? "text-brand-accent-dark"
                            : "text-neutral-900"
                        }`}
                      >
                        {item.outcome}
                      </p>
                      <p className="mt-1 text-[13px] font-normal leading-relaxed text-neutral-500">
                        {item.objection}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

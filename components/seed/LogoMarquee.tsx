'use client';

import React from "react";
import { motion } from "motion/react";

interface MarqueeItem {
  name: string;
  seed: string;
}

interface LogoMarqueeProps {
  items: MarqueeItem[];
  title?: string;
  reverse?: boolean;
}

export const LogoMarquee: React.FC<LogoMarqueeProps> = ({ items, title, reverse = false }) => {
  const doubledItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden border-y border-neutral-200 bg-white py-8">
      {title && (
        <div className="mx-auto mb-4 max-w-7xl px-4 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
            {title}
          </p>
        </div>
      )}

      <div className="relative flex w-full select-none overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          animate={{
            x: reverse ? [0, 1000] : [0, -1000]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear"
            }
          }}
          className="flex min-w-full items-center gap-12 whitespace-nowrap py-2"
        >
          {doubledItems.map((item, idx) => (
            <div
              key={`${item.seed}-${idx}`}
              className="group flex cursor-default items-center gap-2.5 transition-all duration-300 hover:scale-105"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-xs font-extrabold text-neutral-500 transition-all group-hover:border-brand-accent/40 group-hover:bg-brand-accent/20 group-hover:text-brand-accent">
                {item.name[0]}
              </div>
              <span className="text-sm font-bold tracking-wide text-neutral-600 group-hover:text-neutral-900 md:text-base">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

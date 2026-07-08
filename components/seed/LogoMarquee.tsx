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
  // Double the array to guarantee seamless wrapping in the infinite scroll
  const doubledItems = [...items, ...items, ...items];

  return (
    <div className="w-full py-8 bg-brand-bg-darker/40 border-y border-brand-teal-light/10 overflow-hidden relative">
      {title && (
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold">
            {title}
          </p>
        </div>
      )}

      {/* Infinite scrolling block */}
      <div className="flex overflow-hidden select-none relative w-full">
        {/* Left and Right Fade overlays for elegant mask styling */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-brand-bg-darker to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-brand-bg-darker to-transparent z-10 pointer-events-none" />

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
          className="flex gap-12 items-center whitespace-nowrap min-w-full py-2"
        >
          {doubledItems.map((item, idx) => (
            <div
              key={`${item.seed}-${idx}`}
              className="flex items-center gap-2.5 hover:scale-105 hover:text-white transition-all duration-300 group cursor-default"
            >
              {/* Virtual clean modern icon placeholder */}
              <div className="h-8 w-8 rounded-full bg-brand-bg border border-brand-teal-light/20 flex items-center justify-center font-extrabold text-xs text-brand-text-pale/70 group-hover:bg-brand-accent/20 group-hover:text-brand-accent group-hover:border-brand-accent/40 transition-all">
                {item.name[0]}
              </div>
              <span className="text-brand-text-pale/70 group-hover:text-white text-sm md:text-base font-bold tracking-wide">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

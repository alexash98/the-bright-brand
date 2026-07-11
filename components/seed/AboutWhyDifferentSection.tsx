'use client';

import React from "react";
import { motion } from "motion/react";
import { PlaybookCallout } from "@/components/seed/PlaybookCallout";
import { AboutBridgeHighlight, AboutComparisonSection } from "@/lib/seed-types";

interface AboutWhyDifferentSectionProps {
  content: AboutComparisonSection;
}

export function AboutWhyDifferentSection({
  content,
}: AboutWhyDifferentSectionProps): React.ReactElement {
  const pairs = content.typical.map((typical, index) => ({
    typical,
    seed: content.seed[index] ?? "",
  }));

  return (
    <section className="bg-white py-20 text-neutral-900 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 max-w-3xl text-left md:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
            {content.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {content.title}{" "}
            <span className="text-brand-accent">{content.highlight}</span>
          </h2>
        </div>

        <div className="mb-3 hidden gap-12 md:grid md:grid-cols-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400">
            {content.leftTitle}
          </p>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-accent-dark">
            {content.rightTitle}
          </p>
        </div>

        <div className="border-t border-neutral-200">
          {pairs.map((pair, index) => (
            <motion.div
              key={pair.seed}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="grid gap-2 border-b border-neutral-200 py-6 md:grid-cols-2 md:gap-12 md:py-7"
            >
              <p className="text-sm leading-relaxed text-neutral-400 md:text-[15px]">
                <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400 md:hidden">
                  {content.leftTitle}
                </span>
                {pair.typical}
              </p>
              <p className="text-sm font-medium leading-relaxed text-neutral-900 md:text-[15px]">
                <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.18em] text-brand-accent-dark md:hidden">
                  {content.rightTitle}
                </span>
                {pair.seed}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-12">
          {content.bridgeHighlights.map((item, index) => (
            <BridgeHighlight key={item.title} item={item} index={index} />
          ))}
        </div>

        <div className="mt-14 md:mt-16">
          <PlaybookCallout href="/contact" />
        </div>
      </div>
    </section>
  );
}

function BridgeHighlight({
  item,
  index,
}: {
  item: AboutBridgeHighlight;
  index: number;
}): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="text-left"
    >
      <p className="mb-3 font-mono text-xs tracking-widest text-brand-accent-dark/70">
        0{index + 1}
      </p>
      <h4 className="mb-2 text-base font-semibold text-neutral-900 md:text-lg">
        {item.title}
      </h4>
      <p className="text-sm leading-relaxed text-neutral-500">{item.body}</p>
    </motion.div>
  );
}

'use client';

import React from "react";
import { motion } from "motion/react";
import { AsSeenInTicker } from "@/components/seed/AsSeenInTicker";
import { AboutCultureContent } from "@/lib/seed-types";
import { PRESS_PUBLICATIONS } from "@/lib/seed-data";

interface AboutCultureSectionProps {
  content: AboutCultureContent;
}

export function AboutCultureSection({
  content,
}: AboutCultureSectionProps): React.ReactElement {
  return (
    <section className="bg-[#f7f7f5]">
      <div className="border-t border-neutral-200">
        <AsSeenInTicker publications={PRESS_PUBLICATIONS} />
      </div>

      <div className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="text-left lg:col-span-5 lg:sticky lg:top-28"
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
                {content.eyebrow}
              </p>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
                {content.title}{" "}
                <span className="text-brand-accent">{content.highlight}</span>
              </h2>
              <p className="text-lg leading-relaxed text-neutral-600">
                {content.intro}
              </p>
            </motion.div>

            <div className="space-y-4 lg:col-span-7">
              {content.pillars.map((pillar, index) => (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-2xl border border-neutral-200 bg-white p-5 md:p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900 md:text-xl">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600 md:text-[15px]">
                    {pillar.body}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

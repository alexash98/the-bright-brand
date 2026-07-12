'use client';

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { AsSeenInTicker } from "@/components/seed/AsSeenInTicker";
import { AskAiAboutBrand } from "@/components/seed/AskAiAboutBrand";
import { ServiceQuoteSlider } from "@/components/seed/ServiceQuoteSlider";
import { getServiceIcon } from "@/lib/service-icons";
import { ServiceCard } from "@/lib/seed-types";
import { PRESS_PUBLICATIONS, SERVICE_HIGHLIGHT_QUOTES } from "@/lib/seed-data";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

interface ServicesProps {
  services: ServiceCard[];
  variant?: "homepage" | "standalone";
}

export const Services: React.FC<ServicesProps> = ({
  services,
  variant = "homepage",
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animateCards = variant === "standalone" && !prefersReducedMotion;

  const renderIcon = (name: string) => {
    const IconComponent = getServiceIcon(name);

    return (
      <IconComponent className="h-6 w-6 text-brand-accent transition-transform duration-300 group-hover:scale-110" />
    );
  };

  const renderServiceCard = (service: ServiceCard, index: number) => {
    const card = (
      <Link
        href={service.linkUrl}
        className="group relative flex h-full flex-col justify-between rounded-xl border border-neutral-200 bg-neutral-50 p-8 transition-all duration-300 hover:border-brand-accent/20 hover:bg-white hover:shadow-[0_8px_30px_rgba(232,184,75,0.08)]"
      >
        <div>
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-white transition-all duration-300 group-hover:border-brand-accent/35 group-hover:bg-brand-accent/10">
            {renderIcon(service.iconName)}
          </div>

          <h3 className="mb-3 text-xl font-semibold text-neutral-900 transition-colors duration-200 group-hover:text-brand-accent">
            {service.title}
          </h3>

          <p className="mb-6 text-sm leading-relaxed text-neutral-600 md:text-base">
            {service.description}
          </p>
        </div>

        <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-neutral-500 transition-colors group-hover:text-brand-accent">
          <span>Core service parameters</span>
          <ArrowRight className="h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </Link>
    );

    if (!animateCards) {
      return (
        <div key={service.id} className="h-full">
          {card}
        </div>
      );
    }

    return (
      <motion.div
        key={service.id}
        className="h-full"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.75,
          delay: index * 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {card}
      </motion.div>
    );
  };

  return (
    <section
      id="services"
      className={`relative bg-white pb-0 ${
        variant === "homepage"
          ? "border-t border-neutral-200 pt-24"
          : "pt-16"
      }`}
    >
      <div
        className={`relative z-10 mx-auto max-w-7xl px-4 md:px-8 ${
          variant === "homepage" ? "pb-24" : "pb-16"
        }`}
      >
        {variant === "homepage" ? (
          <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="max-w-3xl text-left">
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
                Performance marketing built around your funnel, not our playbook.
              </h2>
              <p className="text-lg leading-relaxed text-neutral-600">
                We integrate organic search, high-volume paid media, and conversion rate optimisation under a single data-aligned strategy, with attribution built in to prove what drives revenue.
              </p>
              <AskAiAboutBrand className="mt-8" />
            </div>

            <ServiceQuoteSlider quotes={SERVICE_HIGHLIGHT_QUOTES} />
          </div>
        ) : (
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Our approach
            </p>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              One integrated strategy across every channel.
            </h2>
            <p className="text-lg leading-relaxed text-neutral-600">
              We integrate organic search, high-volume paid media, and conversion rate optimisation under a single data-aligned strategy, with attribution built in to prove what drives revenue.
            </p>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => renderServiceCard(service, index))}
        </div>
      </div>

      {variant === "homepage" ? (
        <AsSeenInTicker publications={PRESS_PUBLICATIONS} />
      ) : null}
    </section>
  );
};

'use client';

import React from "react";
import {
  ArrowRight,
  BarChart3,
  HelpCircle,
  Megaphone,
  MousePointerClick,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { AsSeenInTicker } from "@/components/seed/AsSeenInTicker";
import { ServiceQuoteSlider } from "@/components/seed/ServiceQuoteSlider";
import { ServiceCard } from "@/lib/seed-types";
import { PRESS_PUBLICATIONS, SERVICE_HIGHLIGHT_QUOTES } from "@/lib/seed-data";

const SERVICE_ICONS = {
  Search,
  MousePointerClick,
  Megaphone,
  Users,
  Sparkles,
  BarChart3,
} as const;

interface ServicesProps {
  services: ServiceCard[];
}

export const Services: React.FC<ServicesProps> = ({ services }) => {
  const renderIcon = (name: string) => {
    const IconComponent =
      SERVICE_ICONS[name as keyof typeof SERVICE_ICONS] ?? HelpCircle;

    return (
      <IconComponent className="h-6 w-6 text-brand-accent transition-transform duration-300 group-hover:scale-110" />
    );
  };

  const renderServiceCard = (service: ServiceCard) => (
    <div
      key={service.id}
      className="group relative flex flex-col justify-between rounded-xl border border-neutral-200 bg-neutral-50 p-8 transition-all duration-300 hover:border-brand-accent/20 hover:bg-white hover:shadow-[0_8px_30px_rgba(232,184,75,0.08)]"
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
    </div>
  );

  return (
    <section id="services" className="relative border-t border-neutral-200 bg-white pt-24 pb-0">
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 md:px-8">
        <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="max-w-3xl text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
              Our Services
            </p>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              Growth marketing built around your funnel, not just our playbook.
            </h2>
            <p className="text-lg leading-relaxed text-neutral-600">
              We integrate organic search, high-volume paid media, creator-led social campaigns, and authoritative public relations under a single data-aligned strategy.
            </p>
          </div>

          <ServiceQuoteSlider quotes={SERVICE_HIGHLIGHT_QUOTES} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(renderServiceCard)}
        </div>
      </div>

      <AsSeenInTicker publications={PRESS_PUBLICATIONS} />
    </section>
  );
};

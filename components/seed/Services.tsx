'use client';

import React from "react";
import * as Icons from "lucide-react";
import { AsSeenInTicker } from "@/components/seed/AsSeenInTicker";
import { ServiceCard } from "@/lib/seed-types";
import { PRESS_PUBLICATIONS } from "@/lib/seed-data";

interface ServicesProps {
  services: ServiceCard[];
}

export const Services: React.FC<ServicesProps> = ({ services }) => {
  const renderIcon = (name: string) => {
    const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
    if (IconComponent) {
      return <IconComponent className="h-6 w-6 text-brand-accent group-hover:scale-110 transition-transform duration-300" />;
    }
    return <Icons.HelpCircle className="h-6 w-6 text-brand-accent" />;
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
        <Icons.ArrowRight className="h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </div>
  );

  return (
    <section id="services" className="relative border-t border-neutral-200 bg-white py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 max-w-3xl text-left">
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(renderServiceCard)}
        </div>

        <AsSeenInTicker publications={PRESS_PUBLICATIONS} />
      </div>
    </section>
  );
};

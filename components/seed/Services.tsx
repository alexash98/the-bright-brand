'use client';

import React from "react";
import * as Icons from "lucide-react";
import { ServiceCard } from "@/lib/seed-types";

interface ServicesProps {
  services: ServiceCard[];
}

export const Services: React.FC<ServicesProps> = ({ services }) => {
  // Safe helper to render Lucide Icons dynamically based on string name
  const renderIcon = (name: string) => {
    const IconComponent = (Icons as any)[name];
    if (IconComponent) {
      return <IconComponent className="h-6 w-6 text-brand-accent group-hover:scale-110 transition-transform duration-300" />;
    }
    return <Icons.HelpCircle className="h-6 w-6 text-brand-accent" />;
  };

  return (
    <section id="services" className="py-24 bg-brand-bg-darker relative border-t border-brand-teal-light/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-brand-accent),transparent_60%)] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-4">
            Our Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Growth marketing built around your funnel, not just our playbook.
          </h2>
          <p className="text-brand-text-pale/80 text-lg leading-relaxed">
            We integrate organic search, high-volume paid media, creator-led social campaigns, and authoritative public relations under a single data-aligned strategy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-brand-bg hover:bg-brand-bg-card border border-brand-teal-light/10 hover:border-brand-accent/20 rounded-xl p-8 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(91,159,255,0.08)]"
            >
              {/* Card Accent Glow */}
              <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-brand-accent/0 group-hover:bg-brand-accent/5 blur-xl transition-all duration-300 pointer-events-none" />

              <div>
                <div className="h-12 w-12 rounded-xl bg-brand-bg-darker border border-brand-teal-light/20 flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 group-hover:border-brand-accent/35 transition-all duration-300">
                  {renderIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-brand-text-pale/75 text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-text-pale/60 group-hover:text-brand-accent transition-colors mt-auto">
                <span>Core service parameters</span>
                <Icons.ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1 duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

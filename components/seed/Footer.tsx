'use client';

import React from "react";
import Image from "next/image";
import { useScrollToSection } from "@/components/seed/SmoothScrollProvider";

const PARTNER_LOGOS = [
  {
    src: "/partner-logos/shopify-partners.png",
    alt: "Shopify Partners",
    width: 466,
    height: 75,
    scale: 1.3,
  },
  {
    src: "/partner-logos/monday-partner.png",
    alt: "monday.com Certified Partner",
    width: 480,
    height: 126,
  },
  {
    src: "/partner-logos/google-partner.png",
    alt: "Google Partner",
    width: 497,
    height: 195,
  },
  {
    src: "/partner-logos/apollo-partner.png",
    alt: "Apollo Partner",
    width: 608,
    height: 196,
  },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const scrollToSection = useScrollToSection();

  return (
    <footer className="border-t border-white/10 bg-brand-bg-darker px-4 py-16 text-left text-neutral-400 md:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 grid grid-cols-2 items-center gap-x-6 gap-y-8 border-b border-white/10 pb-10 sm:grid-cols-4 sm:gap-x-4 md:pb-12 md:gap-x-6">
          {PARTNER_LOGOS.map((logo) => (
            <div
              key={logo.src}
              className="flex items-center justify-center px-1"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                unoptimized
                className={`h-auto max-h-10 w-full max-w-[128px] object-contain object-center sm:max-h-11 sm:max-w-[140px] md:max-h-12 md:max-w-[152px] ${
                  logo.scale === 1.3 ? "scale-[1.3]" : ""
                }`}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          <div className="border-b border-white/10 pb-8 md:border-b-0 md:pb-0">
            <button
              type="button"
              onClick={() => scrollToSection("hero")}
              className="group flex cursor-pointer items-center"
            >
              <Image
                src="/seed-logo.png"
                alt="Seed"
                width={120}
                height={48}
                className="h-11 w-auto transition-opacity duration-200 group-hover:opacity-80 sm:h-12"
              />
            </button>
            <div className="mt-6 space-y-2 text-sm font-medium text-neutral-300">
              <a
                href="mailto:alex@thebrightbrand.com"
                className="block transition-colors hover:text-brand-accent"
              >
                alex@thebrightbrand.com
              </a>
              <p>124 City Road, London, EC1V 2NX</p>
              <p className="text-xs text-neutral-500">Global clientbase</p>
            </div>
          </div>

          <div className="border-b border-white/10 pb-8 md:border-b-0 md:pb-0">
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Our Services
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "SEO",
                "PPC",
                "Paid Social",
                "Paid Media",
                "Digital PR",
                "CRO/UX",
                "Creative",
                "Analytics",
                "CRM",
              ].map((service) => (
                <button
                  key={service}
                  onClick={() => scrollToSection("services")}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-sans text-xs font-bold text-neutral-300 transition-all duration-200 hover:border-brand-accent/30 hover:bg-brand-accent hover:text-brand-bg-darker"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className="border-b border-white/10 pb-8 md:border-b-0 md:pb-0">
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Agency
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "About", id: "about" },
                { label: "Careers", id: "about" },
                { label: "Sectors", id: "services" },
                { label: "Podcast", id: "testimonials" },
                { label: "Work", id: "work" },
                { label: "Articles", id: "work" },
                { label: "Impact", id: "playbook" },
                { label: "Transparency", id: "playbook" },
                { label: "Contact", id: "enquire" },
              ].map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(link.id)}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-sans text-xs font-bold text-neutral-300 transition-colors duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs font-medium text-neutral-500">
          <p>
            Seed is a trading name of Seed Publicity Ltd. Company number 9526599.
            Certified B Corporation© {currentYear}.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="cursor-pointer transition-colors hover:text-neutral-300">
              Brand Guidelines
            </span>
            <span className="cursor-pointer transition-colors hover:text-neutral-300">
              AI and LLM Info
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

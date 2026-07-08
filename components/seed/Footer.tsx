'use client';

import React from "react";
import { useScrollToSection } from "@/components/seed/SmoothScrollProvider";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const scrollToSection = useScrollToSection();

  return (
    <footer className="border-t border-neutral-200 bg-white px-4 py-16 text-left text-neutral-600 md:px-8">
      <div className="container mx-auto px-0 md:px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">
          {/* Logo & Contact details */}
          <div className="border-b border-neutral-200 pb-8 md:border-b-0 md:pb-0">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-extrabold tracking-tighter text-neutral-900">Seed<span className="text-brand-accent">™</span></span>
              <span className="rounded-sm border border-brand-accent/20 bg-brand-accent/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-brand-accent">B Corp™</span>
            </div>
            <div className="mt-6 space-y-2 text-sm font-medium">
              <p className="cursor-pointer transition-colors hover:text-brand-accent">enquiries@helloseed.co.uk</p>
              <p>Pavilion View, Brighton, BN1 1UF</p>
              <p className="text-xs text-neutral-400">Brighton HQ, UK & Global Clients</p>
            </div>
          </div>

          {/* Services Links */}
          <div className="border-b border-neutral-200 pb-8 md:border-b-0 md:pb-0">
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
                "CRM"
              ].map((service) => (
                <button
                  key={service}
                  onClick={() => scrollToSection("services")}
                  className="rounded-full bg-neutral-50 px-3.5 py-1.5 font-sans text-xs font-bold text-neutral-700 transition-all duration-200 hover:bg-brand-accent hover:text-brand-bg-darker"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Agency Links */}
          <div className="border-b border-neutral-200 pb-8 md:border-b-0 md:pb-0">
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
                { label: "Contact", id: "enquire" }
              ].map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(link.id)}
                  className="rounded-full bg-neutral-50 px-3.5 py-1.5 font-sans text-xs font-bold text-neutral-700 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-900"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Partner Badges & Follow */}
          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Partners
            </h4>
            <div className="mb-6 flex flex-wrap gap-2">
              {["Google Partner", "Meta Partner", "Microsoft Partner"].map((p, idx) => (
                <span
                  key={idx}
                  className="rounded border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] font-bold text-neutral-600 transition-colors hover:border-brand-accent/40 hover:text-brand-accent"
                >
                  {p}
                </span>
              ))}
            </div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Follow Us
            </h4>
            <div className="flex gap-4 text-sm font-bold">
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-600 transition-colors hover:text-brand-accent"
              >
                Spotify
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-600 transition-colors hover:text-brand-accent"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-600 transition-colors hover:text-brand-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Branding copyright */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-xs font-medium text-neutral-400">
          <p>
            Seed is a trading name of Seed Publicity Ltd. Company number 9526599. Certified B Corporation© {currentYear}.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="cursor-pointer transition-colors hover:text-neutral-600">Brand Guidelines</span>
            <span className="cursor-pointer transition-colors hover:text-neutral-600">AI and LLM Info</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

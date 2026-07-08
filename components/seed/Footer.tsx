'use client';

import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-teal-light/20 bg-brand-bg-darker py-16 px-4 md:px-8 text-left text-brand-text-pale/60">
      <div className="container mx-auto px-0 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Contact details */}
          <div className="border-b border-brand-teal-light/10 pb-8 md:border-b-0 md:pb-0">
            <div className="flex items-center gap-3">
              <span className="font-extrabold text-white text-2xl tracking-tighter">Seed<span className="text-brand-accent">™</span></span>
              <span className="bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-sm">B Corp™</span>
            </div>
            <div className="mt-6 space-y-2 text-sm font-medium">
              <p className="hover:text-brand-accent transition-colors cursor-pointer">enquiries@helloseed.co.uk</p>
              <p>Pavilion View, Brighton, BN1 1UF</p>
              <p className="text-xs text-brand-text-pale/40">Brighton HQ, UK & Global Clients</p>
            </div>
          </div>

          {/* Services Links */}
          <div className="border-b border-brand-teal-light/10 pb-8 md:border-b-0 md:pb-0">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-brand-accent mb-4 font-bold">
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
                  onClick={() => {
                    const el = document.getElementById("services");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-brand-bg hover:bg-brand-accent hover:text-brand-bg-darker text-white rounded-full px-3.5 py-1.5 text-xs font-sans font-bold transition-all duration-200"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Agency Links */}
          <div className="border-b border-brand-teal-light/10 pb-8 md:border-b-0 md:pb-0">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-brand-accent mb-4 font-bold">
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
                  onClick={() => {
                    const el = document.getElementById(link.id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-brand-bg hover:bg-brand-bg-card text-white rounded-full px-3.5 py-1.5 text-xs font-sans font-bold transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Partner Badges & Follow */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-brand-accent mb-4 font-bold">
              Partners
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Google Partner", "Meta Partner", "Microsoft Partner"].map((p, idx) => (
                <span
                  key={idx}
                  className="bg-brand-bg border border-brand-teal-light/25 rounded px-2.5 py-1 text-[11px] font-bold text-brand-text-pale hover:border-brand-accent/40 hover:text-brand-accent transition-colors"
                >
                  {p}
                </span>
              ))}
            </div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-brand-accent mb-4 font-bold">
              Follow Us
            </h4>
            <div className="flex gap-4 text-sm font-bold">
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-accent transition-colors"
              >
                Spotify
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-accent transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-accent transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Branding copyright */}
        <div className="mt-12 pt-6 border-t border-brand-teal-light/10 flex items-center justify-between gap-4 flex-wrap text-xs text-brand-text-pale/40 font-medium">
          <p>
            Seed is a trading name of Seed Publicity Ltd. Company number 9526599. Certified B Corporation© {currentYear}.
          </p>
          <div className="flex gap-4 flex-wrap">
            <span className="hover:text-brand-text-pale/60 transition-colors cursor-pointer">Brand Guidelines</span>
            <span className="hover:text-brand-text-pale/60 transition-colors cursor-pointer">AI and LLM Info</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

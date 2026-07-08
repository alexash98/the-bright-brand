'use client';

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NavItem } from "@/lib/seed-types";
import { useScrollToSection } from "@/components/seed/SmoothScrollProvider";

interface HeaderProps {
  navItems: NavItem[];
}

export const Header: React.FC<HeaderProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <nav id="navbar" className="fixed top-0 z-50 w-full bg-[#1f1f22]/95 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 md:px-8">
          <div className="flex items-center">
            {/* Seed Brand logo */}
            <div 
              onClick={() => handleScrollTo("hero")} 
              className="group flex cursor-pointer items-center"
            >
              <Image
                src="/seed-logo.png"
                alt="Seed"
                width={120}
                height={48}
                priority
                className="h-11 w-auto transition-opacity duration-200 group-hover:opacity-80 sm:h-12"
              />
            </div>
          </div>

          <div className="flex gap-8 items-center">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleScrollTo(item.url.replace("/", ""))}
                  className="text-[13px] font-semibold text-brand-text-pale/80 transition-colors duration-200 hover:text-brand-accent"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA button */}
            <div className="hidden md:block">
              <button 
                onClick={() => handleScrollTo("enquire")}
                className="inline-flex h-10 transform items-center gap-2 rounded-full bg-brand-accent px-5 text-[13px] font-bold text-brand-bg-darker shadow-lg shadow-brand-accent/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-accent-hover active:translate-y-0"
              >
                Enquire Now
                <ArrowUpRight className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-text-pale/80 hover:text-brand-accent md:hidden transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 z-40 flex flex-col gap-8 bg-[#1f1f22]/98 px-6 py-10 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleScrollTo(item.url.replace("/", ""))}
                  className="border-b border-brand-teal-light/10 py-2 text-left text-lg font-bold text-brand-text-pale/80 transition-colors hover:text-brand-accent"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleScrollTo("enquire")}
              className="w-full rounded-full bg-brand-accent py-3 text-center text-sm font-bold text-brand-bg-darker transition-all active:scale-[0.98]"
            >
              Enquire Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

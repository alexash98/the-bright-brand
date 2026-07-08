'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NavItem } from "@/lib/seed-types";

interface HeaderProps {
  navItems: NavItem[];
}

export const Header: React.FC<HeaderProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav id="navbar" className="fixed w-full top-0 z-50 bg-brand-bg-darker/90 backdrop-blur-md border-b border-brand-teal-light/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 md:px-8">
          <div className="flex gap-6 items-center">
            {/* Seed Brand logo */}
            <div 
              onClick={() => handleScrollTo("hero")} 
              className="flex items-center gap-2 cursor-pointer group"
            >
              <span className="text-2xl font-bold tracking-tight text-white group-hover:text-brand-accent transition-colors">
                Seed<span className="text-brand-accent font-extrabold">™</span>
              </span>
            </div>

            {/* B-Corp Badge */}
            <div className="flex items-center gap-1.5 bg-brand-bg-card border border-brand-accent/20 px-2.5 py-1 rounded-sm">
              <span className="text-[10px] font-bold text-white tracking-widest uppercase">
                B Corp
              </span>
              <span className="h-2 w-2 rounded-full bg-brand-accent animate-pulse"></span>
            </div>
          </div>

          <div className="flex gap-8 items-center">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleScrollTo(item.url.replace("/", ""))}
                  className="font-semibold text-sm text-brand-text-pale/80 hover:text-brand-accent transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA button */}
            <div className="hidden md:block">
              <button 
                onClick={() => handleScrollTo("enquire")}
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-bg-darker text-sm font-bold rounded-full h-11 px-6 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-brand-accent/10"
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
            className="fixed inset-0 z-40 top-20 bg-brand-bg-darker/98 backdrop-blur-lg border-b border-brand-teal-light/20 md:hidden flex flex-col px-6 py-10 gap-8"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleScrollTo(item.url.replace("/", ""))}
                  className="text-left text-xl font-bold text-brand-text-pale/80 hover:text-brand-accent transition-colors py-2 border-b border-brand-teal-light/10"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleScrollTo("enquire")}
              className="w-full text-center bg-brand-accent text-brand-bg-darker font-bold py-3.5 rounded-full text-base active:scale-[0.98] transition-all"
            >
              Enquire Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

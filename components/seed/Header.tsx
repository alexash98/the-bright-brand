'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NavItem } from "@/lib/seed-types";
import { useScrollToSection, useScrollToTop } from "@/components/seed/SmoothScrollProvider";
import {
  getEnquireHref,
  getHomepageSectionId,
  getNavHref,
  shouldScrollOnHomepage,
} from "@/lib/nav";

interface HeaderProps {
  navItems: NavItem[];
}

const navLinkClassName =
  "inline-flex min-h-11 items-center text-[13px] font-semibold text-brand-text-pale/90 transition-colors duration-200 hover:text-brand-accent";

const mobileNavLinkClassName =
  "inline-flex min-h-11 items-center border-b border-brand-teal-light/10 py-2 text-left text-lg font-bold text-brand-text-pale/90 transition-colors hover:text-brand-accent";

export const Header: React.FC<HeaderProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const scrollToSection = useScrollToSection();
  const scrollToTop = useScrollToTop();

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  const renderNavItem = (item: NavItem, className: string) => {
    if (shouldScrollOnHomepage(item, pathname)) {
      return (
        <button
          key={item.label}
          type="button"
          onClick={() => handleScrollTo(getHomepageSectionId(item))}
          className={className}
        >
          {item.label}
        </button>
      );
    }

    return (
      <Link
        key={item.label}
        href={getNavHref(item)}
        onClick={() => setIsOpen(false)}
        className={className}
      >
        {item.label}
      </Link>
    );
  };

  const enquireHref = getEnquireHref();
  const isOnContactPage = pathname === "/contact";

  const handleHomeClick = (): void => {
    setIsOpen(false);

    if (pathname === "/") {
      scrollToTop();
    }
  };

  return (
    <>
      <nav id="navbar" className="fixed top-0 z-50 w-full bg-[#1f1f22]/95 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 md:px-8">
          <div className="flex items-center">
            <Link href="/" onClick={handleHomeClick} className="group flex cursor-pointer items-center">
              <Image
                src="/seed-logo.png"
                alt="Seed"
                width={120}
                height={48}
                priority
                unoptimized
                className="h-11 w-auto transition-opacity duration-200 group-hover:opacity-80 sm:h-12"
              />
            </Link>
          </div>

          <div className="flex gap-8 items-center">
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => renderNavItem(item, navLinkClassName))}
            </div>

            <div className="hidden md:block">
              {isOnContactPage ? (
                <button
                  type="button"
                  onClick={() => handleScrollTo("enquire")}
                  className="inline-flex h-10 transform items-center gap-2 rounded-full bg-brand-accent px-5 text-[13px] font-bold text-brand-bg-darker shadow-lg shadow-brand-accent/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-accent-hover active:translate-y-0"
                >
                  Enquire Now
                  <ArrowUpRight className="h-4.5 w-4.5" />
                </button>
              ) : (
                <Link
                  href={enquireHref}
                  className="inline-flex h-10 transform items-center gap-2 rounded-full bg-brand-accent px-5 text-[13px] font-bold text-brand-bg-darker shadow-lg shadow-brand-accent/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-accent-hover active:translate-y-0"
                >
                  Enquire Now
                  <ArrowUpRight className="h-4.5 w-4.5" />
                </Link>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-11 w-11 items-center justify-center text-brand-text-pale/90 transition-colors hover:text-brand-accent md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

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
              {navItems.map((item) => renderNavItem(item, mobileNavLinkClassName))}
            </div>

            {isOnContactPage ? (
              <button
                type="button"
                onClick={() => handleScrollTo("enquire")}
                className="w-full rounded-full bg-brand-accent py-3 text-center text-sm font-bold text-brand-bg-darker transition-all active:scale-[0.98]"
              >
                Enquire Now
              </button>
            ) : (
              <Link
                href={enquireHref}
                onClick={() => setIsOpen(false)}
                className="w-full rounded-full bg-brand-accent py-3 text-center text-sm font-bold text-brand-bg-darker transition-all active:scale-[0.98]"
              >
                Enquire Now
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

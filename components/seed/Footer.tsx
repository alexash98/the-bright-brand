'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollToTop } from "@/components/seed/SmoothScrollProvider";
import { AskAiAboutBrand } from "@/components/seed/AskAiAboutBrand";
import { CONTACT } from "@/lib/contact";

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

// Quick Links match the live footer exactly: home, services, case studies,
// contact, Odal, plus blog. No Careers or per-service anchors (not on live).
const QUICK_LINKS: Array<{ label: string; href: string; external?: boolean }> = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Odal", href: "https://www.odal.io/", external: true },
];

const FOOTER_LINK_CLASS =
  "text-neutral-300 transition-colors duration-200 hover:text-white";

function FooterInlineLinks({
  items,
}: {
  items: Array<{ label: string; href: string; external?: boolean }>;
}): React.ReactElement {
  return (
    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 text-sm leading-relaxed">
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          {index > 0 ? (
            <span aria-hidden="true" className="select-none text-white/15">
              /
            </span>
          ) : null}
          {item.external ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={FOOTER_LINK_CLASS}
            >
              {item.label}
            </a>
          ) : (
            <Link href={item.href} className={FOOTER_LINK_CLASS}>
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const scrollToTop = useScrollToTop();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-brand-bg-darker px-4 py-16 text-left text-neutral-400 md:px-8">
      <div className="relative z-10 mx-auto w-full max-w-7xl">
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div className="border-b border-white/10 pb-8 md:border-b-0 md:pb-0">
            <div className="space-y-2 text-sm font-medium text-neutral-300">
              <Link
                href="/"
                onClick={() => {
                  if (pathname === "/") {
                    scrollToTop();
                  }
                }}
                className="group mb-3 inline-flex sm:mb-4"
              >
                <Image
                  src="/seed-logo.png"
                  alt="The Bright Brand"
                  width={120}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  unoptimized
                  className="h-10 w-auto transition-opacity duration-200 group-hover:opacity-80 sm:h-11"
                />
              </Link>
              <p>
                {CONTACT.address.line1}, {CONTACT.address.line2}
              </p>
              <p className="text-xs text-neutral-400">Global clientbase</p>
            </div>
          </div>

          <div className="border-b border-white/10 pb-8 md:border-b-0 md:pb-0">
            <h2 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Quick Links
            </h2>
            <FooterInlineLinks items={QUICK_LINKS} />
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <AskAiAboutBrand theme="dark" layout="bar" />
        </div>
      </div>
    </footer>
  );
};

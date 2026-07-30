"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/contact";

const HOLD_MS = 3800;

const avatarVariants = {
  enter: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 320,
      damping: 22,
      mass: 0.8,
    },
  },
  leave: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.22,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

const nameVariants = {
  enter: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.06 },
  },
  leave: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] as const },
  },
};

interface EnquiryHostBadgeProps {
  className?: string;
}

export function EnquiryHostBadge({
  className,
}: EnquiryHostBadgeProps): React.ReactElement {
  const hosts = CONTACT.hosts;
  const [index, setIndex] = useState(0);
  const host = hosts[index] ?? hosts[0];

  useEffect(() => {
    if (hosts.length < 2) return;

    const id = window.setInterval(() => {
      setIndex((c) => (c + 1) % hosts.length);
    }, HOLD_MS);

    return () => window.clearInterval(id);
  }, [hosts.length]);

  return (
    <div className={`flex items-center gap-3.5 ${className ?? ""}`.trim()}>
      <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14">
        {/* Avatar circle — clips overflow so scale-down looks clean */}
        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.10)] ring-2 ring-white">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={host.name}
              variants={avatarVariants}
              initial="enter"
              animate="visible"
              exit="leave"
              className="h-full w-full overflow-hidden rounded-full"
            >
              <Image
                src={host.avatarSrc}
                alt={host.avatarAlt}
                width={112}
                height={112}
                sizes="56px"
                className="h-full w-full object-cover object-[center_18%]"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Online dot — sits outside the avatar clip, always visible */}
        <span
          className="pointer-events-none absolute -bottom-0.5 -right-0.5 z-20 flex h-4 w-4 items-center justify-center rounded-full bg-white sm:h-[18px] sm:w-[18px]"
          aria-hidden="true"
        >
          <span className="relative flex h-2.5 w-2.5 items-center justify-center sm:h-3 sm:w-3">
            <span className="absolute inset-0 rounded-full bg-emerald-500/45 motion-safe:animate-[online-pulse-ring_1.8s_ease-out_infinite] motion-reduce:animate-none" />
            <span className="relative block h-full w-full rounded-full bg-emerald-500" />
          </span>
        </span>
      </div>

      <div className="min-w-0 text-left">
        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-600">
          <span
            className="relative flex h-1.5 w-1.5 shrink-0"
            aria-hidden="true"
          >
            <span className="absolute inset-0 rounded-full bg-emerald-500/45 motion-safe:animate-[online-pulse-ring_1.8s_ease-out_infinite] motion-reduce:animate-none" />
            <span className="relative block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          {CONTACT.onlineLabel}
        </p>

        <div className="relative mt-0.5 h-5 overflow-hidden" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={host.name}
              variants={nameVariants}
              initial="enter"
              animate="visible"
              exit="leave"
              className="absolute inset-x-0 top-0 truncate text-sm font-semibold text-neutral-900"
            >
              {host.name}
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="truncate text-xs text-neutral-500">
          {CONTACT.responseTime}
        </p>
      </div>
    </div>
  );
}

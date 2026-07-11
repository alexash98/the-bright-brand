'use client';

import React from "react";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0.94, filter: "blur(3px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.16, ease: [0.33, 1, 0.68, 1] }}
    >
      {children}
    </motion.div>
  );
}

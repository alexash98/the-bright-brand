'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Lenis from "lenis";

const HEADER_OFFSET = -80;

type ScrollToSection = (id: string) => void;

const SmoothScrollContext = createContext<ScrollToSection | null>(null);

export function useScrollToSection(): ScrollToSection {
  const scrollTo = useContext(SmoothScrollContext);

  return useCallback(
    (id: string) => {
      const element = document.getElementById(id);

      if (!element) {
        return;
      }

      if (scrollTo) {
        scrollTo(id);
        return;
      }

      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.scrollBy(0, HEADER_OFFSET);
    },
    [scrollTo],
  );
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [scrollToSection, setScrollToSection] = useState<ScrollToSection | null>(
    null,
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    setScrollToSection(() => (id: string) => {
      const element = document.getElementById(id);

      if (!element) {
        return;
      }

      lenis.scrollTo(element, {
        offset: HEADER_OFFSET,
        duration: 1.1,
      });
    });

    let frameId = 0;

    const raf = (time: number): void => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    frameId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
      setScrollToSection(null);
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={scrollToSection}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

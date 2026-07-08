'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

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

    let frameId = 0;
    let lenisInstance: { destroy: () => void; raf: (time: number) => void; scrollTo: (element: HTMLElement, options: { offset: number; duration: number }) => void } | null = null;

    const init = async (): Promise<void> => {
      const { default: Lenis } = await import("lenis");

      lenisInstance = new Lenis({
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.1,
      });

      setScrollToSection(() => (id: string) => {
        const element = document.getElementById(id);

        if (!element || !lenisInstance) {
          return;
        }

        lenisInstance.scrollTo(element, {
          offset: HEADER_OFFSET,
          duration: 1.1,
        });
      });

      const raf = (time: number): void => {
        lenisInstance?.raf(time);
        frameId = window.requestAnimationFrame(raf);
      };

      frameId = window.requestAnimationFrame(raf);
    };

    void init();

    return () => {
      window.cancelAnimationFrame(frameId);
      lenisInstance?.destroy();
      setScrollToSection(null);
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={scrollToSection}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";

const HEADER_OFFSET = -80;

type ScrollToSection = (id: string) => void;

type LenisInstance = {
  destroy: () => void;
  raf: (time: number) => void;
  scrollTo: (
    target: number | HTMLElement,
    options?: { offset?: number; duration?: number; immediate?: boolean },
  ) => void;
};

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

function scrollToTop(lenisInstance: LenisInstance | null): void {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true });
    return;
  }

  window.scrollTo(0, 0);
}

function scrollToHash(lenisInstance: LenisInstance | null, hash: string): void {
  const element = document.getElementById(hash);

  if (!element) {
    scrollToTop(lenisInstance);
    return;
  }

  if (lenisInstance) {
    lenisInstance.scrollTo(element, {
      offset: HEADER_OFFSET,
      duration: 1.1,
    });
    return;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
  window.scrollBy(0, HEADER_OFFSET);
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const pathname = usePathname();
  const lenisRef = useRef<LenisInstance | null>(null);
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

    const init = async (): Promise<void> => {
      const { default: Lenis } = await import("lenis");

      const lenisInstance = new Lenis({
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.1,
      }) as LenisInstance;

      lenisRef.current = lenisInstance;

      setScrollToSection(() => (id: string) => {
        const element = document.getElementById(id);

        if (!element || !lenisRef.current) {
          return;
        }

        lenisRef.current.scrollTo(element, {
          offset: HEADER_OFFSET,
          duration: 1.1,
        });
      });

      const raf = (time: number): void => {
        lenisRef.current?.raf(time);
        frameId = window.requestAnimationFrame(raf);
      };

      frameId = window.requestAnimationFrame(raf);
    };

    void init();

    return () => {
      window.cancelAnimationFrame(frameId);
      lenisRef.current?.destroy();
      lenisRef.current = null;
      setScrollToSection(null);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");

    if (hash) {
      const frameId = window.requestAnimationFrame(() => {
        scrollToHash(lenisRef.current, hash);
      });

      return () => window.cancelAnimationFrame(frameId);
    }

    scrollToTop(lenisRef.current);
  }, [pathname]);

  return (
    <SmoothScrollContext.Provider value={scrollToSection}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

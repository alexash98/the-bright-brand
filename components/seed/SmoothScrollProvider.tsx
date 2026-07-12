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
type ScrollToTop = () => void;

type LenisInstance = {
  destroy: () => void;
  raf: (time: number) => void;
  scrollTo: (
    target: number | HTMLElement,
    options?: { offset?: number; duration?: number; immediate?: boolean },
  ) => void;
};

const SmoothScrollContext = createContext<ScrollToSection | null>(null);
const ScrollToTopContext = createContext<ScrollToTop | null>(null);

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

export function useScrollToTop(): ScrollToTop {
  const scrollToTop = useContext(ScrollToTopContext);

  return useCallback(() => {
    scrollToTop?.();
  }, [scrollToTop]);
}

function resetNativeScroll(): void {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function scrollToTop(lenisInstance: LenisInstance | null): void {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true });
  }

  resetNativeScroll();
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

function runAfterNavigation(
  lenisInstance: LenisInstance | null,
  action: () => void,
): () => void {
  action();

  const firstFrame = window.requestAnimationFrame(() => {
    action();

    window.requestAnimationFrame(() => {
      action();

      if (!lenisInstance) {
        window.setTimeout(action, 0);
      }
    });
  });

  return () => window.cancelAnimationFrame(firstFrame);
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
  const [scrollToTopHandler, setScrollToTopHandler] = useState<ScrollToTop | null>(
    null,
  );

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setScrollToTopHandler(() => () => scrollToTop(null));
      return;
    }

    let frameId = 0;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    const init = async (): Promise<void> => {
      if (cancelled) {
        return;
      }

      const { default: Lenis } = await import("lenis");

      if (cancelled) {
        return;
      }

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

      setScrollToTopHandler(() => () => scrollToTop(lenisRef.current));

      const raf = (time: number): void => {
        lenisRef.current?.raf(time);
        frameId = window.requestAnimationFrame(raf);
      };

      frameId = window.requestAnimationFrame(raf);
    };

    // Keep first paint free of Lenis; start after idle or a short delay.
    const scheduleInit = (): void => {
      void init();
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(scheduleInit, { timeout: 1800 });
    } else {
      timeoutId = window.setTimeout(scheduleInit, 400);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
      window.cancelAnimationFrame(frameId);
      lenisRef.current?.destroy();
      lenisRef.current = null;
      setScrollToSection(null);
      setScrollToTopHandler(() => () => scrollToTop(null));
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");

    if (hash) {
      return runAfterNavigation(lenisRef.current, () => {
        scrollToHash(lenisRef.current, hash);
      });
    }

    return runAfterNavigation(lenisRef.current, () => {
      scrollToTop(lenisRef.current);
    });
  }, [pathname]);

  return (
    <ScrollToTopContext.Provider value={scrollToTopHandler}>
      <SmoothScrollContext.Provider value={scrollToSection}>
        {children}
      </SmoothScrollContext.Provider>
    </ScrollToTopContext.Provider>
  );
}

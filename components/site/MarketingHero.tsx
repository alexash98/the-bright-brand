import React from "react";

interface MarketingHeroProps {
  children: React.ReactNode;
  aside?: React.ReactNode;
  footer?: React.ReactNode;
  asideAlign?: "center" | "start";
  /**
   * Homepage-style first screen: content fills the viewport on large screens,
   * with the logo ticker pinned to the bottom before the page scrolls.
   * Structurally identical to the homepage Hero component.
   */
  fullViewport?: boolean;
}

export function MarketingHero({
  children,
  aside,
  footer,
  asideAlign = "center",
  fullViewport = false,
}: MarketingHeroProps): React.ReactElement {
  const gridClass = aside
    ? `grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12 ${
        asideAlign === "start" ? "lg:items-start" : "lg:items-center"
      }`
    : "";

  if (fullViewport) {
    return (
      <section className="relative flex h-auto flex-col overflow-hidden bg-brand-bg-darker pt-20 lg:h-dvh lg:max-h-dvh">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-brand-accent/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 bottom-8 h-52 w-52 rounded-full bg-brand-accent/5 blur-3xl"
        />

        <div className="relative flex min-h-0 flex-1 overflow-hidden">
          <div className="relative z-10 mx-auto grid h-full min-h-0 w-full max-w-7xl grid-cols-1 gap-12 overflow-hidden px-4 py-8 md:px-8 lg:grid-cols-12 lg:items-stretch lg:gap-0 lg:py-0">
            <div className="flex min-h-0 flex-col items-start justify-center py-4 text-left lg:col-span-6 lg:py-6">
              {children}
            </div>
            {aside ? (
              <div className="relative hidden min-h-0 lg:col-span-6 lg:flex lg:items-center lg:justify-center lg:pl-6">
                {aside}
              </div>
            ) : null}
          </div>
        </div>

        {footer}
      </section>
    );
  }

  return (
    <section className="relative flex flex-col overflow-hidden bg-brand-bg-darker">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-brand-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-8 h-52 w-52 rounded-full bg-brand-accent/5 blur-3xl"
      />
      <div className="relative px-4 pb-14 pt-24 md:px-8 md:pb-16 md:pt-28">
        <div className={`mx-auto w-full max-w-7xl ${gridClass}`}>
          <div
            className={aside ? "text-left lg:col-span-7" : undefined}
          >
            {children}
          </div>
          {aside ? (
            <div className="lg:col-span-5 lg:col-start-8 lg:self-center">
              {aside}
            </div>
          ) : null}
        </div>
      </div>
      {footer}
    </section>
  );
}

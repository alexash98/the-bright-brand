import React from "react";

interface MarketingHeroProps {
  children: React.ReactNode;
  aside?: React.ReactNode;
  footer?: React.ReactNode;
}

export function MarketingHero({
  children,
  aside,
  footer,
}: MarketingHeroProps): React.ReactElement {
  return (
    <section className="flex flex-col bg-brand-bg-darker">
      <div className="flex min-h-[min(480px,52vh)] flex-col justify-center px-4 pb-20 pt-24 md:min-h-[min(560px,58vh)] md:px-8 md:pb-28 md:pt-28 lg:min-h-[min(620px,62vh)]">
        <div
          className={`mx-auto w-full max-w-7xl ${
            aside
              ? "grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-10"
              : ""
          }`}
        >
          <div className={aside ? "text-left lg:col-span-7" : ""}>
            {children}
          </div>
          {aside ? (
            <div className="lg:col-span-5 lg:col-start-8">
              {aside}
            </div>
          ) : null}
        </div>
      </div>
      {footer}
    </section>
  );
}

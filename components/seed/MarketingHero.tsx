import React from "react";

interface MarketingHeroProps {
  children: React.ReactNode;
}

export function MarketingHero({
  children,
}: MarketingHeroProps): React.ReactElement {
  return (
    <section className="flex min-h-[min(480px,52vh)] flex-col justify-center bg-brand-bg-darker px-4 pb-20 pt-24 md:min-h-[min(560px,58vh)] md:px-8 md:pb-28 md:pt-28 lg:min-h-[min(620px,62vh)]">
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

import type { ReactNode } from "react";

interface SectionIntroProps {
  children: ReactNode;
  className?: string;
}

/**
 * Shared intro stack so Outfit headings and Instrument Sans body share one left edge.
 */
export function SectionIntro({
  children,
  className = "",
}: SectionIntroProps): React.ReactElement {
  return (
    <header className={`section-intro text-left ${className}`.trim()}>
      {children}
    </header>
  );
}

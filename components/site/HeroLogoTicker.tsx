import { CssLogoMarquee } from "@/components/site/CssLogoMarquee";
import type { ClientLogo } from "@/lib/site-types";

interface HeroLogoTickerProps {
  logos: ClientLogo[];
  /** Force monochrome white marks (for platform logos on the dark band). */
  forceWhite?: boolean;
}

/** Dark hero logo band — CSS marquee, no client JS. */
export function HeroLogoTicker({
  logos,
  forceWhite = false,
}: HeroLogoTickerProps): React.ReactElement {
  return (
    <div className="relative z-20 w-full shrink-0 overflow-hidden bg-[#232327] py-6 select-none lg:py-7">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#232327] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#232327] to-transparent" />
      <CssLogoMarquee
        logos={logos}
        tone={forceWhite ? "dark" : "dark"}
        density="hero"
      />
    </div>
  );
}

import { CssLogoMarquee } from "@/components/site/CssLogoMarquee";
import type { ClientLogo } from "@/lib/site-types";

interface ClientLogoMarqueeProps {
  logos: ClientLogo[];
  /** Light band (default) or dark homepage-style ticker under a hero. */
  tone?: "light" | "dark";
  /**
   * `hero` matches homepage ticker thickness and logo gaps.
   * `default` keeps the larger content-band treatment.
   */
  density?: "default" | "hero";
}

/** Logo band — CSS marquee, no client JS. */
export function ClientLogoMarquee({
  logos,
  tone = "light",
  density = "default",
}: ClientLogoMarqueeProps): React.ReactElement {
  const dark = tone === "dark";
  const hero = density === "hero";

  return (
    <div
      className={
        dark
          ? "relative z-20 w-full shrink-0 overflow-hidden bg-[#232327] py-6 select-none lg:py-7"
          : hero
            ? "relative w-full overflow-hidden bg-white py-6 select-none"
            : "relative w-full overflow-hidden bg-white py-10 select-none md:py-12"
      }
    >
      {dark ? (
        <>
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#232327] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#232327] to-transparent" />
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />
        </>
      )}
      <CssLogoMarquee
        logos={logos}
        tone={dark ? "dark" : "light"}
        density={hero ? "hero" : "default"}
      />
    </div>
  );
}

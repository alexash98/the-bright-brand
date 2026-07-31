import Image from "next/image";
import type { ClientLogo } from "@/lib/site-types";

interface CssLogoMarqueeProps {
  logos: ClientLogo[];
  /** Dark band (white marks) or light band (black marks). */
  tone?: "dark" | "light";
  /** Hero strip thickness vs larger content band. */
  density?: "hero" | "default";
  className?: string;
}

const GAP = {
  hero: "gap-[46px] sm:gap-[54px] lg:gap-[62px]",
  /** Trailing pad matches gap so two groups loop seamlessly at -50%. */
  heroPad: "pr-[46px] sm:pr-[54px] lg:pr-[62px]",
  default: "gap-12 sm:gap-16 md:gap-20",
  defaultPad: "pr-12 sm:pr-16 md:pr-20",
} as const;

function LogoItem({
  logo,
  tone,
  density,
}: {
  logo: ClientLogo;
  tone: "dark" | "light";
  density: "hero" | "default";
}): React.ReactElement {
  const folder = logo.folder ?? "client-logos";
  const hero = density === "hero";
  const heightClass = hero
    ? "h-7"
    : (logo.heightClass ?? "h-[1.8rem] sm:h-[2.1rem]");
  const widthClass = hero ? "w-28" : (logo.widthClass ?? "w-[8.4rem]");
  const dark = tone === "dark";

  if (!logo.logo) {
    return (
      <div
        className={`flex shrink-0 items-center ${heightClass}`}
        style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
      >
        <span
          className={`whitespace-nowrap font-semibold tracking-tight ${
            hero ? "text-[15px] font-bold" : "text-[0.95rem] sm:text-base"
          } ${dark ? "text-white/90" : "text-neutral-800"}`}
        >
          {logo.name}
        </span>
      </div>
    );
  }

  const colorClass = dark
    ? "brightness-0 invert"
    : logo.preserveColors
      ? ""
      : "brightness-0";

  return (
    <div
      className={`relative shrink-0 ${heightClass} ${widthClass} ${
        dark ? "opacity-90" : "opacity-70"
      }`}
      style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
    >
      <Image
        src={`/${folder}/${logo.logo}`}
        alt={logo.name}
        fill
        sizes={hero ? "112px" : "168px"}
        loading="lazy"
        decoding="async"
        unoptimized
        className={`object-contain object-center ${colorClass}`}
      />
    </div>
  );
}

/**
 * Pure CSS logo strip. No Motion, ResizeObserver, or client hydration.
 * Duplicates the row once and translates -50% for a seamless loop.
 */
export function CssLogoMarquee({
  logos,
  tone = "dark",
  density = "hero",
  className,
}: CssLogoMarqueeProps): React.ReactElement {
  if (logos.length === 0) {
    return <></>;
  }

  const gapClass = density === "hero" ? GAP.hero : GAP.default;
  const padClass = density === "hero" ? GAP.heroPad : GAP.defaultPad;
  const durationSec = Math.max(48, logos.length * 5);

  return (
    <div className={`relative overflow-hidden select-none ${className ?? ""}`}>
      <div
        className="flex w-max will-change-transform [backface-visibility:hidden] motion-reduce:!animate-none"
        style={{
          animation: `logo-marquee ${durationSec}s linear infinite`,
        }}
      >
        <div className={`flex shrink-0 items-center ${gapClass} ${padClass}`}>
          {logos.map((logo) => (
            <LogoItem
              key={`a-${logo.key}`}
              logo={logo}
              tone={tone}
              density={density}
            />
          ))}
        </div>
        <div
          className={`flex shrink-0 items-center ${gapClass} ${padClass}`}
          aria-hidden
        >
          {logos.map((logo) => (
            <LogoItem
              key={`b-${logo.key}`}
              logo={logo}
              tone={tone}
              density={density}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

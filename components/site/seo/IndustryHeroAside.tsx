import { ArrowRight } from "lucide-react";
import type { IndustryHeroVisual } from "@/content/types";

interface IndustryHeroAsideProps {
  visual: IndustryHeroVisual;
}

export function IndustryHeroAside({
  visual,
}: IndustryHeroAsideProps): React.ReactElement {
  const isContrast =
    visual.variant === "contrast" &&
    Array.isArray(visual.contrastRows) &&
    visual.contrastRows.length > 0;

  if (isContrast) {
    const rows = visual.contrastRows!;
    const headers = visual.contrastHeaders ?? {
      left: "The ad account",
      right: "Your board",
    };

    return (
      <div className="relative">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          {visual.eyebrow}
        </p>
        <p className="mb-3 max-w-md text-xl font-semibold tracking-tight text-brand-text-pale md:text-2xl">
          {visual.title}
        </p>
        {visual.strapline ? (
          <p className="mb-5 text-sm leading-relaxed text-brand-text-pale/60">
            {visual.strapline}
          </p>
        ) : null}
        <div className="border-t border-brand-accent/20 pt-5">
          <div className="mb-3 grid grid-cols-[1fr_1.25rem_1fr] items-center gap-x-2">
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-brand-text-pale/50">
              {headers.left}
            </span>
            <span />
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-brand-text-pale/50">
              {headers.right}
            </span>
          </div>
          <div className="space-y-3">
            {rows.map((row) => (
              <div
                key={`${row.before}-${row.after}`}
                className="grid grid-cols-[1fr_1.25rem_1fr] items-center gap-x-2"
              >
                <span className="text-sm text-brand-text-pale/60">
                  {row.before}
                </span>
                <ArrowRight
                  className="h-3.5 w-3.5 shrink-0 text-brand-accent"
                  aria-hidden
                />
                <span className="text-sm font-semibold text-brand-accent">
                  {row.after}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
        {visual.eyebrow}
      </p>
      <p className="mb-6 max-w-md text-xl font-semibold tracking-tight text-brand-text-pale md:text-2xl">
        {visual.title}
      </p>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-brand-accent/20 pt-5">
        {(visual.stats ?? []).map((stat) => (
          <div key={stat.label}>
            <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-brand-text-pale/50">
              {stat.label}
            </dt>
            <dd className="mt-1 text-2xl font-semibold tabular-nums tracking-tight text-brand-accent">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

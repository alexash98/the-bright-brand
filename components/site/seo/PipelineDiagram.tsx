import type { PipelineStage } from "@/content/types";

export type { PipelineStage };

interface PipelineDiagramProps {
  eyebrow?: string;
  title?: string;
  caption?: string;
  stages: PipelineStage[];
  /** Stick beside long pipeline copy on large screens. */
  sticky?: boolean;
}

/**
 * Commercial stage list for industry pillars. Typography-led, no fake
 * flowchart chrome. Stages are rebuilt per client, not a live CRM snapshot.
 */
export function PipelineDiagram({
  eyebrow = "Pipeline stages",
  title = "How opportunities move",
  caption = "Stage labels we rebuild with your commercial team.",
  stages,
  sticky = false,
}: PipelineDiagramProps): React.ReactElement | null {
  if (stages.length === 0) return null;

  return (
    <aside
      className={`rounded-3xl border border-neutral-200 bg-white p-6 md:p-7 ${
        sticky ? "lg:sticky lg:top-28 lg:self-start" : ""
      }`}
      aria-label={title}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
        {eyebrow}
      </p>
      <h3 className="mb-2 text-lg font-semibold tracking-tight text-neutral-900 md:text-xl">
        {title}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-neutral-500">{caption}</p>
      <ol className="space-y-5">
        {stages.map((stage, index) => (
          <li
            key={stage.name}
            className="border-t border-neutral-100 pt-5 first:border-t-0 first:pt-0"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
              Stage {index + 1}
            </p>
            <p className="mt-1 text-base font-semibold text-neutral-900">
              {stage.name}
            </p>
            {stage.note ? (
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                {stage.note}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </aside>
  );
}

/** Prefer stall / cycle chart bars as stage labels; they read as commercial motion. */
export function stagesFromIndustryCharts(
  charts: { title: string; bars: { label: string; display: string }[] }[],
  limit = 5,
): PipelineStage[] {
  const chart = charts.find((item) => item.bars.length >= 3) ?? charts[0];
  if (!chart) return [];
  return chart.bars.slice(0, limit).map((bar) => ({
    name: bar.label,
    note: bar.display,
  }));
}

import React from "react";
import {
  CaseStudyMetricComparison,
  CaseStudyTrendPoint,
  CaseStudyVisualSection,
} from "@/lib/seed-types";

const CHART_WIDTH = 640;
const CHART_HEIGHT = 260;
const CHART_PADDING = {
  top: 28,
  right: 28,
  bottom: 52,
  left: 56,
};

function RevenueTrendChart({
  points,
}: {
  points: CaseStudyTrendPoint[];
}): React.ReactElement {
  const plotWidth = CHART_WIDTH - CHART_PADDING.left - CHART_PADDING.right;
  const plotHeight = CHART_HEIGHT - CHART_PADDING.top - CHART_PADDING.bottom;
  const values = points.map((point) => point.value);
  const minValue = Math.min(...values) * 0.82;
  const maxValue = Math.max(...values) * 1.08;
  const valueRange = maxValue - minValue;

  const coordinates = points.map((point, index) => {
    const x =
      CHART_PADDING.left +
      (index / Math.max(points.length - 1, 1)) * plotWidth;
    const y =
      CHART_PADDING.top +
      (1 - (point.value - minValue) / valueRange) * plotHeight;

    return { ...point, x, y };
  });

  const linePath = coordinates
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  const areaPath = `${linePath} L ${coordinates[coordinates.length - 1]?.x ?? CHART_PADDING.left} ${
    CHART_PADDING.top + plotHeight
  } L ${coordinates[0]?.x ?? CHART_PADDING.left} ${
    CHART_PADDING.top + plotHeight
  } Z`;

  const gridLines = Array.from({ length: 4 }, (_, index) => {
    const ratio = index / 3;
    const y = CHART_PADDING.top + ratio * plotHeight;
    const value = maxValue - ratio * valueRange;

    return {
      y,
      label: `$${value.toFixed(0)}M`,
    };
  });

  return (
    <div className="overflow-hidden">
      <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
        Annual revenue
      </p>

      <svg
        viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
        className="h-auto w-full"
        role="img"
        aria-label="Revenue increased from six million to ten million dollars"
      >
        <defs>
          <linearGradient id="revenue-area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#e8b84b" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#e8b84b" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {gridLines.map((line) => (
          <g key={line.label}>
            <line
              x1={CHART_PADDING.left}
              x2={CHART_WIDTH - CHART_PADDING.right}
              y1={line.y}
              y2={line.y}
              stroke="#e5e5e5"
              strokeDasharray="4 6"
            />
            <text
              x={CHART_PADDING.left - 12}
              y={line.y + 4}
              textAnchor="end"
              className="fill-neutral-400 text-[11px]"
            >
              {line.label}
            </text>
          </g>
        ))}

        <path d={areaPath} fill="url(#revenue-area)" />
        <path
          d={linePath}
          fill="none"
          stroke="#e8b84b"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {coordinates.map((point) => (
          <g key={point.label}>
            <circle cx={point.x} cy={point.y} r="7" fill="#ffffff" />
            <circle cx={point.x} cy={point.y} r="5" fill="#e8b84b" />
            <text
              x={point.x}
              y={CHART_HEIGHT - 18}
              textAnchor="middle"
              className="fill-neutral-500 text-[12px]"
            >
              {point.label}
            </text>
            <text
              x={point.x}
              y={point.y - 16}
              textAnchor="middle"
              className="fill-neutral-900 text-[13px] font-semibold"
            >
              {point.displayValue}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function MetricComparison({
  comparison,
}: {
  comparison: CaseStudyMetricComparison;
}): React.ReactElement {
  return (
    <article className="rounded-2xl border border-neutral-200/80 bg-[#fafafa] p-6 md:p-7">
      <div className="mb-5 flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold text-neutral-900 md:text-lg">
          {comparison.title}
        </h3>
        <span className="shrink-0 rounded-full border border-brand-accent/25 bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-accent-dark">
          {comparison.changeLabel}
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-neutral-500">
            <span>{comparison.beforeLabel}</span>
            <span>{comparison.beforeValue}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-neutral-200/80">
            <div
              className="h-full rounded-full bg-neutral-400/70"
              style={{ width: `${comparison.beforeRatio * 100}%` }}
            />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-neutral-500">
            <span>{comparison.afterLabel}</span>
            <span className="font-medium text-neutral-700">
              {comparison.afterValue}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-neutral-200/80">
            <div
              className="h-full rounded-full bg-brand-accent"
              style={{ width: `${comparison.afterRatio * 100}%` }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export function CaseStudyPerformanceSection({
  section,
}: {
  section: CaseStudyVisualSection;
}): React.ReactElement {
  return (
    <section className="border-t border-neutral-200/80 bg-[#f7f7f5] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-3xl md:mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            {section.eyebrow}
          </p>
          <h2 className="mb-5 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl lg:text-4xl">
            {section.title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            {section.description}
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <div className="border-b border-neutral-200/80 p-6 md:p-8 lg:p-10">
            <RevenueTrendChart points={section.revenueTrend} />
          </div>

          <div className="grid gap-4 p-4 md:grid-cols-2 md:gap-6 md:p-6 lg:p-8">
            {section.comparisons.map((comparison) => (
              <MetricComparison
                key={comparison.title}
                comparison={comparison}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

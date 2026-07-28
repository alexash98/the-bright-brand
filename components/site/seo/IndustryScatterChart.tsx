import type { ScatterChart } from "@/content/types";

interface IndustryScatterChartProps {
  chart: ScatterChart;
}

const WIDTH = 360;
const HEIGHT = 220;
const PAD = { top: 16, right: 16, bottom: 36, left: 40 };

export function IndustryScatterChart({
  chart,
}: IndustryScatterChartProps): React.ReactElement {
  const plotW = WIDTH - PAD.left - PAD.right;
  const plotH = HEIGHT - PAD.top - PAD.bottom;

  return (
    <div className="motion-safe:animate-[industry-fade-up_0.55s_ease-out_both] rounded-3xl border border-neutral-200 bg-white p-6">
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
        {chart.title}
      </p>
      <p className="mb-4 text-xs leading-relaxed text-neutral-500">
        {chart.caption}
      </p>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-auto w-full"
        role="img"
        aria-label={`${chart.title}: ${chart.xLabel} versus ${chart.yLabel}`}
      >
        <line
          x1={PAD.left}
          y1={PAD.top}
          x2={PAD.left}
          y2={PAD.top + plotH}
          stroke="#e5e5e5"
        />
        <line
          x1={PAD.left}
          y1={PAD.top + plotH}
          x2={PAD.left + plotW}
          y2={PAD.top + plotH}
          stroke="#e5e5e5"
        />
        {[0, 25, 50, 75, 100].map((tick) => {
          const y = PAD.top + plotH - (tick / 100) * plotH;
          return (
            <line
              key={`g-${tick}`}
              x1={PAD.left}
              x2={PAD.left + plotW}
              y1={y}
              y2={y}
              stroke="#f0f0f0"
            />
          );
        })}
        {chart.points.map((point) => {
          const cx = PAD.left + (point.x / 100) * plotW;
          const cy = PAD.top + plotH - (point.y / 100) * plotH;
          return (
            <g key={point.label}>
              <circle cx={cx} cy={cy} r={6} fill="#e8b84b" fillOpacity={0.9} />
              <circle
                cx={cx}
                cy={cy}
                r={10}
                fill="#e8b84b"
                fillOpacity={0.15}
              />
            </g>
          );
        })}
        <text
          x={PAD.left + plotW / 2}
          y={HEIGHT - 8}
          textAnchor="middle"
          className="fill-neutral-500 text-[10px]"
        >
          {chart.xLabel}
        </text>
        <text
          x={12}
          y={PAD.top + plotH / 2}
          textAnchor="middle"
          transform={`rotate(-90 12 ${PAD.top + plotH / 2})`}
          className="fill-neutral-500 text-[10px]"
        >
          {chart.yLabel}
        </text>
      </svg>
      <ul className="mt-4 flex flex-wrap gap-2">
        {chart.points.slice(0, 6).map((point) => (
          <li
            key={point.label}
            className="inline-flex items-center gap-2 rounded-full border border-brand-accent/15 bg-[#f7f7f5] px-3 py-1 text-xs font-medium text-neutral-700"
          >
            <span
              className="h-2 w-2 rounded-full bg-brand-accent"
              aria-hidden
            />
            {point.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

import type { IndustryInsightChart } from "@/content/types";

interface IndustryBarChartProps {
  chart: IndustryInsightChart;
  tone?: "dark" | "light";
}

export function IndustryBarChart({
  chart,
  tone = "dark",
}: IndustryBarChartProps): React.ReactElement {
  const isDark = tone === "dark";

  return (
    <div
      className={
        isDark
          ? "rounded-3xl border border-brand-accent/20 bg-brand-bg/80 p-5 backdrop-blur-sm motion-safe:animate-[industry-fade-up_0.55s_ease-out_both]"
          : "rounded-3xl border border-neutral-200 bg-white p-6 motion-safe:animate-[industry-fade-up_0.55s_ease-out_both]"
      }
    >
      <p
        className={`mb-1 text-xs font-semibold uppercase tracking-[0.2em] ${
          isDark ? "text-brand-accent" : "text-brand-accent-dark"
        }`}
      >
        {chart.title}
      </p>
      <p
        className={`mb-5 text-xs leading-relaxed ${
          isDark ? "text-brand-text-pale/55" : "text-neutral-500"
        }`}
      >
        {chart.caption}
      </p>
      <ul className="space-y-3">
        {chart.bars.map((bar, index) => (
          <li key={bar.label}>
            <div className="mb-1 flex items-baseline justify-between gap-3">
              <span
                className={`text-sm font-medium ${
                  isDark ? "text-brand-text-pale/90" : "text-neutral-800"
                }`}
              >
                {bar.label}
              </span>
              <span
                className={`text-sm font-semibold tabular-nums ${
                  isDark ? "text-brand-accent" : "text-brand-accent-dark"
                }`}
              >
                {bar.display}
              </span>
            </div>
            <div
              className={`h-2 overflow-hidden rounded-full ${
                isDark ? "bg-white/10" : "bg-neutral-100"
              }`}
            >
              <div
                className="h-full origin-left rounded-full bg-brand-accent motion-safe:animate-[industry-bar-grow_0.7s_ease-out_both]"
                style={{
                  width: `${Math.max(4, Math.min(100, bar.value))}%`,
                  animationDelay: `${index * 80}ms`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

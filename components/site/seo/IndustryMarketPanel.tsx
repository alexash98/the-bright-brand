import { ArrowRight, Building2, Database, Target, Users } from "lucide-react";
import type { Industry } from "@/content/types";

interface IndustryMarketPanelProps {
  industry: Industry;
  surface?: "plain" | "muted";
}

export function IndustryMarketPanel({
  industry,
  surface = "muted",
}: IndustryMarketPanelProps): React.ReactElement | null {
  const hasMarket = (industry.marketStats?.length ?? 0) > 0;
  const hasAccess = Boolean(industry.commercialAccess);
  const hasAudience = !hasAccess && (industry.audience?.length ?? 0) > 0;
  const hasTargeting = (industry.targetingNotes?.length ?? 0) > 0;

  if (!hasMarket && !hasAccess && !hasAudience && !hasTargeting) {
    return null;
  }

  const access = industry.commercialAccess;

  const muted = surface === "muted";
  const cardBg = muted ? "bg-white" : "bg-[#f7f7f5]";

  return (
    <section
      className={`px-4 py-16 md:px-8 md:py-20 ${
        muted ? "bg-[#f7f7f5]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl space-y-14">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            {industry.briefing?.eyebrow ?? "Built for your commercial team"}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            {industry.briefing?.heading ??
              `How we brief ${industry.name.toLowerCase()} work with you`}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            {industry.briefing?.intro ??
              "You already know your market. These are the levers we use with your directors to decide spend, stages and what counts as a real win."}
          </p>
        </div>

        {hasMarket ? (
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-neutral-900">
              <Building2 className="h-4 w-4 text-brand-accent" aria-hidden />
              {industry.briefing?.marketHeading ??
                "Numbers that change how we spend"}
            </div>
            <dl
              className={`grid gap-4 sm:grid-cols-2 ${
                (industry.marketStats?.length ?? 0) >= 4
                  ? "lg:grid-cols-4"
                  : "lg:grid-cols-3"
              }`}
            >
              {industry.marketStats!.map((stat) => (
                <div
                  key={`${stat.label}-${stat.value}`}
                  className={`rounded-3xl border border-neutral-200 p-5 ${cardBg}`}
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold tabular-nums text-brand-accent-dark">
                    {stat.value}
                  </dd>
                  {stat.implication ? (
                    <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                      {stat.implication}
                    </p>
                  ) : null}
                  {stat.source ? (
                    <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                      {stat.source}
                    </p>
                  ) : null}
                </div>
              ))}
            </dl>
          </div>
        ) : null}

        {access ? (
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-900">
              <Users className="h-4 w-4 text-brand-accent" aria-hidden />
              Who we sit with, and what we need access to
            </div>
            {access.intro ? (
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-neutral-600">
                {access.intro}
              </p>
            ) : null}

            <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1.1fr] lg:items-stretch">
              <div className={`rounded-3xl border border-neutral-200 p-6 ${cardBg}`}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
                  People
                </p>
                <ul className="space-y-4">
                  {access.people.map((person) => (
                    <li key={person.role}>
                      <p className="font-semibold text-neutral-900">
                        {person.role}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                        {person.need}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="hidden items-center justify-center text-brand-accent lg:flex"
                aria-hidden
              >
                <ArrowRight className="h-6 w-6" />
              </div>

              <div className={`rounded-3xl border border-neutral-200 p-6 ${cardBg}`}>
                <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
                  <Database className="h-3.5 w-3.5" aria-hidden />
                  Systems access
                </p>
                <ul className="space-y-4">
                  {access.systems.map((system) => (
                    <li key={system.name}>
                      <p className="font-semibold text-neutral-900">
                        {system.name}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                        {system.need}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="hidden items-center justify-center text-brand-accent lg:flex"
                aria-hidden
              >
                <ArrowRight className="h-6 w-6" />
              </div>

              <div className="flex flex-col justify-center rounded-3xl border border-brand-accent/30 bg-brand-bg-darker p-6 text-brand-text-pale">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
                  What that unlocks
                </p>
                <p className="text-lg font-semibold leading-snug tracking-tight md:text-xl">
                  {access.outcome}
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {hasAudience ? (
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-neutral-900">
              <Users className="h-4 w-4 text-brand-accent" aria-hidden />
              Who we usually sit with on your side
            </div>
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {industry.audience!.map((person) => (
                <li
                  key={person.role}
                  className={`rounded-3xl border border-neutral-200 p-5 ${cardBg}`}
                >
                  <p className="text-lg font-semibold text-neutral-900">
                    {person.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {person.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {hasTargeting ? (
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-neutral-900">
              <Target className="h-4 w-4 text-brand-accent" aria-hidden />
              {industry.briefing?.targetingHeading ??
                "How we find demand with you"}
            </div>
            <div
              className={`grid gap-4 ${
                industry.targetingNotes!.length >= 4
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {industry.targetingNotes!.map((note, index) => (
                <div
                  key={note.heading}
                  className={`rounded-3xl border border-neutral-200 p-6 ${cardBg}`}
                >
                  <p className="mb-3 text-xs font-bold tabular-nums tracking-[0.16em] text-brand-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                    {note.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
                    {note.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

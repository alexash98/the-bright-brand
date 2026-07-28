import type { Industry } from "@/content/types";

interface IndustryEngagementProps {
  engagement: NonNullable<Industry["engagement"]>;
  surface?: "plain" | "muted";
}

export function IndustryEngagement({
  engagement,
  surface = "plain",
}: IndustryEngagementProps): React.ReactElement {
  const muted = surface === "muted";

  return (
    <section
      id="engagement"
      className={`scroll-mt-24 px-4 py-16 md:px-8 md:py-24 ${
        muted ? "bg-[#f7f7f5]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            {engagement.eyebrow ?? "How an engagement starts"}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            {engagement.heading}
          </h2>
          {engagement.intro ? (
            <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
              {engagement.intro}
            </p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
          <aside className="rounded-3xl border border-brand-accent/30 bg-brand-bg-darker p-7 text-brand-text-pale md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
              Commercials
            </p>
            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
              {engagement.commercials.heading}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-text-pale/75">
              {engagement.commercials.body}
            </p>
          </aside>

          <ol className="space-y-4">
            {engagement.steps.map((step, index) => (
              <li
                key={step.name}
                className={`rounded-3xl border border-neutral-200 p-6 md:p-7 ${
                  muted ? "bg-white" : "bg-[#f7f7f5]"
                }`}
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-sm font-bold text-brand-accent-dark"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {step.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 md:text-base">
                      {step.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

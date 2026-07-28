import type { Proof } from "@/content/types";

interface ProofBlockProps {
  proof: Proof[];
  heading?: string;
  /** muted = soft band so white proof cards pop after a white section. */
  surface?: "muted" | "plain";
}

export function ProofBlock({
  proof,
  heading = "Proof",
  surface = "plain",
}: ProofBlockProps): React.ReactElement {
  return (
    <section
      className={`${
        surface === "muted" ? "bg-[#f7f7f5]" : "bg-white"
      } px-4 py-16 md:px-8 md:py-24`}
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          Proof
        </p>
        <h2 className="mb-10 max-w-2xl text-2xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          {heading}
        </h2>
        <div className="space-y-8">
          {proof.map((item, index) => (
            <article
              key={`${item.client}-${item.situation.slice(0, 24)}`}
              className="motion-safe:animate-[industry-fade-up_0.55s_ease-out_both] rounded-3xl border border-neutral-200 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.02)] md:p-8"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <p className="mb-2 inline-flex items-center rounded-full border border-brand-accent/20 bg-[#f7f7f5] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                {item.anonymised ? "Anonymised" : "Named client"}
              </p>
              {item.honestyNote ? (
                <p className="mb-3 max-w-3xl text-sm leading-relaxed text-neutral-500">
                  {item.honestyNote}
                </p>
              ) : null}
              <h3 className="mb-3 text-xl font-semibold text-neutral-900 md:text-2xl">
                {item.client}
              </h3>
              <p className="mb-4 max-w-3xl text-base leading-relaxed text-neutral-600">
                {item.situation}
              </p>
              <p className="mb-8 max-w-3xl text-base leading-relaxed text-neutral-700">
                <span className="font-semibold text-neutral-900">What we built: </span>
                {item.built}
              </p>
              <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {item.results.map((result, resultIndex) => (
                  <div
                    key={`${result.metric}-${result.after}`}
                    className="motion-safe:animate-[industry-fade-up_0.45s_ease-out_both] rounded-2xl border border-neutral-100 bg-[#f7f7f5] px-4 py-4"
                    style={{ animationDelay: `${120 + resultIndex * 50}ms` }}
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                      {result.metric}
                    </dt>
                    <dd className="mt-2 text-2xl font-semibold tabular-nums text-brand-accent-dark">
                      {result.after}
                      {result.before ? (
                        <span className="ml-2 text-sm font-normal text-neutral-500">
                          from {result.before}
                        </span>
                      ) : null}
                    </dd>
                    <p className="mt-1 text-sm text-neutral-500">{result.window}</p>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

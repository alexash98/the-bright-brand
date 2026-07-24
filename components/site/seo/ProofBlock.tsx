import type { Proof } from "@/content/types";

interface ProofBlockProps {
  proof: Proof[];
  heading?: string;
}

export function ProofBlock({
  proof,
  heading = "Proof",
}: ProofBlockProps): React.ReactElement {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          Proof
        </p>
        <h2 className="mb-10 text-2xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          {heading}
        </h2>
        <div className="space-y-10">
          {proof.map((item) => (
            <article
              key={`${item.client}-${item.situation.slice(0, 24)}`}
              className="border-t border-neutral-200 pt-10"
            >
              <h3 className="mb-3 text-xl font-semibold text-neutral-900 md:text-2xl">
                {item.anonymised ? item.client : item.client}
              </h3>
              <p className="mb-4 max-w-3xl text-base leading-relaxed text-neutral-600 md:text-lg">
                {item.situation}
              </p>
              <p className="mb-8 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
                <span className="font-semibold text-neutral-900">What we built: </span>
                {item.built}
              </p>
              <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {item.results.map((result) => (
                  <div key={`${result.metric}-${result.after}`}>
                    <dt className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                      {result.metric}
                    </dt>
                    <dd className="mt-2 text-2xl font-semibold text-neutral-900">
                      {result.after}
                      {result.before ? (
                        <span className="ml-2 text-base font-normal text-neutral-500">
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

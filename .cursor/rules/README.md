# SEO Cursor rules pack

Drop the whole `.cursor/rules/` folder into the root of your Next.js repo. Cursor reads every `.mdc` file recursively and injects the relevant ones into each Agent/Chat request automatically. Commit the folder to git so anyone who clones the repo gets identical AI behaviour.

## What each file does and when it fires

| File | Activation | Purpose |
|------|-----------|---------|
| `00-seo-core.mdc` | Always on | The baseline SEO mindset applied to every task. Kept lean to save tokens. |
| `10-rendering-crawlability.mdc` | Auto (app routes, config) | Static/ISR/SSR choice, robots, sitemap, URL and architecture hygiene. |
| `20-metadata.mdc` | Auto (pages/layouts) | Metadata API: titles, descriptions, canonicals, Open Graph. |
| `30-structured-data.mdc` | Auto + agent-requested | JSON-LD: Organization/WebSite in the header, Article, Product, breadcrumbs, rich results. |
| `40-performance-cwv.mdc` | Auto (components/pages) | Core Web Vitals: images, fonts, scripts, layout stability. |
| `50-onpage-content.mdc` | Auto + agent-requested | Headings, answer-first writing, E-E-A-T, internal linking. |
| `60-page-checklist.mdc` | Manual: `@60-page-checklist` | Pre-ship checklist to run before merging a page. |

## Personal preferences (recommended: set as a global User Rule, not here)
In Cursor: Settings → Rules → User Rules. Add: "Use British English. Never use em dashes." User Rules apply across all your projects and keep project rules focused on the codebase.

## Assumptions
Written for **Next.js App Router + TypeScript** (your stack). If a page is built in a different framework the principles hold but the code patterns (Metadata API, `next/image`, `sitemap.ts`) will differ. Replace `https://<production-domain>` in the rules with the real domain once you have it.

## Keep them alive
These evolve with the project. If the agent keeps making the same SEO mistake, that is a rules problem, not a model problem: add one focused rule for it. If a rule has not fired in weeks, prune it.

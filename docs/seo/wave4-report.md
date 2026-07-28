# Wave 4 overnight build report

Branch: `feature/seo-wave-4`

## Status

Built 4A tools, 4B integrations, 4C resources, 4D taxonomy linking on `feature/seo-wave-4`.

`npm run seo:check` **passes** (36 SEO routes, dedup OK).

Word budgets: tools meet 600 to 900 method words. Integration guides and resource landings are implementable and unique but several are still under the 1,200 / 500 targets after dedup constraints. Further prose expansion is safe as a follow-up if it stays under 0.15 Jaccard.

## URLs

### 4A Tools
- /tools/attribution-window-calculator/
- /tools/margin-roas-calculator/
- /tools/tender-pipeline-forecast/
- /tools/offline-conversion-value-calculator/
- /tools/call-tracking-roi-calculator/
- /tools/cost-per-reservation-calculator/
- Index: /tools/

### 4B Integrations
- /integrations/hubspot-google-ads-offline-conversions/
- /integrations/salesforce-google-ads-offline-conversions/
- /integrations/hubspot-ga4-attribution/
- /integrations/calendly-attribution-tracking/
- /integrations/call-tracking-crm-ad-platform-loop/
- /integrations/pipedrive-google-ads-offline-conversions/
- /integrations/server-side-tagging-consent-mode/
- /integrations/crm-migration-without-losing-attribution/
- Index: /integrations/

### 4C Resources
- /resources/tender-hubspot-deal-pipeline/
- /resources/ga4-enquiry-event-schema/
- /resources/google-ads-housebuilder-account-structure/
- /resources/negative-keyword-starter-lists/
- /resources/offline-conversion-upload-template/
- /resources/attribution-health-check/
- Index: /resources/

### 4D
- `content/taxonomy.ts`
- `components/site/RelatedServices.tsx` on blog posts
- `npm run seo:content-links` → `docs/seo/content-link-audit.md`

## Assumptions

1. Attribution window model: lognormal cycle length, mean = user input, CV = 0.7.
2. Industry/service/money page paths linked even when Wave 2 content is not yet published (routes may 404 until verticals ship).
3. Optional email capture is mock client-side only (no ESP wired).
4. Content link audit traffic ranking is a proxy (no GSC export in repo).
5. Google Ads / HubSpot / Salesforce / Pipedrive / Calendly UI paths flagged as unverifiable where menus move.
6. SoftwareApplication schema added in `lib/seo/schema.ts` (shared infra needed for tools).
7. Sitemap + seo-corpus updated to include Wave 4 routes.

# Framer → Next.js migration checklist

Ordered cutover runbook for `www.thebrightbrand.com`. Tick items in sequence. Do not skip ahead of the DNS switch line.

## Pre-cutover (preview)

- [ ] `npx tsx scripts/verify-parity.ts <VERCEL_PREVIEW_URL>` — must print **GO**. Not localhost.
- [ ] Human eyeball of the 4 apostrophe meta descriptions in the **deployed** HTML (View Source, not DevTools React tree):
  - `/brightbrand/facebook-s-2026-ad-revolution-why-marketers-must-adapt`
  - `/brightbrand/how-to-set-up-meta-offline-conversion-tracking-in-2026`
  - `/brightbrand/linkedin-s-360brew-algorithm-what-you-need-to-know-for-2026`
  - `/brightbrand/youtube-shorts-holiday-ads-3-game-changers-for-2026`
- [ ] Diff generated `/sitemap.xml` vs live Framer sitemap: every live URL present (expect 35 on the new site once all 6 case studies + net-new `/about` + 6 service details are live; live Framer has 30).
- [ ] Full crawl of the preview (Screaming Frog or similar): zero 4xx/5xx, zero redirect chains, zero orphans, no duplicate titles.
- [ ] `public/og-default.png` (1200×630) live and rendering in [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) + [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).
- [ ] Core Web Vitals on preview ≥ Framer on `/` and one `/brightbrand/{slug}` post (LCP especially).
- [ ] `/robots.txt` and `/sitemap.xml` both return 200 on preview.
- [ ] Confirm GTM-5GVVCCDR loads on hard load **and** a soft nav pushes `page_view` to `dataLayer` (Tag Assistant / `window.dataLayer` in console after clicking Blog → a post).
- [ ] Confirm Calendly CTA still points at `https://calendly.com/alex-thebrightbrand/growth-strategy-call`.
- [ ] Confirm Odal tracker present: `https://odal.io/tracker.js` with workspace `25f28148-c6fb-454d-8b84-8355f53a0dfa`.
- [ ] GSC property verified for `https://www.thebrightbrand.com`.
- [ ] Lower DNS TTL to **300s** at least **24h** before cutover.

## DNS switch

- [ ] --- DNS SWITCH ---
- [ ] Apex `thebrightbrand.com` → **single 301** → `https://www.thebrightbrand.com` at **Vercel domain level** (not middleware). Test: `curl -I http://thebrightbrand.com` — one hop, no chain.
- [ ] Resubmit sitemap in GSC (`https://www.thebrightbrand.com/sitemap.xml`).
- [ ] URL Inspection → Request Indexing on `/`, `/services`, `/case-studies`, and the 3 highest-traffic posts.
- [ ] Keep Framer published on its `.framer.website` URL for **30 days** as rollback.
- [ ] Monitor GSC Coverage + Performance daily for **14 days**; expect a small 1–2 week dip; escalate if impressions drop **>30%** or crawl errors appear.

## Deferred (post-cutover): newsletter

Footer newsletter is **intentionally not shipping** at cutover. To bring it live later:

1. Add a footer form (Name + Email + Subscribe) matching the old Framer block.
2. Add `POST /api/newsletter` that validates input and emails the signup (Resend is the simplest path).
3. `npm install resend`
4. On Vercel, set:
   - `RESEND_API_KEY` — from [resend.com](https://resend.com)
   - `NEWSLETTER_TO_EMAIL=hello@thebrightbrand.com` (who gets the signup ping)
   - optional `NEWSLETTER_FROM_EMAIL=Bright Brand <hello@thebrightbrand.com>` after you verify the domain in Resend
5. Smoke-test one signup on preview, then ship.

## Open flags

1. **`public/og-default.png`** — in repo at 1200×630; still verify in Facebook Sharing Debugger + LinkedIn Post Inspector on the preview.

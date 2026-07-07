# Branding tokens

When brand guidelines arrive, update these values in **one place** so the whole site picks them up.

## Colours (`app/globals.css`)

| CSS variable | Used for | Current placeholder |
|--------------|----------|---------------------|
| `--brand-primary` | Headings, nav, primary buttons | Stone `#1c1917` |
| `--brand-fg` | Body text | Stone `#1c1917` |
| `--brand-bg` | Page background | Warm off-white `#faf8f5` |
| `--brand-muted` | Secondary text, captions | Stone `#78716c` |
| `--brand-accent` | Links, highlights, CTA accents | Amber `#b45309` |

Tailwind classes (`text-primary`, `bg-accent`, etc.) read from these variables via `tailwind.config.ts`. Do not use raw hex in components.

## Typography (`app/layout.tsx`)

Inter is loaded as a placeholder via `next/font/google`. Swap the import and variable for the brand typeface when it is confirmed.

## Logo and assets

- Add the logo to `public/logo.png` and update the `logo` URL in `lib/schema.ts`.
- Add Open Graph artwork at `public/og-default.png` when ready (1200×630).

## Domain

Replace `https://PLACEHOLDER-DOMAIN.com` in:

- `lib/site.ts`
- Any `// TODO` comments in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts`

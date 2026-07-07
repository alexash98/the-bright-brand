# The Bright Brand: build reference

Single source of truth for the visual system. The always-apply rule in `.cursor/rules/06-brand-visual.mdc` points here. Read this before building any page. Voice and copy live in `.cursor/rules/05-brand-voice.mdc`.

Everything below is the **default**. A direct instruction in chat overrides it.

---

## Brand snapshot

- Name: TheBrightBrand
- Tagline: Data Driven Marketing. For Brands That Move Fast.
- Website: thebrightbrand.com
- Email: alex@thebrightbrand.com
- Instagram: @thebrightbrand
- Locations: Miami, FL and London, UK

---

## Colour system

Black and white are the foundation, built on contrast. Blue carries energy and precision and is used sparingly so it keeps its impact.

| Token | Value | Use |
| --- | --- | --- |
| Base | `#060A10` | Page and outer background, the base layer beneath the grid |
| Surface | `#080D16` | Slide and card surface, sits just above the base with its own grid |
| Card fill | `rgba(255,255,255,0.04)` | Inner card fill |
| Card border | `rgba(255,255,255,0.08)` | Card border, radius 12px |
| White | `#FFFFFF` | Headings and full-strength text |
| White 50% | `rgba(255,255,255,0.5)` | Body copy and supporting text |
| White 8% | `rgba(255,255,255,0.08)` | Subtle fills |
| Blue accent | `#5B9FFF` | Labels, links, interactive highlights. Accent only |
| Green | `#34D399` | Positive indicators and growth metrics |
| Red | `#FB7185` | Negative indicators and alerts only |

### Approved and avoided combinations

- White on black: approved. Primary pairing for all headings and body.
- Blue on black: approved. Labels, section tags, accent elements.
- Black on white: approved for print and light backgrounds only.
- Blue on white: avoid. Insufficient contrast.
- White on blue: avoid. Blue is not a fill colour. Use it as border or text only.

### CSS variables

Drop into `:root` in `globals.css`.

```css
:root {
  /* Base and surfaces */
  --tbb-bg: #060A10;
  --tbb-surface: #080D16;
  --tbb-card: rgba(255, 255, 255, 0.04);
  --tbb-card-border: rgba(255, 255, 255, 0.08);

  /* Text */
  --tbb-text: #FFFFFF;
  --tbb-text-muted: rgba(255, 255, 255, 0.5);

  /* Accent and status */
  --tbb-blue: #5B9FFF;
  --tbb-green: #34D399;
  --tbb-red: #FB7185;
}
```

### Tailwind v4 theme mapping

Expose the tokens as utilities (`bg-tbb-bg`, `text-tbb-blue`, and so on) by adding them to your `@theme` block in `globals.css`.

```css
@theme {
  --color-tbb-bg: #060A10;
  --color-tbb-surface: #080D16;
  --color-tbb-blue: #5B9FFF;
  --color-tbb-green: #34D399;
  --color-tbb-red: #FB7185;
}
```

---

## Visual elements

Two elements define the environment and should be present on every designed surface by default.

### Grid overlay

Applied to all backgrounds. Creates depth and a technical, data-driven feel without competing with content.

```css
.tbb-grid {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 48px 48px;
}
```

### Blue glow

A large blue radial glow sits in the top right corner of every hero or full-width section. Place it inside a `position: relative` container with `overflow: hidden`, and keep content above it with a higher `z-index`.

```css
.tbb-glow {
  position: absolute;
  top: -120px;
  right: -120px;
  width: 600px;
  height: 500px;
  pointer-events: none;
  background: radial-gradient(
    ellipse at center,
    rgba(30, 100, 220, 0.28) 0%,
    rgba(10, 40, 120, 0.12) 50%,
    transparent 75%
  );
}
```

---

## Typography

Inter is the sole typeface. Bold weight at large sizes drives the visual impact. Regular weight at 50 percent opacity handles all body copy.

| Role | Weight | Transform | Use |
| --- | --- | --- | --- |
| H1 headline | Semibold 600 | Capitalize | Page heroes, campaign titles |
| H2 heading | Semibold 600 | Capitalize | Section headings |
| H3 sub-heading | Semibold 600 | None | Card titles and sub-sections |
| Body large | Regular 400 | None | Hero subtitles, white 50% |
| Body | Regular 400 | None | All descriptive copy, white 50% |
| Label / tag | Bold 700 | Uppercase | Bracket notation, blue, wide tracking |

### Bracket labels

All labels and section tags use bracket notation, for example `[ SECTION 01 ]`. This is core to the visual language and should appear consistently. Use this component so it stays uniform.

```tsx
export function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#5B9FFF]">
      [ {children} ]
    </span>
  );
}
```

---

## Working from reference images

When a screenshot or link to another site is supplied, it is **layout and interaction inspiration only**. Borrow the structure: section order, grid, spacing rhythm, component ideas, motion. Do not carry over the reference's colours, fonts or styling. Rebuild everything in the tokens above so the result reads as The Bright Brand, not as the source.

---

## Voice, in one line

Precise not vague, confident not arrogant, direct not blunt. Lead with the outcome and the data. Full voice guidance is in `05-brand-voice.mdc`. Never use em dashes anywhere. British English throughout.

Key framing line: "Could you commit 2 to 3 times your current budget tomorrow, with full conviction it would compound profitably? If not, your measurement is broken. That is the gap we close."

Primary CTA: "Book a consultation." 30 minutes. No obligation.

---

## Stats to feature

- £5M yearly managed adspend
- 12,000 campaigns launched
- £20M+ generated for clients
- 37% sales uplift
- 12+ years experience

---

## Quick dos and donts

Do:

- Start every surface dark, with the grid, and add the glow to heroes.
- Keep blue rare. If a page looks blue, pull it back.
- Wrap every label in brackets.
- Lead sections with a client outcome, then the channel.

Do not:

- Use blue as a fill or a button background.
- Introduce a second typeface or a warm colour grade.
- Copy a reference site's palette or fonts.
- Use em dashes.

# Anthropic — Style Reference
> scientific field journal on warm parchment — quiet ivory surfaces, editorial serif headlines, and a single clay accent that only appears when you must act

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Anthropic's interface reads like a curated research publication on warm parchment paper. Ivory and oat neutrals replace the typical cool-gray tech palette, giving every surface a paper-like quality that pairs with a custom serif used at unprecedented scale for both body and display text. A single clay-toned accent surfaces only at moments of action; everything else stays quiet and editorial. Components are flat — hairline borders and selective bottom-corner radii replace shadows as the elevation language, sans-serif handles UI chrome, and the serif carries voice.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Slate Dark | `#141413` | `--color-slate-dark` | Primary text, headings, footer background, hairline borders — near-black with a hint of warmth, never pure black |
| Ivory Medium | `#f0eee6` | `--color-ivory-medium` | Page canvas and large surface fills — the parchment background that sets the entire warm tone |
| Ivory Light | `#faf9f5` | `--color-ivory-light` | Card surfaces, elevated panels, skip-link buttons — one step brighter than canvas for subtle layering without shadows |
| Cloud Medium | `#b0aea5` | `--color-cloud-medium` | Muted helper text, inactive nav items, secondary labels — the neutral that recedes without disappearing |
| Cloud Dark | `#87867f` | `--color-cloud-dark` | Outlined button borders, mid-contrast dividers |
| Stone | `#cccbc8` | `--color-stone` | Hairline borders and dividers between sections — visible but never assertive |
| Slate Medium | `#3d3d3a` | `--color-slate-medium` | Dark-on-dark borders inside the footer |
| Oat Warm | `#e3dacc` | `--color-oat-warm` | Secondary warm surface for grouped panels and feature containers — a deeper paper tone for variety |
| Manilla | `#f5e3c7` | `--color-manilla` | Featured hero card background — vintage paper tone that signals editorial importance without color shouting |
| Clay | `#d97757` | `--color-clay` | Filled CTA buttons (e.g. cookie consent accept) — the single chromatic accent in the system, a terracotta warmth that belongs to the earth-tone family rather than typical UI blue |
| Clay Deep | `#c6613f` | `--color-clay-deep` | Hover/pressed state for Clay CTAs and the canonical accent token — deeper version of the primary accent |

## Tokens — Typography

### Anthropic Serif — Editorial voice — used for the display heading at 68px, all body copy at 20px, card titles, and supporting paragraphs. The serif carries personality; its presence in body text (unusual for tech sites) signals research-publication DNA. Weight 400 is default, 600 for emphasis. · `--font-anthropic-serif`
- **Substitute:** Georgia, Source Serif Pro, Charter
- **Weights:** 400, 600
- **Sizes:** 14px, 18px, 20px, 24px, 68px
- **Line height:** 1.10, 1.40, 1.43
- **Letter spacing:** normal
- **Role:** Editorial voice — used for the display heading at 68px, all body copy at 20px, card titles, and supporting paragraphs. The serif carries personality; its presence in body text (unusual for tech sites) signals research-publication DNA. Weight 400 is default, 600 for emphasis.

### Anthropic Sans — UI chrome and display sans — nav links, buttons, footers, badges, and the bold sans display heading at 61px weight 700. The 61px sans display sits beside the 68px serif display as a deliberate dual-system: sans shouts declarative statements, serif reads as editorial essay. · `--font-anthropic-sans`
- **Substitute:** Inter, system-ui, Arial
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 15px, 16px, 20px, 24px, 61px
- **Line height:** 1.00, 1.10, 1.25, 1.30, 1.40
- **Letter spacing:** -0.0200em at 12px (tight nav/caption tracking), -0.0050em at 15-16px (subtle UI tightening), -0.0020em at larger sizes
- **Role:** UI chrome and display sans — nav links, buttons, footers, badges, and the bold sans display heading at 61px weight 700. The 61px sans display sits beside the 68px serif display as a deliberate dual-system: sans shouts declarative statements, serif reads as editorial essay.

### Anthropic Mono — Reserved for code or technical snippets — appears sparingly · `--font-anthropic-mono`
- **Substitute:** JetBrains Mono, SF Mono, Menlo
- **Weights:** 400
- **Sizes:** 16px
- **Line height:** 1.40
- **Role:** Reserved for code or technical snippets — appears sparingly

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | — | — | 12px | 1.4 | -0.24px | `--text-caption` |
| body-sm | — | — | 16px | 1 | -0.08px | `--text-body-sm` |
| body | — | — | 20px | 1.4 | 0px | `--text-body` |
| subheading | — | — | 24px | 1.3 | -0.05px | `--text-subheading` |
| heading | — | — | 61px | 1.1 | -0.12px | `--text-heading` |
| display | — | — | 68px | 1.1 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 76 | 76px | `--spacing-76` |
| 100 | 100px | `--spacing-100` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 0px |
| cards | 24px |
| links | 0px |
| badges | 0px |
| buttons | 8px (bottom-only on filled variants), 12px (outlined) |

### Layout

- **Page max-width:** 1280px
- **Section gap:** 80-120px
- **Card padding:** 24-32px
- **Element gap:** 8px

## Components

### Text Link Button
**Role:** Primary inline link styled as a button — used for navigation and inline actions

Transparent background, #141413 text color, no border, 0px radius, padding 22px 12px. Underline appears on hover. No background fill at any state — this is text that happens to be clickable, not a container.

### Filled Ivory Button
**Role:** Primary action button on light surfaces

Background #faf9f5, text #141413, bottom-only border-radius 8px (top corners sharp), padding 12px 31px. The bottom-only radius is a signature choice — the button reads like a tab or card pulled from a stack, not a generic pill. No border, no shadow.

### Outlined Dark Button
**Role:** Secondary action on dark backgrounds (cookie consent, modal footer)

Transparent background, #ffffff text, 1px border in #87867f, 12px radius, padding 8px 16px. Compact size, ghost treatment that lets the dark background show through.

### Clay Filled Button
**Role:** The single chromatic CTA — used sparingly for the most consequential actions

Background #d97757, white text, 8px radius, padding matching Filled Ivory Button proportions. Reserved for moments where acceptance must be visually distinct from the rest of the editorial interface. Deepens to #c6613f on hover.

### Featured Hero Card
**Role:** Large editorial card for announcements and story highlights

Background #f5e3c7 (manilla), 24px border-radius, no shadow, no border. Generous internal padding (~48-64px) to accommodate large serif display text and editorial illustration. The warm paper tone separates it from ivory cards without using color.

### Release Card
**Role:** Compact card for latest releases grid

Background #faf9f5, 24px radius, 1px border in #cccbc8 or no border, padding ~24px. Title in Anthropic Sans 24px weight 600 or Anthropic Serif 20px, body in serif 20px. Three-column grid layout.

### Top Navigation Bar
**Role:** Sticky site navigation

Transparent or #f0eee6 background, logo left in Anthropic Sans 12px weight 700 all-caps letter-spaced, nav links right-aligned at 12px sans with #b0aea5 hover-to-#141413 transition. Dropdown indicators as chevrons. The 'Try Claude' button on the right uses Filled Ivory Button styling. No background blur, no shadow.

### Footer
**Role:** Dark closing section with link columns

Full-bleed #141413 background, #faf9f5 text, multi-column link grid with 8px link gaps. Section headings in sans 12px weight 600, link items in sans 12px at #b0aea5. The dark footer is the only inversion in the system — a final grounded anchor after all the parchment above.

### Hero Heading Block
**Role:** Asymmetric first-screen composition

Two-column layout: left holds Anthropic Sans 61px weight 700 heading with inline underlined links mid-phrase; right holds supporting serif paragraph at 20px. Generous whitespace around the block. Headings use #141413, supporting text #141413 at reduced visual weight.

### Inline Underlined Link
**Role:** Text link embedded in paragraphs and headings

No background, text inherits parent color (#141413), 1px underline always visible (not just on hover) in #141413. The persistent underline is editorial — it matches print convention where links are typeset with underlines, not the UI convention of reveal-on-hover.

### Badge / Inline Label
**Role:** Small tag for categories and metadata

Transparent background, #141413 text, 0px radius, no padding above/below the text baseline. Effectively just bold or weighted text in flow — not a container. Used sparingly.

### Cookie Consent Bar
**Role:** Bottom-pinned consent prompt

Dark band (#141413 background) or dark overlay containing body text and three action buttons: Filled Ivory Button (Accept), Outlined Dark Button (Customize, Reject). The contrast inversion makes consent legible against the parchment above.

### Skip Link
**Role:** Accessibility utility for keyboard navigation

Background #faf9f5, text #141413, small padding, visible only on focus. Positioned absolutely at the top edge.

## Do's and Don'ts

### Do
- Use Anthropic Serif at 20px for all body copy and Anthropic Sans at 12-16px for UI chrome — the serif/sans split defines the system's voice.
- Use #f0eee6 as the page canvas and #faf9f5 for cards; reach for #f5e3c7 only when a card needs to feel like a featured editorial spread.
- Use the bottom-only 8px radius on filled buttons (Filled Ivory Button); this signature corner treatment replaces the generic pill.
- Use #d97757 Clay exclusively for the most consequential single CTA on any given page; never apply it to multiple actions or decorative elements.
- Keep underlines persistent on inline links — editorial print convention, not reveal-on-hover.
- Reach for 24px radius on all card-level surfaces to maintain the paper-stacked feel.
- Use the 61px sans weight 700 paired with the 68px serif weight 400 as the dual display system — sans for declarative statements, serif for editorial reflection.

### Don't
- Don't introduce cool grays, blues, or any color outside the warm earth-tone family — the palette is ivory/oat/clay, period.
- Don't use box-shadow for elevation — this system elevates through surface tone (#f0eee6 → #faf9f5 → #f5e3c7) and 1px borders only.
- Don't use the Clay accent for decoration, icons, hover states, or non-CTA elements; reserve #d97757 for filled action buttons only.
- Don't set body text in sans-serif — body must be serif at 20px; sans is UI chrome only.
- Don't apply uniform border-radius to buttons; the bottom-only 8px is a signature, not a default that should be rounded everywhere.
- Don't use bright white (#ffffff) as a surface — the system is ivory-tinted throughout (#faf9f5, #f0eee6, #f5e3c7); pure white would feel clinical and break the paper metaphor.
- Don't add gradients, glows, or color washes to backgrounds; surfaces are flat solid fills only.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#f0eee6` | Page-level background — the parchment that everything sits on |
| 1 | Card Surface | `#faf9f5` | Standard card and elevated panel — one tonal step above canvas |
| 2 | Warm Feature Surface | `#f5e3c7` | Featured hero card and editorial highlights — manilla paper tone for visual emphasis |
| 3 | Deep Warm Surface | `#e3dacc` | Secondary grouped panels and deeper warm containers |
| 4 | Inversion Surface | `#141413` | Footer and dark utility bands — the only dark surface in the system |

## Elevation

- **Card:** `none — elevated through surface tone shift, not shadow`
- **Button:** `none — identity through fill color and bottom-corner radius`
- **Navigation:** `none — flat, relies on tonal difference from page canvas`

## Imagery

Imagery leans heavily into vintage scientific illustration: the hero feature card contains a dense botanical/zoological collage of butterflies and moths rendered in classic naturalist plate style, evoking 19th-century field guides. Illustrations are warm-toned to harmonize with the parchment background rather than pop against it. No photography, no product screenshots, no abstract gradients. Iconography is minimal — small chevrons for dropdowns and sparse line indicators, always in the same warm-neutral family as text. The visual density is low: large blocks of text and whitespace dominate, with imagery appearing only at hero-feature scale.

## Agent Prompt Guide

## Quick Color Reference
- text: #141413 (Slate Dark)
- background: #f0eee6 (Ivory Medium)
- card surface: #faf9f5 (Ivory Light)
- border: #cccbc8 (Stone)
- muted text: #b0aea5 (Cloud Medium)
- primary action: #d97757 (filled action)

## Example Component Prompts

1. **Hero section**: Canvas #f0eee6. Left column: headline at 61px Anthropic Sans weight 700, #141413, letter-spacing -0.12px. Inline links within the headline underlined persistently in #141413. Right column: supporting paragraph at 20px Anthropic Serif weight 400, #141413. Two-column layout, max-width 1280px centered, generous vertical padding (~120px top).

2. Create a Primary Action Button: #d97757 background, #141413 text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

3. **Three-column release grid**: Three cards on #f0eee6 canvas, each card #faf9f5 with 24px radius and 24px padding. Card title at 24px Anthropic Sans weight 600, #141413. Card body at 20px Anthropic Serif weight 400, #141413. Inline link at bottom: 'Model details →' in #141413 with persistent underline.


5. **Dark footer**: Full-bleed #141413 background, #faf9f5 text, max-width 1280px content centered. Column headings at 12px Anthropic Sans weight 600, #faf9f5. Link items at 12px sans weight 400, #b0aea5 with 8px vertical gaps.

## Similar Brands

- **Arc Browser** — Same warm parchment neutrals and nature-inspired accent palette, editorial type treatment, and rejection of cold tech-blue UI conventions
- **Stripe** — Editorial documentation aesthetic with serif body text paired with sans UI, warm grays instead of cool blues, and section-based max-width reading layout
- **Notion** — Type-driven minimal interface where typography carries hierarchy more than color or shadow, generous whitespace, restrained palette
- **Linear** — Monochrome restraint and the discipline of using a single accent color only at decisive action moments
- **Cursor** — Contemporary AI-product visual language with custom sans + serif type pairing and minimal decorative chrome

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-slate-dark: #141413;
  --color-ivory-medium: #f0eee6;
  --color-ivory-light: #faf9f5;
  --color-cloud-medium: #b0aea5;
  --color-cloud-dark: #87867f;
  --color-stone: #cccbc8;
  --color-slate-medium: #3d3d3a;
  --color-oat-warm: #e3dacc;
  --color-manilla: #f5e3c7;
  --color-clay: #d97757;
  --color-clay-deep: #c6613f;

  /* Typography — Font Families */
  --font-anthropic-serif: 'Anthropic Serif', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-anthropic-sans: 'Anthropic Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-anthropic-mono: 'Anthropic Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: -0.24px;
  --text-body-sm: 16px;
  --leading-body-sm: 1;
  --tracking-body-sm: -0.08px;
  --text-body: 20px;
  --leading-body: 1.4;
  --tracking-body: 0px;
  --text-subheading: 24px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.05px;
  --text-heading: 61px;
  --leading-heading: 1.1;
  --tracking-heading: -0.12px;
  --text-display: 68px;
  --leading-display: 1.1;
  --tracking-display: 0px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-76: 76px;
  --spacing-100: 100px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 80-120px;
  --card-padding: 24-32px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;

  /* Named Radii */
  --radius-nav: 0px;
  --radius-cards: 24px;
  --radius-links: 0px;
  --radius-badges: 0px;
  --radius-buttons: 8px (bottom-only on filled variants), 12px (outlined);

  /* Surfaces */
  --surface-canvas: #f0eee6;
  --surface-card-surface: #faf9f5;
  --surface-warm-feature-surface: #f5e3c7;
  --surface-deep-warm-surface: #e3dacc;
  --surface-inversion-surface: #141413;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-slate-dark: #141413;
  --color-ivory-medium: #f0eee6;
  --color-ivory-light: #faf9f5;
  --color-cloud-medium: #b0aea5;
  --color-cloud-dark: #87867f;
  --color-stone: #cccbc8;
  --color-slate-medium: #3d3d3a;
  --color-oat-warm: #e3dacc;
  --color-manilla: #f5e3c7;
  --color-clay: #d97757;
  --color-clay-deep: #c6613f;

  /* Typography */
  --font-anthropic-serif: 'Anthropic Serif', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-anthropic-sans: 'Anthropic Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-anthropic-mono: 'Anthropic Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: -0.24px;
  --text-body-sm: 16px;
  --leading-body-sm: 1;
  --tracking-body-sm: -0.08px;
  --text-body: 20px;
  --leading-body: 1.4;
  --tracking-body: 0px;
  --text-subheading: 24px;
  --leading-subheading: 1.3;
  --tracking-subheading: -0.05px;
  --text-heading: 61px;
  --leading-heading: 1.1;
  --tracking-heading: -0.12px;
  --text-display: 68px;
  --leading-display: 1.1;
  --tracking-display: 0px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-76: 76px;
  --spacing-100: 100px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
}
```
# Claude — Style Reference
> Warm parchment printed artifact — ink on bone paper, clay as the only chromatic breath.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Claude presents a warm-paper editorial interface: off-white parchment canvas (#f8f8f6) replaces the usual cold-white SaaS backdrop, paired with a near-black warm charcoal (#121212) for typography that reads as ink on paper rather than pixels on glass. The system is deliberately monochrome — the only chromatic accent is clay orange (#d97757), used sparingly as a signature mark rather than a call-to-action flood. Typography is the hero: Anthropic Serif sets the emotional headlines (the rare serif in tech), Anthropic Sans carries everything else at restrained weights (400-580), creating a hierarchy through size and weight contrast rather than color. Surfaces are flat with generous corner radii (16-24px on cards, 8px on controls), minimal shadow, and hairline borders — the aesthetic of a printed document rather than a digital product.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Bone Parchment | `#f8f8f6` | `--color-bone-parchment` | Page canvas, large background areas, nav bar, secondary cards |
| Paper White | `#ffffff` | `--color-paper-white` | Elevated card surfaces, primary content surfaces above the canvas |
| Soft Stone | `#efeeeb` | `--color-soft-stone` | Nested card surfaces, subtle background variation, alternate section bands |
| Carbon Ink | `#121212` | `--color-carbon-ink` | Primary text, headings, icon fills — warm near-black rather than pure black |
| Graphite | `#373734` | `--color-graphite` | Secondary headings, button text, nav text — softer than carbon |
| Ashen | `#7b7974` | `--color-ashen` | Muted helper text, captions, fine print, disclaimer copy |
| Pebble | `#9c9a92` | `--color-pebble` | Tertiary text, copyright, very low-priority labels |
| Mist | `#b7b7b5` | `--color-mist` | Hairline nav dividers, subtle border lines |
| Chalk | `#e7e6e1` | `--color-chalk` | Decorative illustration fills, soft background tints |
| Obsidian | `#000000` | `--color-obsidian` | Footer background — only true black on the page |
| Clay | `#d97757` | `--color-clay` | Orange decorative accent for icons, marks, and small graphic details. Do not promote it to the primary CTA color |

## Tokens — Typography

### Anthropic Serif — Display and editorial headlines (Explore plans, Think fast build faster). The serif is the brand signature — rare in AI/tech product UI; here it signals thoughtfulness and editorial confidence rather than software utility. · `--font-anthropic-serif`
- **Substitute:** Source Serif 4, Charter, Georgia
- **Weights:** 400
- **Sizes:** 24px, 30px
- **Line height:** 1.20-1.33
- **Letter spacing:** normal
- **Role:** Display and editorial headlines (Explore plans, Think fast build faster). The serif is the brand signature — rare in AI/tech product UI; here it signals thoughtfulness and editorial confidence rather than software utility.

### Anthropic Sans — All interface text: body copy, nav, buttons, cards, links, labels. Weight 580 is the heaviest; weight 400 dominates. The whisper-to-medium weight range creates hierarchy through contrast rather than heaviness — headlines don't shout at 800, they speak at 580. · `--font-anthropic-sans`
- **Substitute:** Inter, IBM Plex Sans, system-ui
- **Weights:** 400, 500, 550, 580, 600
- **Sizes:** 11px, 12px, 14px, 15px, 16px, 24px
- **Line height:** 1.33-1.63
- **Letter spacing:** normal
- **Role:** All interface text: body copy, nav, buttons, cards, links, labels. Weight 580 is the heaviest; weight 400 dominates. The whisper-to-medium weight range creates hierarchy through contrast rather than heaviness — headlines don't shout at 800, they speak at 580.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | — | — | 11px | 1.5 | — | `--text-caption` |
| body | — | — | 14px | 1.5 | — | `--text-body` |
| heading-sm | — | — | 24px | 1.33 | — | `--text-heading-sm` |
| heading | — | — | 30px | 1.2 | — | `--text-heading` |

## Tokens — Spacing & Shapes

**Base unit:** 8px

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 8px |
| cards | 16px |
| inputs | 8px |
| buttons | 8px |
| elevatedCards | 24px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| lg | `rgba(0, 0, 0, 0.04) 0px 4px 20px 0px` | `--shadow-lg` |
| lg-2 | `oklab(0.431435 -0.02915 -0.125723 / 0.1) 0px 4px 24px 0px` | `--shadow-lg-2` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64-80px
- **Card padding:** 32px
- **Element gap:** 8-12px

## Components

### Filled Dark Button
**Role:** Primary call-to-action on light surfaces

Dark carbon fill (#121212 or near-black), warm white text (#f8f8f6 or #fff), 8px radius, 8px vertical / 20px horizontal padding, 15px Anthropic Sans weight 500. The warmth of the text color on dark fill (f8f8f6, not pure white) keeps the button from feeling like a generic dark UI element.

### Pill Navigation Button
**Role:** Top-level nav links in header bar

Transparent background, Graphite (#373734) text, no border, 8px radius, 15px sans weight 500. Sits on the Bone Parchment canvas (#f8f8f6) with generous horizontal padding. The nav bar is minimal — logo left, links centered or right, no heavy borders or fills.

### Pricing Tier Card
**Role:** Plan comparison card (Free, Pro, Max)

White (#ffffff) surface on Bone Parchment canvas, 24px radius, 32px padding all sides. Heading uses Anthropic Serif 24-30px. Price in Carbon Ink (#121212), description in Ashen (#7b7974). No shadow by default — a soft 4px 24px shadow at oklab warmth appears on hover or featured tiers. Hairline 1px border at #e7e6e1 optional.

### Feature Benefit Card
**Role:** Compact card for feature lists within a plan

Soft Stone (#efeeeb) or Paper White (#ffffff) surface, 16px radius, generous internal padding (24-32px). Checkmark icons in Carbon Ink, body text at 14px in Graphite. Flat — no shadow. Creates a layered paper effect against the canvas.

### Editorial Section Header
**Role:** Section title with the Anthropic Serif treatment

Anthropic Serif 30px weight 400, line-height 1.2, Carbon Ink (#121212). Followed immediately by a short Ashen (#7b7974) body sentence at 16px. Generous 64-80px margin-top from the previous section.

### Footer Band
**Role:** Dark site footer

Obsidian (#000000) background — the only true black on the page, creating a deliberate tonal break. Text in muted gray (#9c9a92), links in Pebble or lighter. Multi-column grid with product/resource/company groupings. Compact 14px sans throughout.

### Inline Link
**Role:** Text links within body copy

Color shifts between default (Graphite #373734) and hover (Carbon Ink #121212) with underline. No chromatic color — the system treats links as typography, not as colored emphasis. Transitions on color/background-color at 0.2s ease.

### Input Field
**Role:** Email input on sign-in and signup forms

Transparent or Paper White fill, 1px border at Pebble (#b7b7b5) or Mist, 8px radius, 14px sans. Focus ring uses the cds-focus-shadow pattern: inset page-color ring + outer accent ring + blue glow. No dramatic state color shift.

### FAQ Accordion Item
**Role:** Expandable question in FAQ section

Borderless or hairline divider between items, question text in Graphite (#373734) at 14-16px sans, body expands below in Carbon Ink (#121212). Anthropic Sans carries the entire interaction — no serif in the FAQ body. Generous 24px vertical padding per item.

### Clay Accent Mark
**Role:** Decorative brand flourish, not an interactive element

Small Clay orange (#d97757) marks — dots, ornaments, illustration accents — that serve as the single chromatic breath in an otherwise monochrome system. Never used for button fills or large backgrounds.

### Status Badge
**Role:** Small inline status indicators

8px radius, 11-12px sans weight 500, low-contrast background tint with Carbon Ink or Graphite text. Rarely chromatic — stays in the warm-gray family to match the editorial tone.

## Do's and Don'ts

### Do
- Use Bone Parchment (#f8f8f6) as the default page canvas — never pure white for large backgrounds.
- Set display headlines in Anthropic Serif weight 400 at 30px with line-height 1.2; let the serif do the work, not weight.
- Keep the palette monochrome — the only chromatic color is Clay (#d97757), reserved for decorative marks and editorial accents, never button fills.
- Use 24px radius for elevated cards and 16px for nested/secondary cards; 8px for all buttons, inputs, and nav controls.
- Maintain generous section spacing: 64-80px between major sections, 32px card padding, 8-12px between elements within a component.
- Pair Carbon Ink (#121212) text with Paper White (#ffffff) cards on Bone Parchment (#f8f8f6) for the layered paper effect.
- Reference warm grays (Graphite, Ashen, Pebble) for text hierarchy — never introduce a second chromatic for emphasis.

### Don't
- Don't introduce button fills in Clay orange or any chromatic color — actions stay dark on light or light on dark.
- Don't use pure black (#000000) for body text — Carbon Ink (#121212) is warmer and reads as ink, not void.
- Don't set headlines at weight 700+ — the system speaks at weight 580 max for sans and 400 for serif.
- Don't apply heavy shadows to cards — shadow appears only as a soft 4px 20-24px wash at low opacity, or not at all.
- Don't use cool blues or greens for accent or brand — the system is deliberately warm monochrome.
- Don't set large display headlines in Anthropic Sans — the serif is the signature, the sans is the utility.
- Don't add decorative gradients — the design rejects them in favor of flat, printed-paper surfaces.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Page Canvas | `#f8f8f6` | Base background for all pages — warm off-white parchment |
| 2 | Card Surface | `#ffffff` | Primary content cards elevated above the canvas |
| 3 | Nested Surface | `#efeeeb` | Secondary cards or sub-sections within a card |
| 4 | Dark Band | `#000000` | Footer — only dark surface, creates deliberate tonal break |

## Elevation

- **Feature Card (hover state):** `rgba(0, 0, 0, 0.04) 0px 4px 20px 0px`
- **Pricing Tier Card (featured/hover):** `oklab(0.431435 -0.02915 -0.125723 / 0.1) 0px 4px 24px 0px`

## Imagery

Imagery is sparse and editorial in tone. Product photography and illustrations appear full-bleed within hero or feature sections, treated with generous corner radii (16-24px) and no decorative borders. The Clay orange accent (#d97757) appears in select illustration details — hands, objects, ornamental marks — reinforcing the warm paper aesthetic. Icons are mono Carbon Ink, outlined or filled at consistent weight, never multicolor. The overall density is low: most sections are text-dominant with imagery appearing as punctuation rather than spectacle. No gradients, no glow effects, no 3D renders.

## Layout

Claude uses a max-width contained layout centered around 1200px on the Bone Parchment canvas. The hero pattern is a centered editorial headline in Anthropic Serif over generous whitespace, often paired with a full-bleed product image below the fold. Sections flow as alternating light bands — Bone Parchment canvas with white cards floating on it, occasional Soft Stone (#efeeeb) bands for visual rhythm. Content arrangement alternates between centered stacks (headlines, FAQs, CTAs) and asymmetric 2-column layouts (text-left/image-right feature blocks). Pricing uses a 3-column card grid (Free, Pro, Max) with elevated featured tier. Navigation is a minimal top bar: logo left, link cluster right, no heavy borders or fills. Vertical spacing is generous — 64-80px between sections, 32px within cards — creating a printed-page cadence rather than a dense product UI.

## Agent Prompt Guide

**Quick Color Reference**
- Text (primary): #121212
- Text (secondary): #373734
- Text (muted): #7b7974
- Background (canvas): #f8f8f6
- Background (card): #ffffff
- Border (hairline): #b7b7b5 or #e7e6e1
- Accent (decorative only): #d97757
- primary action: no distinct CTA color

**Example Component Prompts**

1. *Pricing tier card*: White surface (#ffffff) on Bone Parchment canvas (#f8f8f6). 24px radius, 32px padding. Plan name in Anthropic Serif 24px weight 400 (#121212). Price in Anthropic Sans 24px weight 580 (#121212). Description in 14px sans (#7b7974). Filled dark button at bottom: #121212 background, #f8f8f6 text, 8px radius, 8px/20px padding, 15px sans weight 500.

2. *Editorial hero section*: Bone Parchment (#f8f8f6) background, no border. Headline in Anthropic Serif 30px weight 400 (#121212), line-height 1.2. Subtext in Anthropic Sans 16px weight 400 (#373734). 64-80px vertical padding above and below. Optional Clay (#d97757) accent dot or mark beside the headline.

3. *FAQ accordion item*: Transparent background, no card. Question in Anthropic Sans 16px weight 500 (#373734). Body answer in 14px weight 400 (#121212). Hairline 1px bottom border at #e7e6e1. 24px vertical padding. No chevron icon color — use Carbon Ink (#121212).

4. *Footer band*: Obsidian (#000000) full-width background. Three or four columns of links. Link text in Pebble (#9c9a92), 14px sans. Copyright in 12px sans (#9c9a92). 64px vertical padding. No icons in footer link rows.

5. *Dark navigation button*: Transparent fill, Graphite (#373734) text, 8px radius, 15px Anthropic Sans weight 500, 20px horizontal padding. Hover transitions to Carbon Ink (#121212) at 0.2s ease. No border, no background fill.

## Editorial Typography System

The defining signature of this design system is the deliberate pairing of Anthropic Serif (headlines only, weight 400) with Anthropic Sans (everything else, weight 400-580). The serif appears at exactly two sizes: 24px and 30px, used exclusively for section titles, plan names, and editorial hero copy. The sans carries 11px through 24px across all UI roles — body, nav, buttons, labels, captions. Weight 580 is the heaviest weight in use; the system never reaches 600+. This creates a visual language where the serif whispers authority through typographic contrast alone, and the sans does all the functional heavy lifting. When rebuilding pages, resist the urge to bold up — let size and weight differential create hierarchy.

## Warm Monochrome Philosophy

Claude's palette is deliberately restricted to warm neutrals plus one chromatic accent. The near-black text colors (#121212, #373734) carry a subtle warmth that distinguishes them from clinical SaaS blacks. The canvas (#f8f8f6) and card surfaces (#ffffff, #efeeeb) form a paper-like progression: parchment → paper → vellum. The single accent — Clay (#d97757) — appears only in decorative contexts: small marks, illustration details, editorial flourishes. It is never used to fill buttons, highlight links, or draw attention to data. This restraint is the brand. Adding additional chromatic colors (blues for links, greens for success, reds for error) would break the system's editorial integrity.

## Similar Brands

- **Stripe** — Same warm off-white canvas (#fbf9f6 territory), generous whitespace, flat card surfaces with soft radii, and restraint in using color — Stripe also keeps its palette nearly monochrome in marketing surfaces.
- **Linear** — Dark and light mode mastery with minimal chromatic accents, generous card radii (16-24px), and tight typographic hierarchy — though Linear skews darker while Claude skews warm-paper.
- **Notion** — Editorial restraint: monochrome palette, generous spacing, serif-optional typography that prioritizes readability over visual spectacle.
- **Arc Browser** — Warm-paper aesthetic with clay-adjacent accent palette, editorial typographic confidence, and a refusal to use typical SaaS blue as a brand color.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-bone-parchment: #f8f8f6;
  --color-paper-white: #ffffff;
  --color-soft-stone: #efeeeb;
  --color-carbon-ink: #121212;
  --color-graphite: #373734;
  --color-ashen: #7b7974;
  --color-pebble: #9c9a92;
  --color-mist: #b7b7b5;
  --color-chalk: #e7e6e1;
  --color-obsidian: #000000;
  --color-clay: #d97757;

  /* Typography — Font Families */
  --font-anthropic-serif: 'Anthropic Serif', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-anthropic-sans: 'Anthropic Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 11px;
  --leading-caption: 1.5;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --text-heading: 30px;
  --leading-heading: 1.2;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-w550: 550;
  --font-weight-w580: 580;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64-80px;
  --card-padding: 32px;
  --element-gap: 8-12px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;

  /* Named Radii */
  --radius-nav: 8px;
  --radius-cards: 16px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;
  --radius-elevatedcards: 24px;

  /* Shadows */
  --shadow-lg: rgba(0, 0, 0, 0.04) 0px 4px 20px 0px;
  --shadow-lg-2: oklab(0.431435 -0.02915 -0.125723 / 0.1) 0px 4px 24px 0px;

  /* Surfaces */
  --surface-page-canvas: #f8f8f6;
  --surface-card-surface: #ffffff;
  --surface-nested-surface: #efeeeb;
  --surface-dark-band: #000000;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-bone-parchment: #f8f8f6;
  --color-paper-white: #ffffff;
  --color-soft-stone: #efeeeb;
  --color-carbon-ink: #121212;
  --color-graphite: #373734;
  --color-ashen: #7b7974;
  --color-pebble: #9c9a92;
  --color-mist: #b7b7b5;
  --color-chalk: #e7e6e1;
  --color-obsidian: #000000;
  --color-clay: #d97757;

  /* Typography */
  --font-anthropic-serif: 'Anthropic Serif', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-anthropic-sans: 'Anthropic Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 11px;
  --leading-caption: 1.5;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.33;
  --text-heading: 30px;
  --leading-heading: 1.2;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;

  /* Shadows */
  --shadow-lg: rgba(0, 0, 0, 0.04) 0px 4px 20px 0px;
  --shadow-lg-2: oklab(0.431435 -0.02915 -0.125723 / 0.1) 0px 4px 24px 0px;
}
```

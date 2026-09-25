# AGENTS.md

Instructions for human volunteers and AI coding agents (including Vidu) working
on this site.

## What this repo is

Astro static site for buddhameditationdc.org. No WordPress. No CMS database.
Content is files.

## Do this first

1. Read `PRODUCT.md` (who we are), `DESIGN.md` (the Open Hall design system) and
   `PLAN.md` (where the rebuild is going).
2. `npm install`, then `npm run dev`.
3. Keep changes small. Colour, type and space come from
   `design_concept/system.css`, which the layout imports. Mirror any token
   change into `src/styles/tokens.css`.

## Commands

| Command | Does |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Static build to `dist/` |
| `npm run check` | **Design-system lint.** Fails on raw hex, off-scale spacing, shadows, banned fonts |
| `npm run concept` | Rebuilds the 21-page design concept in `design_concept/` |
| `npm run serve` | Static file server — `npm run serve 4599 .` to browse the concept and the design system |

Run `npm run check` before you open a pull request. It must pass. Do not add
a raw hex, an off-scale gap, a shadow, or a banned font.

## Add a blog post

Create `src/content/blog/your-slug.mdx`:

```mdx
---
title: "Clear title"
description: "One sentence."
pubDate: 2026-09-09
author: Buddha Meditation Center
tags: [practice]
---

Write in MDX. You may import Astro components.
```

## Add a Dhamma article

Create `src/content/learn/your-slug.mdx` with the same fields plus optional
`sutta`, `series`, `part`.

## Add or edit a program

Edit `src/data/programs.ts`. The detail page, the catalogue row, the home tile
and the structured data are all generated from that one object. Do not create a
parallel program page.

## Site-wide facts

Edit `src/data/site.ts` — address, Zoom, Eventbrite, Zeffy, social, stats. A
Zoom link change is a one-line edit, never a page hunt.

## Images

Put real photographs in `public/images` with descriptive names.

**An image is not finished until its focal point is recorded.** Our photographs
are mostly landscape phone shots, so a 4:5 crop can cut the subject out. Record
the `object-position` in both `src/data/photos.ts` (the live site) and the
`focus` map in `scripts/build-concept.mjs` (the static concept).

Do not copy the WordPress media dump. Skip event posters, AI generations,
placeholders and theme leftovers — the banned list is in `DESIGN.md` §9.

## Design rules you must not break

These are the ones that get broken most often. The full system is `DESIGN.md`.

- **Never invent a value.** If the spacing, size or colour you want is not a
  token, use the nearest token — do not write a new number.
- No navy `#1C244B`, no amber `#D68B4B`, no `#000`, no `#fff`.
- Display type is **Abhaya Libre 500–600**. 700 is the wordmark only. UI is
  Source Sans 3. Never Inter, Cormorant, Playfair, Fraunces or Instrument Serif.
- **No card grids.** Use the rule list. No shadows, anywhere.
- **No text over a photograph.** A photograph is a whole picture with the words
  beside it.
- One primary (filled) button per screenful. Secondary actions are outlined.
- Three breakpoints only: 62rem, 52rem, 34rem.
- Components stay local until they appear three times.

The one-line test: *would a person who has just sat for forty minutes find this
page restful?* If not, remove something.

## Integrations

- Newsletter: Brevo form URL in `site.brevoForm`.
- Donate: Zeffy URL in `site.zeffy.donate`.
- Events: Eventbrite URLs in `site.eventbrite`.
- Analytics: `PUBLIC_GA_ID` and optional `PUBLIC_GTM_ID` in `.env`.
- Vidu widget: `PUBLIC_VIDU_SCRIPT_URL`. If empty, no widget is injected.

## SEO

Every page uses `BaseLayout` title + description, and frontmatter is the source
of truth — there is no RankMath and there will not be one. Structured data is
generated from the same data that renders the page, so the two cannot drift
apart. `public/llms.txt` is for answer engines; keep it current. See `PLAN.md`
§5 for the full approach.

## What not to do

- Do not add a WordPress plugin, a page builder, or a general-purpose CSS
  framework unless asked.
- Do not generate hero illustrations when a real photograph exists.
- Do not put religion in the first fold of the homepage.
- Do not add a new font, a raw hex code, or a raw pixel gap. `npm run check`
  will catch it, but do not make it do the work.

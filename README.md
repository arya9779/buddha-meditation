# Buddha Meditation Center

Astro rebuild of [buddhameditationdc.org](https://buddhameditationdc.org), built
on **Open Hall** — a design system of warm paper, ink and clay, real photography,
and a great deal of deliberate empty space.

## For the client review

Start a local server, then open the two links below.

```bash
npm install
npm run serve          # http://localhost:4599
```

| | |
|---|---|
| **Design system** | `http://localhost:4599/design_system/index.html` |
| **Concept site** (21 pages) | `http://localhost:4599/design_concept/index.html` |

Both open from the file system too, if you would rather just double-click
`design_system/index.html`.

Then read `PLAN.md` for the rebuild plan, timeline, SEO/AEO/GEO approach and
integration carry-over.

## Run the site

```bash
npm run dev            # dev server
npm run build          # static build to dist/
npm run check          # design-system lint
npm run concept        # regenerate the design concept
```

## Layout

| Path | Purpose |
|---|---|
| `design_system/` | The design system, documented and interactive |
| `design_concept/` | The system applied — 21 pages, generated |
| `src/pages` | Routes |
| `src/content/blog` | Blog MDX |
| `src/content/learn` | Dhamma archive MDX |
| `src/data` | Site facts, programs, testimonials |
| `src/styles/tokens.css` | Design tokens — the values, canonically |
| `public/images` | Curated photographs |
| `scripts/` | Concept build, token lint, static server |
| `old-site/` | WordPress export and full media dump (not shipped) |
| `_archive/` | Superseded concepts and working screenshots |

## Documents

| File | What it answers |
|---|---|
| `PRODUCT.md` | Who we are, who the site is for, the funnel |
| `DESIGN.md` | The design system in text — colour, type, space, components, voice |
| `PLAN.md` | The rebuild: platform, timeline, SEO, integrations, risks |
| `AGENTS.md` | How to work in this repo without breaking it |

## Image policy

618 media files live in `old-site/images`. The site only uses the curated set in
`public/images`. `_copy_images.py` is the map from dump → site. Do not bulk-copy
the archive, and do not use event posters or AI generations — see `DESIGN.md` §9.

## Hosting

Deploy on Vercel from this repo. Framework preset: Astro. Build command
`npm run build`. Output directory `dist`. The site is static, so no adapter is
required. `vercel.json` sends the old WordPress addresses to the new pages.

After the first deploy, point buddhameditationdc.org at Vercel and add
`PUBLIC_GA_ID` (and `PUBLIC_GTM_ID` if you use it) in the project environment.
Verify Search Console by DNS TXT so it survives the host change.

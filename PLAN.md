# Rebuild plan — buddhameditationdc.org

WordPress → Astro, with the **Open Hall** design system applied across the site
and the wider BMC ecosystem.

Companion documents:

| Document | What it is |
|---|---|
| `design_system/index.html` | The design system, documented and interactive |
| `design_concept/index.html` | 21 pages of the new site, built on that system |
| `DESIGN.md` | The same system in text, for volunteers and AI agents |
| `PRODUCT.md` | Who we are, who the site is for, the funnel |
| `AGENTS.md` | How the repository works |

---

## 1. What we are proposing

Two deliverables, as the brief separates them.

**A design system** — colour, type, spacing, layout, components, motion,
photography, voice and ecosystem rules — engineered as tokens, documented in a
page anyone can read, and implemented as one stylesheet that is the single
source of truth.

**A rebuild** — a static Astro site in the BMC-DC GitHub organisation, with the
content in files, structured around the six-stage conversion funnel, and built
to be maintained by coding agents including Vidu.

### What changes visually, and why

| Current | New | Reason |
|---|---|---|
| Navy `#1C244B` | Warm ink `#261f19` | Navy reads as enterprise software |
| Amber `#D68B4B` | Clay `#b6694b` | The same warmth without the glare — and it is the colour already in every photograph we own |
| Display type at 700–800 | 500–600 at larger sizes | This is most of what made the site feel heavy |
| Cards with shadows | Hairline rows and paper tones | Depth from surface, not from shadow |
| Card grids of programmes | Rule lists with real thumbnails | Rhythm instead of noise |
| No declared spacing scale | Nine steps, three bands | Removes the arbitrary values each volunteer introduced |
| Mixed photography including posters | Real session photographs only, with declared focal points | Posters and stock are the main source of visual inconsistency |

---

## 2. Platform decisions

| Decision | Choice | Why |
|---|---|---|
| Framework | **Astro 5**, static output | Ships zero JavaScript by default; excellent Core Web Vitals, which feeds SEO |
| Content | **MDX** for `/blog` and `/learn`; TypeScript data for programmes | MDX supports custom components, as requested; programmes as data means one edit generates every page |
| Repository | **github.com/BMC-DC/buddhameditationdc.org** | You own and host it long term |
| Hosting | **Cloudflare Pages** (alternative: Netlify) | Free tier, global CDN, automatic preview deploy per pull request, no server to maintain |
| DNS | Stays with you; we provide the records | Avoids a dependency on us after handover |
| CMS | **None** | A database is the thing that made WordPress hard to maintain. Files are what coding agents edit well |

### Why no CMS

Every requirement in the brief — MDX archives, AI-agent maintenance, speed,
static generation, volunteers following one standard — points the same way. If
non-technical editing later becomes a blocker, the lightest fix is a Git-backed
editor (Decap or TinaCMS) pointed at the same MDX files, added without changing
the site. We would not add it on day one.

---

## 3. Site structure — the funnel made physical

The brief describes a journey of one to six months. The structure follows it.

| Stage | Pages | What does the work | Visitor leaves with |
|---|---|---|---|
| **1 Arrive** | `/` | Arched hero, breath mark, proof row | A session time and a reason to trust us |
| **2 Believe** | `/results` | Proof row, four testimonies, the evaluation report | Evidence |
| **3 Attend** | `/programs`, `/programs/[slug]`, `/visit`, `/events` | Rule list, steps, questions | A booked cushion |
| **4 Return** | programme details | "Also in this group", sit-with-this | A second date |
| **5 Serve** | `/volunteer`, `/donate` | Fact grid, one clay button | An hour, or a gift |
| **6 Study** | `/learn`, `/learn/[slug]`, `/programs/sutta-class` | Plain rule list, moss accent | An article, then a class |

**The newsletter capsule sits at the foot of every page** — stages 1 to 3 can
take months, and the email list is what holds someone across that gap. It is the
minimum value a visitor can leave with, which is exactly what the brief asks for.

Two design rules enforce the brief's positioning:

- **No religion in the first fold of the home page.** Mindfulness and stress
  relief are the front door; the About page is completely explicit about who we
  are for anyone who scrolls that far.
- **"Sit with this"** appears on every major page — one instruction, given away
  free. A visitor who never clicks anything has still meditated.

---

## 4. Timeline

Eight weeks to launch, plus two weeks of stabilisation. Phases 2 and 3 overlap.

| Phase | Work | Duration |
|---|---|---|
| **0 · Sign-off** | Review this system, agree the sitemap, confirm the URL inventory and who owns DNS | Week 1 |
| **1 · Foundations** | Repo in BMC-DC, Astro scaffold, tokens, layout primitives, component library, Cloudflare Pages with preview deploys, CI | Week 1–2 |
| **2 · Core pages** | Home, 10 programme pages, About, Visit, Results, Events, Give, Volunteer, Privacy, 404 | Week 3–4 |
| **3 · Content systems** | MDX collections for `/blog` and `/learn`, WordPress content migration, image optimisation pass | Week 4–5 |
| **4 · Integrations** | Brevo, Eventbrite, Zeffy, Zoom, GA4, GSC, GTM, Vidu hook | Week 6 |
| **5 · SEO / AEO / GEO** | Schema, metadata, sitemap, 301 map, performance and accessibility audit | Week 6–7 |
| **6 · QA and launch** | Content review with your team, cross-browser and device QA, staged DNS cutover | Week 8 |
| **7 · Handover** | Volunteer and Vidu documentation, a walkthrough session, two weeks of monitoring | Week 9–10 |

**Critical path:** the WordPress URL inventory. Everything in Phase 5 depends on
having the complete list of live URLs and their traffic, so we want it in week 1.

---

## 5. SEO, AEO and GEO

RankMath does not carry over, and it does not need to. On a static site the
frontmatter *is* the SEO configuration, which suits maintenance by coding agents
better than a plugin UI.

### Replacing RankMath

| RankMath did | Now |
|---|---|
| Title and description per page | Frontmatter, typed and validated at build |
| Schema markup | JSON-LD components, generated from the same data as the page |
| Sitemap | `@astrojs/sitemap`, already installed |
| Redirects | A checked-in redirect map, deployed at the edge |
| Content analysis | Human review plus a Lighthouse CI budget on every pull request |

Nothing is lost, and none of it can silently drift out of sync with the page,
which is RankMath's actual failure mode.

### Structured data — the highest-value work

We generate JSON-LD from the existing data, so it can never contradict the page:

- **Organization / BuddhistTemple** with the full NAP, geo coordinates and
  `openingHoursSpecification`
- **Event** for every session and retreat — this is what surfaces you in Google's
  events results and in "meditation near me". It is the single biggest
  opportunity on the site and WordPress was not doing it
- **Course** for the sutta class
- **FAQPage** on `/visit` — the six questions are already written
- **BlogPosting / Article** for `/blog` and `/learn`, with `author`,
  `datePublished` and the sutta cited as `citation`
- **AggregateRating** for the 4.90/5, sourced from the evaluation and shown
  on-page (Google requires the rating be visible, not only in markup)
- **BreadcrumbList** on every nested page

### Performance

Astro static output plus `astro:assets` gives responsive `srcset`, AVIF/WebP and
intrinsic dimensions, which removes layout shift. The current media library has
single images over 1.5 MB; an optimisation pass is budgeted in Phase 3.

Target: Lighthouse 95+ on all four categories, enforced in CI so it cannot
regress.

### Migration safety

1. Export every live URL from WordPress with its traffic (GSC, 16 months).
2. Map each one to a new URL; keep the slug wherever it already ranks.
3. Ship 301s at the edge before cutover, not after.
4. Re-submit the sitemap and watch GSC coverage daily for two weeks.

We expect a small dip in weeks 1–2 after any migration. The redirect map is what
keeps it small.

### AEO and GEO — being cited by answer engines

The same content that ranks well in search is not automatically what an answer
engine quotes. What works:

- **Answerable sentences near the top of the page.** "Sunday evening meditation
  runs 5:00 – 7:00 pm at 5004 Stone Rd, Rockville, and it is free" is quotable.
  "Join us for an enriching experience" is not.
- **Question-shaped headings** with the answer immediately beneath, backed by
  FAQPage schema.
- **Entity consistency.** Identical name, address and phone on the site, Google
  Business Profile, Eventbrite, Facebook and Instagram. Answer engines assemble
  entities from agreement across sources; a mismatched suite number is enough to
  split you into two entities.
- **`llms.txt`** at the root — already in the repo. We keep it current: what the
  center is, what it offers, when, where, and the canonical URLs.
- **Crawler policy.** `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`
  and `CCBot` each need an explicit allow or disallow in `robots.txt`. Our
  recommendation is **allow** — being quoted by an assistant is a new top of
  funnel, and there is nothing here we would withhold. **This is your decision
  and we will not set it without a yes.**
- **Cite your own sources.** Linking the sutta each article draws on makes the
  archive more quotable, not less.

### Tooling we would actually use

| Need | Tool | Cost |
|---|---|---|
| Index coverage, queries | Google Search Console | Free |
| Crawl and redirect audit | Screaming Frog | Free to 500 URLs |
| Keyword and backlink view | Ahrefs Webmaster Tools, Bing Webmaster | Free |
| Performance regression | Lighthouse CI in GitHub Actions | Free |
| Rank tracking | Only if you want it — GSC covers most of it | — |

We would not recommend paying for an SEO platform. The work here is structured
data and page speed, both of which live in the codebase.

---

## 6. Integrations

| Service | Use | Approach |
|---|---|---|
| **Brevo** | Newsletter | The form posts directly to the existing Brevo endpoint. No intermediate page, no JavaScript required. Double opt-in on |
| **Eventbrite** | Registrations | Link out, not embed — the widget is heavy and would cost more in Core Web Vitals than it returns. Optionally pull upcoming events through the API at build time into static JSON, with a nightly rebuild, so `/events` is never stale |
| **Zeffy** | Giving | Link out. Zeffy takes no platform fee, which is worth saying on the page |
| **Zoom** | Online sessions and sutta class | Direct links from `src/data/site.ts` |
| **Vidu** | Your internal agent | Script URL from an environment variable; when it is unset the control falls back to `/contact`, so the site never ships a broken widget |

All service URLs live in one file, `src/data/site.ts`. Changing a Zoom link is a
one-line edit, not a page hunt.

---

## 7. Analytics and ad measurement

Since Akkomplish is already running campaigns, measurement needs to be right on
day one.

- **GA4** — carried over, same property, so history is unbroken.
- **GTM** — yes, in this case. It lets the ads team add or change a pixel
  without a deploy, which is the one real argument for a container. Loaded after
  the page is interactive so it does not cost Core Web Vitals.
- **GSC** — verify by **DNS TXT record**, not by an HTML file, so verification
  survives the host change.

Conversion events to define before launch:

| Event | Fires when | Funnel stage |
|---|---|---|
| `newsletter_signup` | Brevo form submitted | The floor — every visitor |
| `program_view` | A programme detail page is read | 3 |
| `event_register_click` | Eventbrite link clicked | 3 |
| `zoom_join_click` | A Zoom link clicked | 3 |
| `donate_click` | Zeffy link clicked | 5 |
| `volunteer_enquiry` | Volunteer email link clicked | 5 |

Each maps to a funnel stage, so the campaign report can be read as "how many
people moved from stage 2 to stage 3 this month" rather than as a list of clicks.

---

## 8. Built for AI maintenance

The brief asks for a codebase that coding agents work well with. Concretely:

- **Three files an agent reads first** — `PRODUCT.md`, `DESIGN.md`, `AGENTS.md`.
  An agent that has read them will not invent a colour.
- **Content is data, not markup.** Adding a programme means editing one object
  in `src/data/programs.ts`; the page, the catalogue row, the tile and the
  schema all regenerate. Nothing to copy, nothing to forget.
- **One stylesheet, all tokens.** A change that contains a raw hex code, a raw
  pixel gap or a new font is wrong by definition — which means it can be caught
  automatically.
- **A lint that enforces it.** `npm run check` fails the build on raw hex codes
  and off-scale spacing in application CSS. This is the thing that keeps the
  design system alive after handover, and it is the part most design systems
  skip.
- **Preview deploys per pull request**, so a volunteer or an agent can see the
  result before anything reaches the live site.

---

## 9. What we need from you

| Need | When |
|---|---|
| Sign-off on the design system direction | Week 1 |
| Access to the BMC-DC GitHub organisation | Week 1 |
| WordPress export and the full URL list | Week 1 — this is the critical path |
| GA4, GSC and GTM access | Week 1 |
| Who controls the DNS for buddhameditationdc.org | Week 1 |
| A decision on AI crawler access | Before Phase 5 |
| Original-resolution photographs where we only have web copies | Week 3 |
| Content review of the 21 pages | Week 7 |

**A note on the concept copy.** The words in `design_concept/` are written to
demonstrate the voice, not to be published as-is. Session times, addresses and
the four statistics come from your own data; everything else — the visit
sequence, the six questions, the volunteer roles — is plausible placeholder that
needs a factual pass from someone at the center. We have deliberately avoided
asserting anything we could not source, such as a founding year or travel times,
rather than filling the gaps with confident guesses.

---

## 10. Risks, and how we hold them

| Risk | Mitigation |
|---|---|
| Traffic dip after migration | Complete 301 map shipped **before** cutover; daily GSC monitoring for two weeks |
| Content parity — a page is missed | URL inventory in week 1 is the checklist; nothing is cut without a named decision |
| Image weight hurts the speed we are promising | Optimisation pass budgeted in Phase 3; Lighthouse budget enforced in CI |
| The system decays again after handover | The token lint, plus documentation written for volunteers rather than for us |
| Photography runs thin | Several current files are event posters and cannot be used. A volunteer photography brief is part of handover |
| Scope creep during content review | Week 7 is a review, not a redesign. Visual changes after Phase 6 move to the post-launch backlog |

---

## 11. Immediately after launch

- Watch GSC coverage and Core Web Vitals daily for two weeks.
- Confirm every conversion event is firing against real traffic.
- Write the first newsletter in the new template.
- Run one working session with the volunteers who maintain the site, and one
  with whoever operates Vidu.
- Agree a quarterly design-system review so version 1.1 is a decision rather
  than a drift.

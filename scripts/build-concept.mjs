/* Builds the "Open Hall" design concept into /design_concept.
   Content comes from scripts/concept-data.mjs, which mirrors src/data/*.ts.
   Run: node scripts/build-concept.mjs                                        */

import fs from "node:fs";
import path from "node:path";
import { programs, groups, events, donate, map } from "./concept-data.mjs";

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "design_concept");

/* -- site facts ----------------------------------------------------------- */

const site = {
  name: "Buddha Meditation Center",
  also: "Mahamevnawa Meditation Center",
  place: "Rockville, Maryland",
  address: "5004 Stone Rd, Rockville, MD 20853",
  phone: "+1 762 233 3390",
  phoneHref: "tel:+17622333390",
  email: "info@buddhameditationdc.org",
  brevo:
    "https://f9d05f8f.sibforms.com/serve/MUIFAIlwzhx5cGbaTBXWo0mH6Lup_PFLCGnH2GxBnllZ_Y25_vnsZwr963KeuiapooHX4_xZCOQLnUFGpEubeH1n68wl3ygnnDnENXgxe01rJJt2OTz4aNxL8fant--qr5RUaAhmibXhAACP",
  facebook: "https://www.facebook.com/buddhameditationdc",
  instagram: "https://www.instagram.com/buddha_meditation_center_dc/",
  youtube: "https://www.youtube.com/@mahamevnawadc",
};

/* Photography.
   Every file below is a real photograph taken at one of our own sessions.
   Event posters, product shots and AI generations are excluded on purpose —
   see the banned list in DESIGN.md.

   `focus` is the object-position for each file, chosen so the subject
   survives a square or 4:5 crop. Set it once here, never inline in a page. */
const focus = {
  "meditate-with-monk.webp": "center 38%",
  "shrine-room.jpg": "34% 44%",
  "washington.webp": "55% 34%",
  "monk-outdoor.jpg": "62% 55%",
  "outdoor-group.webp": "center 38%",
  "hero-walking.jpg": "center 52%",
  "monthly-3.jpeg": "center 44%",
  "monthly-4.jpeg": "center 48%",
  "monthly-2.jpeg": "center 48%",
  "children-3.jpeg": "center 44%",
  "children-2.jpg": "center 56%",
  "children.jpeg": "center 44%",
  "monk-portrait.jpeg": "42% 52%",
  "community-group.jpg": "center 38%",
  "sandy-spring-hall.jpg": "center 52%",
  "sandy-spring.jpg": "center 55%",
  "dana-meal.jpg": "center 48%",
  "loku-swamin.webp": "center 40%",
  "day-long-6.webp": "center 48%",
  "place.webp": "center 46%",
};

/* One photograph per programme. No file is reused inside a single view. */
const img = {
  "meditate-with-a-monk": "washington.webp",
  "sunday-evening": "shrine-room.jpg",
  online: "monk-outdoor.jpg",
  "day-long": "outdoor-group.webp",
  "two-day": "hero-walking.jpg",
  monthly: "sandy-spring-hall.jpg",
  children: "children-3.jpeg",
  "sutta-class": "monk-portrait.jpeg",
  sinhala: "children-2.jpg",
  workplace: "monthly-4.jpeg",
};

const P = (f) => `../public/images/${f}`;
const photo = (slug) => P(img[slug] ?? "shrine-room.jpg");
const at = (src) => focus[src.split("/").pop()] ?? "center 50%";

/* -- helpers -------------------------------------------------------------- */

const e = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

const ext = (href) => (/^https?:/.test(href) ? ' target="_blank" rel="noreferrer"' : "");

/* Programme data uses live-site routes for internal CTAs. The concept is a flat
   folder of .html files, so map them across. */
const routes = {
  "contact.html": "visit.html",
  "/contact": "visit.html",
  "/visit": "visit.html",
  "/programs": "programs.html",
  "/donate": "donate.html",
};
const href = (h) => routes[h] ?? h;

const nav = [
  ["programs.html", "Programs"],
  ["about.html", "About"],
  ["visit.html", "Visit"],
  ["learn.html", "Teachings"],
];

const fig = (src, alt, shape = "fig--photo", pos = "") =>
  `<figure class="fig ${shape}"><img src="${src}" alt="${e(alt)}" style="object-position:${pos || at(src)}" loading="lazy" decoding="async"></figure>`;

const breath = '<span class="breath" aria-hidden="true"></span>';

const stillness = '<div class="stillness" role="presentation"></div>';

const newsletter = () => `
<section class="on-deep">
  <div class="u u-wide band">
    <div class="newsletter" data-reveal>
      <div class="stack">
        <p class="eyebrow">Stay in touch</p>
        <h2>One short note each week.</h2>
        <p class="lede">The week's sitting times, one paragraph worth reading, and nothing else. Unsubscribe in one click.</p>
      </div>
      <form class="capsule" action="${site.brevo}" method="post" target="_blank">
        <label class="sr" for="nl-email">Email address</label>
        <input id="nl-email" name="EMAIL" type="email" required placeholder="you@example.com" autocomplete="email">
        <button class="btn" type="submit">Subscribe</button>
      </form>
    </div>
  </div>
</section>`;

const footer = () => `
<footer class="site-foot">
  <div class="u u-wide band">
    <div class="foot-grid">
      <div>
        <h2>${site.name}</h2>
        <p class="foot-addr">
          ${site.also}<br>
          ${site.address}<br>
          <a class="link" href="${site.phoneHref}">${site.phone}</a><br>
          <a class="link" href="mailto:${site.email}">${site.email}</a>
        </p>
      </div>
      <div class="foot-col">
        <h3>Practice</h3>
        <ul>
          <li><a href="programs.html">All programs</a></li>
          <li><a href="meditate-with-a-monk.html">Meditate with a Monk</a></li>
          <li><a href="sunday-evening.html">Sunday evening</a></li>
          <li><a href="online.html">Online meditation</a></li>
          <li><a href="day-long.html">Day-long retreat</a></li>
          <li><a href="events.html">Upcoming events</a></li>
        </ul>
      </div>
      <div class="foot-col">
        <h3>Go further</h3>
        <ul>
          <li><a href="results.html">Our results</a></li>
          <li><a href="learn.html">Dhamma archive</a></li>
          <li><a href="sutta-class.html">Sutta class</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="volunteer.html">Volunteer</a></li>
          <li><a href="donate.html">Give</a></li>
        </ul>
      </div>
      <div class="foot-col">
        <h3>Connect</h3>
        <ul>
          <li><a href="${site.facebook}" target="_blank" rel="noreferrer">Facebook</a></li>
          <li><a href="${site.instagram}" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a href="${site.youtube}" target="_blank" rel="noreferrer">YouTube</a></li>
          <li><a href="visit.html">Ask a volunteer</a></li>
          <li><a href="about.html">About us</a></li>
        </ul>
      </div>
    </div>
    <div class="colophon">
      <p>Teachings are offered freely. The center is run by volunteers.</p>
      <p><a href="privacy.html">Privacy</a> &nbsp;·&nbsp; <a href="../design_system/index.html">Design system</a></p>
    </div>
  </div>
</footer>`;

function shell(file, title, description, main) {
  const links = nav
    .map(([href, label]) => `<a href="${href}"${file === href ? ' aria-current="page"' : ""}>${label}</a>`)
    .join("");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<meta name="description" content="${e(description)}">
<meta name="theme-color" content="#faf9f5">
<title>${e(title)} · ${site.name}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="system.css">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-head">
  <div class="u u-wide site-head__in">
    <a class="brand" href="index.html">
      <img src="${P("logo.webp")}" alt="">
      <span><b>${site.name}</b><span>${site.place}</span></span>
    </a>
    <nav class="nav" aria-label="Main">
      <div class="nav__links">${links}</div>
      <a class="btn btn--sm" href="programs.html">Join a sitting</a>
      <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="navsheet"><span>Menu</span><i></i></button>
    </nav>
  </div>
  <div class="nav__sheet" id="navsheet">
    ${nav.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
    <a href="donate.html">Give</a>
    <a class="btn" href="programs.html">Join a sitting</a>
  </div>
</header>
<main id="main">
${main}
</main>
${footer()}
<script src="system.js"></script>
</body>
</html>`;
}

/* -- shared page parts ---------------------------------------------------- */

function pageHero({ crumb, eyebrow, title, lede, meta = "", actions = "", image, alt, shape = "fig--photo", pos = "" }) {
  return `
<section class="u u-wide page-hero">
  <div class="split split--top" data-reveal>
    <div class="stack-5">
      ${crumb ? `<p class="crumb">${crumb}</p>` : ""}
      ${eyebrow ? `<p class="eyebrow">${e(eyebrow)}</p>` : ""}
      <h1>${e(title)}</h1>
      <p class="lede">${e(lede)}</p>
      ${meta}
      ${actions ? `<div class="actions">${actions}</div>` : ""}
    </div>
    ${fig(image, alt, shape, pos)}
  </div>
</section>`;
}

function instruction(eyebrow, text, source) {
  return `
<section class="on-clay">
  <div class="u u-wide band">
    <div class="instruction" data-reveal>
      <p class="eyebrow">${e(eyebrow)}</p>
      <p class="instruction__q">${e(text)}</p>
      <p class="instruction__by">${e(source)}</p>
    </div>
  </div>
</section>`;
}

const ruleRow = (p) => `
<li><a href="${p.slug}.html">
  <span class="rl__thumb"><img src="${photo(p.slug)}" alt="${e(p.alt)}" style="object-position:${at(photo(p.slug))}" loading="lazy"></span>
  <span class="rl__body">
    <span class="rl__when">${e(p.when)}</span>
    <h3 class="grow">${e(p.title)}</h3>
    <span class="meta">${e(p.where)}</span>
  </span>
  <span class="rl__go">Open</span>
</a></li>`;

/* -- pages ---------------------------------------------------------------- */

function home() {
  const sunday = programs.find((p) => p.slug === "sunday-evening");
  const three = ["meditate-with-a-monk", "online", "day-long"].map((s) => programs.find((p) => p.slug === s));

  return `
<section class="u u-wide hero">
  <div class="split" data-reveal>
    <div class="hero__text">
      <p class="eyebrow">${breath} Open to anyone · ${site.place}</p>
      <h1 class="display">A quieter mind, one sitting at a time.</h1>
      <p class="lede">Guided meditation with Buddhist monks in Greater Washington DC. No experience needed, no belief required, and never a fee. Come and sit.</p>
      <div class="actions">
        <a class="btn" href="sunday-evening.html">Reserve this Sunday</a>
        <a class="btn btn--ghost" href="programs.html">See all programs</a>
      </div>
      <div class="hero__where">
        <p class="time">Sundays, 5:00 – 7:00 pm</p>
        <p class="meta">${site.address} · Chairs provided, cushions welcome</p>
      </div>
    </div>
    ${fig(P("meditate-with-monk.webp"), "A monk sitting in meditation on a stone in still water", "fig--tall fig--arch")}
  </div>
</section>

<section class="on-warm">
  <div class="u u-wide band">
    <div class="head" data-reveal>
      <div>
        <p class="eyebrow">What actually happens</p>
        <h2>It works, and we measured it.</h2>
      </div>
      <p>An independent evaluation ranked us among the best meditation centers in the world. The numbers below are from people who sat with us, not from our marketing.</p>
    </div>
    <ul class="proof" style="margin-top:var(--space-7)" data-reveal-group>
      <li data-reveal><b>6,000+</b><span>people have joined a session since we opened our doors</span></li>
      <li data-reveal><b>4.90 / 5</b><span>average rating across every meditation program we run</span></li>
      <li data-reveal><b>82%</b><span>reported relief from sadness after a single sitting</span></li>
    </ul>
    <p style="margin-top:var(--space-6)" data-reveal><a class="act" href="results.html">Read the evaluation report</a></p>
  </div>
</section>

<section class="u u-wide band">
  <div class="head" data-reveal>
    <div>
      <p class="eyebrow">This week</p>
      <h2>Four doors, all of them open.</h2>
    </div>
    <p>Every one of these is built for a complete beginner. Pick the one that fits your week — you can always change your mind.</p>
  </div>

  <div class="door" style="margin-top:var(--space-7)" data-reveal>
    <a href="sunday-evening.html">${fig(photo("sunday-evening"), e(sunday.alt), "fig--wide", "center 46%")}</a>
    <div class="door__cap">
      <div class="stack-2">
        <p class="time">${e(sunday.when)}</p>
        <h3><a class="grow" href="sunday-evening.html">${e(sunday.title)}</a></h3>
        <p class="meta">${e(sunday.where)} · Guided sitting, then a talk and questions</p>
      </div>
      <a class="act" href="sunday-evening.html">Reserve a cushion</a>
    </div>
  </div>

  <div class="tiles" style="margin-top:var(--space-9)" data-reveal-group>
    ${three
      .map(
        (p) => `<a class="tile" href="${p.slug}.html" data-reveal>
      ${fig(photo(p.slug), e(p.alt), "fig--tall")}
      <span class="tile__body">
        <span class="time time--sm">${e(p.when)}</span>
        <h3 class="grow">${e(p.title)}</h3>
        <span class="meta">${e(p.where)}</span>
      </span>
    </a>`
      )
      .join("")}
  </div>

  <p style="margin-top:var(--space-7)" data-reveal><a class="act" href="programs.html">All ten programs</a></p>
</section>

${instruction(
  "Sit with this · one minute",
  "Breathing in a long breath, know that you are breathing in a long breath. Breathing out a long breath, know that you are breathing out a long breath. That is the whole instruction. Everything after it is practice.",
  "Ānāpānasati Sutta · the first step of sixteen"
)}

${stillness}

<section class="u u-wide band-sm">
  <div class="split split--flip" data-reveal>
    ${fig(P("monthly-2.jpeg"), "People meditating together in a public hall", "fig--photo")}
    <figure class="testimony">
      <p class="eyebrow">After one sitting</p>
      <blockquote>“I came tired and left lighter. The monk did not push a belief. He taught me how to sit with my own mind.”</blockquote>
      <figcaption>Kay · Meditate with a Monk, Washington DC</figcaption>
    </figure>
  </div>
</section>

<section class="u u-wide band">
  <div class="head head--single" data-reveal>
    <div>
      <p class="eyebrow">Before you come</p>
      <h2>There is nothing to prepare.</h2>
    </div>
  </div>
  <ul class="facts" style="margin-top:var(--space-6)" data-reveal-group>
    <li data-reveal><h3>Wear anything comfortable</h3><p>No robes, no special clothing. Loose trousers help if you plan to sit on the floor.</p></li>
    <li data-reveal><h3>Chairs are always available</h3><p>Cushions, benches and chairs are all in the hall. Sit however your body prefers.</p></li>
    <li data-reveal><h3>Nothing is asked of you</h3><p>No chanting you must join, no form to fill, no donation expected. You can simply sit at the back.</p></li>
    <li data-reveal><h3>Someone will show you in</h3><p>Come a little early and a volunteer will point you to the shoe rack and a seat.</p></li>
  </ul>
  <p style="margin-top:var(--space-6)" data-reveal><a class="act" href="visit.html">Plan your visit</a></p>
</section>

${newsletter()}`;
}

function programsPage() {
  const blocks = groups
    .map((g) => {
      const list = programs.filter((p) => p.group === g.id);
      if (!list.length) return "";
      return `
<section class="u u-wide band-sm" data-reveal>
  <div class="head head--single">
    <div>
      <p class="eyebrow">${e(g.title)}</p>
      <h2>${e(g.copy)}</h2>
    </div>
  </div>
  <ul class="rl" style="margin-top:var(--space-6)">${list.map(ruleRow).join("")}</ul>
</section>`;
    })
    .join("");

  return `${pageHero({
    crumb: '<a class="link" href="index.html">Home</a> · Programs',
    eyebrow: "Ten ways to sit",
    title: "Programs",
    lede:
      "Grouped by where you are, not by what we call them. Start at the top if this is your first time; the rest will still be here when you want it.",
    actions: '<a class="btn" href="sunday-evening.html">Start with Sunday</a><a class="btn btn--ghost" href="events.html">Upcoming dates</a>',
    image: P("day-long-6.webp"),
    alt: "Monks and visitors sitting together on the porch during a retreat",
  })}
${blocks}
${stillness}
${newsletter()}`;
}

function detail(p) {
  const cta = `<a class="btn" href="${href(p.href)}"${ext(p.href)}>${e(p.cta)}</a>`;
  const others = programs.filter((x) => x.slug !== p.slug && x.group === p.group).slice(0, 3);

  return `${pageHero({
    crumb: `<a class="link" href="programs.html">Programs</a> · ${e(p.title)}`,
    eyebrow: p.kicker,
    title: p.title,
    lede: p.summary,
    meta: `<div class="hero__where"><p class="time">${e(p.when)}</p><p class="meta">${e(p.where)}</p></div>`,
    actions: `${cta}<a class="btn btn--ghost" href="visit.html">Plan your visit</a>`,
    image: photo(p.slug),
    alt: p.alt,
  })}

<section class="u u-wide band-sm">
  <div class="split split--even split--top" data-reveal>
    <div class="prose">
      ${p.body.map((t) => `<p>${e(t)}</p>`).join("")}
    </div>
    <div class="stack-6">
      <div class="stack">
        <p class="eyebrow">What is included</p>
        <ul class="rl rl--plain">
          ${p.includes.map((i) => `<li><span class="rl__row"><span class="h4">${e(i)}</span></span></li>`).join("")}
        </ul>
      </div>
      <div class="stack-2">
        <p class="eyebrow">Who it is for</p>
        <p class="lede lede--wide">${e(p.audience)}</p>
      </div>
    </div>
  </div>
</section>

${instruction(
  "Sit with this · one minute",
  "Before you arrive, take one breath and let the shoulders drop on the way out. You have just meditated. The rest is the same thing, repeated with company.",
  "A note from the volunteers at the door"
)}

${
  others.length
    ? `<section class="u u-wide band">
  <div class="head head--single" data-reveal><div><p class="eyebrow">Also in this group</p><h2>If this one does not fit your week.</h2></div></div>
  <ul class="rl" style="margin-top:var(--space-6)" data-reveal>${others.map(ruleRow).join("")}</ul>
</section>`
    : stillness
}
${newsletter()}`;
}

function about() {
  return `${pageHero({
    crumb: '<a class="link" href="index.html">Home</a> · About',
    eyebrow: "Rockville, Maryland",
    title: "A monastery that keeps its door open.",
    lede:
      "We are a Theravada Buddhist monastery in Greater Washington DC, and we run a meditation center that anyone can walk into. Those two sentences are the whole of it.",
    actions: '<a class="btn" href="visit.html">Come and see</a><a class="btn btn--ghost" href="results.html">Our results</a>',
    image: P("loku-swamin.webp"),
    alt: "A resident monk smiling during a talk",
  })}

<section class="u u-wide band-sm">
  <div class="split split--even split--top" data-reveal>
    <div class="prose">
      <p>Our vision is short enough to fit on one line: <strong>meditation for anyone, regardless of background.</strong> In practice that means a Sunday evening where a software engineer, a nurse coming off shift, a student and a grandmother all sit in the same room and are taught the same simple thing.</p>
      <p>The monks here are ordained in the Mahamevnawa tradition of Sri Lanka. They teach breathing meditation and loving-kindness the way it has been taught for a very long time — plainly, without mysticism, and without asking you to believe anything first.</p>
      <p>Nothing we offer has a price. Teachings, retreats, the Sunday sitting and every online session are given freely. The center is kept running by volunteers and by people who choose to give something back after they have benefited.</p>
    </div>
    <div class="stack-6">
      ${fig(P("sandy-spring.jpg"), "The grounds outside the center", "fig--square")}
      <div class="stack-2">
        <p class="eyebrow">Also known as</p>
        <p class="h4">Mahamevnawa Meditation Center</p>
        <p class="meta">Part of an international network of monasteries, with a resident community in Rockville, Maryland.</p>
      </div>
    </div>
  </div>
</section>

${stillness}

<section class="u u-wide band-sm">
  <div class="head head--single" data-reveal><div><p class="eyebrow">What we hold to</p><h2>Four things we will not change.</h2></div></div>
  <ul class="steps" style="margin-top:var(--space-6)" data-reveal-group>
    <li data-reveal><div><h3>Free, always</h3><p>No program has ever had a fee and none ever will. Giving is welcome; it is never a condition of entry.</p></div></li>
    <li data-reveal><div><h3>Beginners first</h3><p>Every session is designed so that a person who has never meditated can follow it from the first minute.</p></div></li>
    <li data-reveal><div><h3>No conversion</h3><p>We teach mindfulness to people of every faith and none. You will not be asked to become a Buddhist.</p></div></li>
    <li data-reveal><div><h3>Monks who are available</h3><p>You can ask a question at the end of any sitting, or write to us during the week and get a real reply.</p></div></li>
  </ul>
</section>

<section class="u u-wide band-sm">
  <div class="split split--flip" data-reveal>
    ${fig(P("community-group.jpg"), "The community gathered outside the center", "fig--photo")}
    <div class="stack-5">
      <p class="eyebrow">The people</p>
      <h2>Mostly, this place is volunteers.</h2>
      <p class="lede">Someone parks the cars, someone makes the tea, someone edits the newsletter you are about to be offered. Many of them arrived the same way you might — as a guest who came once.</p>
      <p><a class="act" href="volunteer.html">Help out</a></p>
    </div>
  </div>
</section>

${newsletter()}`;
}

function visit() {
  const faqs = [
    ["Do I need to book?", "For Sunday evening a reservation helps us set out enough cushions, but nobody is turned away. Retreats and public sessions do need a ticket because the rooms fill."],
    ["What if I have never meditated?", "Then you are exactly who the session is designed for. Every sitting begins with the instruction from the beginning, out loud, every week."],
    ["Is this a religious service?", "No. It is a guided meditation followed by a short talk and questions. You are welcome to stay for the chanting or to skip it."],
    ["Can I bring my children?", "Yes. There is also a dedicated children's mindfulness session on Sunday mornings, which is usually the better fit under about twelve."],
    ["Is there a fee?", "No. Nothing at the center costs money. There is a donation box near the door and it is entirely optional."],
    ["What should I bring?", "Yourself, and socks if you would rather not be barefoot. Shoes come off at the entrance. Everything else is here."],
  ];

  return `${pageHero({
    crumb: '<a class="link" href="index.html">Home</a> · Visit',
    eyebrow: site.address,
    title: "Plan a first visit.",
    lede:
      "Come a little early, leave your shoes by the door, and a volunteer will take it from there.",
    meta: `<div class="hero__where"><p class="time">Sundays, 5:00 – 7:00 pm</p><p class="meta">Free parking on site</p></div>`,
    actions: `<a class="btn" href="sunday-evening.html">Reserve a cushion</a><a class="btn btn--ghost" href="${site.phoneHref}">Call us</a>`,
    image: photo("sunday-evening"),
    alt: "The shrine room in Rockville during a Sunday sitting",
  })}

<section class="u u-wide band-sm">
  <div class="head head--single" data-reveal><div><p class="eyebrow">An evening, start to finish</p><h2>What the two hours look like.</h2></div></div>
  <ul class="steps" style="margin-top:var(--space-6)" data-reveal-group>
    <li data-reveal><div><h3>You arrive</h3><p>Shoes off at the entrance. Someone will say hello and point you to a cushion, a bench or a chair.</p></div></li>
    <li data-reveal><div><h3>Guided sitting</h3><p>About forty minutes. A monk talks you through it the whole way, so there is nothing to remember.</p></div></li>
    <li data-reveal><div><h3>A short talk</h3><p>Twenty minutes on something practical — attention, irritation, sleep, kindness. Plain language.</p></div></li>
    <li data-reveal><div><h3>Questions, then tea</h3><p>Ask anything. Then stay for tea if you want to, or slip out quietly if you would rather. Both are normal.</p></div></li>
  </ul>
</section>

<section class="u u-wide band-sm">
  <div class="split split--even split--top" data-reveal>
    <div class="stack-5">
      <p class="eyebrow">Where</p>
      <h2>${site.address}</h2>
      <p class="lede">The building is set back from the road, with free parking on site. Come a little early and a volunteer will meet you at the door.</p>
      <div class="actions">
        <a class="btn btn--ghost" href="https://maps.google.com/?q=${encodeURIComponent(site.address)}" target="_blank" rel="noreferrer">Open in Maps</a>
        <a class="btn btn--ghost" href="mailto:${site.email}">Email us</a>
      </div>
    </div>
    <div class="map">${`<iframe src="${map}" title="Map to the Buddha Meditation Center" loading="lazy"></iframe>`}</div>
  </div>
</section>

${stillness}

<section class="u u-prose band-sm">
  <div class="head head--single" data-reveal><div><p class="eyebrow">Before you write to us</p><h2>Questions we get every week.</h2></div></div>
  <div class="faq" style="margin-top:var(--space-6)" data-reveal>
    ${faqs.map(([q, a]) => `<details><summary>${e(q)}</summary><p>${e(a)}</p></details>`).join("")}
  </div>
</section>

${newsletter()}`;
}

function results() {
  return `${pageHero({
    crumb: '<a class="link" href="index.html">Home</a> · Results',
    eyebrow: "Independently evaluated",
    title: "What people report after sitting with us.",
    lede:
      "We ask everyone who attends. These are their answers, unedited and unweighted, from the evaluation that ranked us among the best meditation centers in the world.",
    actions: '<a class="btn" href="programs.html">Find a session</a>',
    image: P("outdoor-group.webp"),
    alt: "A group of people meditating together at a retreat",
  })}

<section class="on-warm">
  <div class="u u-wide band">
    <ul class="proof proof--4" data-reveal-group>
      <li data-reveal><b>6,000+</b><span>people have joined a session since we opened</span></li>
      <li data-reveal><b>4.90 / 5</b><span>average program rating from attendees</span></li>
      <li data-reveal><b>82%</b><span>reported relief from sadness after one sitting</span></li>
      <li data-reveal><b>75%</b><span>reported a measurable drop in stress</span></li>
    </ul>
  </div>
</section>

<section class="u u-wide band">
  <div class="head head--single" data-reveal><div><p class="eyebrow">In their words</p><h2>Four people, four reasons.</h2></div></div>
  <div class="stack-7" style="margin-top:var(--space-7)" data-reveal-group>
    <figure class="testimony" data-reveal><blockquote>“After thirty years of trying meditation apps, sitting in a room with a real teacher was a different thing entirely.”</blockquote><figcaption>Joe · Meditate with a Monk</figcaption></figure>
    <hr class="rule">
    <figure class="testimony" data-reveal><blockquote>“The day-long retreat gave me a quiet I had not felt in years. I keep coming back on Sundays.”</blockquote><figcaption>Navin · Day-long retreat</figcaption></figure>
    <hr class="rule">
    <figure class="testimony" data-reveal><blockquote>“It is open, practical, and kind. You can be new. You can be skeptical. They still make a place for you.”</blockquote><figcaption>Sanka · Sunday evening</figcaption></figure>
    <hr class="rule">
    <figure class="testimony" data-reveal><blockquote>“I came tired and left lighter. The monk did not push a belief. He taught me how to sit with my own mind.”</blockquote><figcaption>Kay · Meditate with a Monk</figcaption></figure>
  </div>
</section>

${stillness}
${newsletter()}`;
}

function eventsPage() {
  return `${pageHero({
    crumb: '<a class="link" href="index.html">Home</a> · Events',
    eyebrow: "Tickets through Eventbrite",
    title: "What is coming up.",
    lede: "Public sessions, retreats and weekly sittings. Registration is free — a ticket only helps us count cushions.",
    image: P("monthly-2.jpeg"),
    alt: "A public meditation session in a community hall",
  })}

<section class="u u-wide band-sm">
  <ul class="rl" data-reveal>
    ${events
      .map(
        ([title, when, href, , alt, meta], i) => `<li><a href="${href}" target="_blank" rel="noreferrer">
      <span class="rl__thumb"><img src="${photo(["sunday-evening", "day-long", "meditate-with-a-monk", "monthly"][i])}" alt="${e(alt)}" style="object-position:${at(photo(["sunday-evening", "day-long", "meditate-with-a-monk", "monthly"][i]))}" loading="lazy"></span>
      <span class="rl__body"><span class="rl__when">${e(when)}</span><h3 class="grow">${e(title)}</h3><span class="meta">${e(meta)}</span></span>
      <span class="rl__go">Register</span>
    </a></li>`
      )
      .join("")}
  </ul>
</section>

${instruction(
  "If none of these fit",
  "The Thursday online sitting runs every week of the year, from wherever you are, and nobody minds if you keep your camera off.",
  "Weekly online meditation · 8:00 – 9:00 pm ET"
)}
${newsletter()}`;
}

function volunteer() {
  return `${pageHero({
    crumb: '<a class="link" href="index.html">Home</a> · Volunteer',
    eyebrow: "However much time you have",
    title: "The center runs on people who stayed for tea.",
    lede:
      "Nobody here is paid. If you have an hour a month or a skill you are willing to lend, there is almost certainly something useful you could do.",
    actions: `<a class="btn" href="mailto:${site.email}?subject=Volunteering">Offer an hour</a><a class="btn btn--ghost" href="about.html">About the center</a>`,
    image: P("community-group.jpg"),
    alt: "Volunteers and visitors gathered at the center",
  })}

<section class="u u-wide band-sm">
  <div class="head head--single" data-reveal><div><p class="eyebrow">What people actually do</p><h2>Six jobs that need doing.</h2></div></div>
  <ul class="facts" style="margin-top:var(--space-6)" data-reveal-group>
    <li data-reveal><h3>Welcome at the door</h3><p>Say hello, hand out cushions, show new people where to leave their shoes. Forty minutes, once a month.</p></li>
    <li data-reveal><h3>Set up the hall</h3><p>Chairs, cushions, the sound system. Arrive at four on a Sunday and it is done by half past.</p></li>
    <li data-reveal><h3>Tea and dana</h3><p>Help prepare and serve the meal offering, or make tea afterwards so people stay and talk.</p></li>
    <li data-reveal><h3>Photography and social</h3><p>Take real photographs of real sessions so this website never has to use stock imagery.</p></li>
    <li data-reveal><h3>Web and writing</h3><p>Edit the newsletter, keep programme pages accurate, help maintain the site.</p></li>
    <li data-reveal><h3>Drive someone</h3><p>Several regulars do not drive. A lift from Metro on a Sunday is genuinely one of the most useful things.</p></li>
  </ul>
</section>

${instruction(
  "Where most volunteers started",
  "They came to one Sunday sitting, meant to try it once, and found themselves back the following week with a cushion under one arm.",
  "The usual route in"
)}
${newsletter()}`;
}

function donatePage() {
  return `${pageHero({
    crumb: '<a class="link" href="index.html">Home</a> · Give',
    eyebrow: "Dāna · generosity",
    title: "Nothing here has a price. Everything here has a cost.",
    lede:
      "Teachings are given freely and always will be. Giving is how the hall stays heated, the cushions stay clean, and the monks are supported.",
    actions: `<a class="btn btn--clay" href="${donate}" target="_blank" rel="noreferrer">Give through Zeffy</a><a class="btn btn--ghost" href="volunteer.html">Give time instead</a>`,
    image: P("dana-meal.jpg"),
    alt: "The meal offering being served at the center",
  })}

<section class="u u-wide band-sm">
  <div class="split split--even split--top" data-reveal>
    <div class="prose">
      <p>In this tradition a teaching is never sold. It is offered, and whoever receives it gives back what they can, when they can, if they want to. That arrangement is older than the monastery and we have no intention of changing it.</p>
      <p><strong>Zeffy takes no platform fee</strong>, so every dollar you give arrives here. One-off gifts and monthly giving both work the same way.</p>
      <p>If money is not the thing you have to give right now, that is completely fine. Come and sit. That is also a contribution — an empty hall helps nobody.</p>
    </div>
    <div class="stack-6">
      <div class="stack">
        <p class="eyebrow">Where it goes</p>
        <ul class="rl rl--plain">
          <li><span class="rl__row"><span class="h4">Heating, power and the building</span></span></li>
          <li><span class="rl__row"><span class="h4">Cushions, benches and hall supplies</span></span></li>
          <li><span class="rl__row"><span class="h4">Food offerings for the resident monks</span></span></li>
          <li><span class="rl__row"><span class="h4">Retreat venues and travel for public sessions</span></span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

${stillness}
${newsletter()}`;
}

function learn() {
  const articles = [
    ["the-16-steps-of-breathing-meditation", "The sixteen steps of breathing meditation", "Ānāpānasati Sutta", "A walk through the full instruction, one step at a time, in plain English."],
    ["metta-sutta", "The Metta Sutta", "Sutta Nipāta 1.8", "The loving-kindness discourse, with a note on how it is actually practised."],
  ];
  return `${pageHero({
    crumb: '<a class="link" href="index.html">Home</a> · Teachings',
    eyebrow: "The Dhamma archive",
    title: "If you want to go further.",
    lede:
      "Nothing on this page is required reading. It is here for the small number of people who sit for a while and then want to know where the instructions came from.",
    actions: '<a class="btn btn--ghost" href="sutta-class.html">Join the sutta class</a>',
    image: photo("sutta-class"),
    alt: "A monk teaching from a text",
  })}

<section class="u u-wide band-sm">
  <ul class="rl rl--plain" data-reveal>
    ${articles
      .map(
        ([slug, title, series, blurb]) => `<li><a href="learn.html#${slug}">
      <span class="rl__body"><span class="rl__when">${e(series)}</span><h3 class="grow">${e(title)}</h3><span class="meta">${e(blurb)}</span></span>
      <span class="rl__go">Read</span>
    </a></li>`
      )
      .join("")}
  </ul>
  <p class="meta" style="margin-top:var(--space-5)">Written as <code>.mdx</code> in <code>src/content/learn</code>. New articles appear here automatically.</p>
</section>

${instruction(
  "A fair warning",
  "You do not need any of this to meditate well. Plenty of people sit with us for years and never open a sutta. The archive is a door, not a requirement.",
  "From the introduction to the sutta class"
)}
${newsletter()}`;
}

function blog() {
  const posts = [
    ["four-foundations-of-mindfulness", "The four foundations of mindfulness", "Practice", "What the Satipaṭṭhāna Sutta is actually asking you to notice, and why it is simpler than it sounds."],
    ["when-dc-joined-the-walk-for-peace", "When DC joined the Walk for Peace", "Community", "Two hundred people, one footpath, and a very slow morning in Rockville."],
  ];
  return `${pageHero({
    crumb: '<a class="link" href="index.html">Home</a> · Blog',
    eyebrow: "News and notes",
    title: "From the center.",
    lede: "What happened, what is coming, and the occasional piece of practical instruction that would not fit in the newsletter.",
    image: P("hero-walking.jpg"),
    alt: "People walking together on a path",
  })}

<section class="u u-wide band-sm">
  <ul class="rl rl--plain" data-reveal>
    ${posts
      .map(
        ([slug, title, tag, blurb]) => `<li><a href="blog.html#${slug}">
      <span class="rl__body"><span class="rl__when">${e(tag)}</span><h3 class="grow">${e(title)}</h3><span class="meta">${e(blurb)}</span></span>
      <span class="rl__go">Read</span>
    </a></li>`
      )
      .join("")}
  </ul>
</section>
${stillness}
${newsletter()}`;
}

function privacy() {
  return `${pageHero({
    crumb: '<a class="link" href="index.html">Home</a> · Privacy',
    eyebrow: "Plain English",
    title: "What we do with your details.",
    lede: "Very little, and we will tell you exactly what.",
    image: P("place.webp"),
    alt: "Open parkland in Washington DC",
  })}
<section class="u u-prose band-sm">
  <div class="prose" data-reveal>
    <p>If you subscribe to the newsletter we store your email address with Brevo and use it to send you the weekly note. Nothing else. You can unsubscribe from any email and the record is deleted.</p>
    <h2>Registrations and giving</h2>
    <p>Event registrations are handled by Eventbrite and giving is handled by Zeffy. Those services hold that data under their own privacy policies; we only see the attendee list and the donation record.</p>
    <h2>Analytics</h2>
    <p>We use Google Analytics 4 to count page views and understand which programs people look for. We do not sell data and we do not run advertising trackers beyond measuring our own campaigns.</p>
    <h2>Asking us anything</h2>
    <p>Write to <a href="mailto:${site.email}">${site.email}</a> and a person will reply.</p>
  </div>
</section>
${newsletter()}`;
}

/* -- write ---------------------------------------------------------------- */

const pages = [
  ["index.html", "A quieter mind, one sitting at a time", "Guided meditation with Buddhist monks in Greater Washington DC. Free, open to anyone, no experience needed.", home()],
  ["programs.html", "Programs", "Ten meditation programs, in person in Rockville and online from anywhere. All free, all beginner-friendly.", programsPage()],
  ["about.html", "About", "A Theravada Buddhist monastery in Rockville, Maryland, running a meditation center open to anyone.", about()],
  ["visit.html", "Visit", "Plan a first visit to the Buddha Meditation Center in Rockville, Maryland.", visit()],
  ["results.html", "Results", "6,000+ people, 4.90/5 average rating, 82% reporting relief from sadness after one sitting.", results()],
  ["events.html", "Events", "Upcoming meditation sessions, retreats and public evenings.", eventsPage()],
  ["volunteer.html", "Volunteer", "The center is run entirely by volunteers. Here is what needs doing.", volunteer()],
  ["donate.html", "Give", "Teachings are free. Giving keeps the hall open.", donatePage()],
  ["learn.html", "Teachings", "The Dhamma article archive, for people who want to go further.", learn()],
  ["blog.html", "Blog", "News and notes from the Buddha Meditation Center.", blog()],
  ["privacy.html", "Privacy", "What we do with your details.", privacy()],
  ...programs.map((p) => [`${p.slug}.html`, p.title, p.summary.slice(0, 155), detail(p)]),
];

fs.mkdirSync(out, { recursive: true });
for (const [file, title, description, main] of pages) {
  fs.writeFileSync(path.join(out, file), shell(file, title, description, main));
}
console.log(`Open Hall · wrote ${pages.length} pages to design_concept/`);

/* Focal points and the one photograph assigned to each programme.
   Mirrors the map in scripts/build-concept.mjs. Set a file once here.
   A 4:5 crop will cut a landscape phone shot if this is missing. */

const focus: Record<string, string> = {
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

/* Chosen so a single page never repeats a file, and so children.jpeg
   (too small for a hero) is not used. */
const programFile: Record<string, string> = {
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

export function focusOf(src: string) {
  const file = src.split("/").pop() ?? "";
  return focus[file] ?? "center 50%";
}

export function programImage(slug: string) {
  return `/images/${programFile[slug] ?? "shrine-room.jpg"}`;
}

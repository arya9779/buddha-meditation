const ET = "America/New_York";

const WEEKDAY: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

type Parts = {
  weekday: number;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
};

export type NextSitting = {
  iso: string;
  label: string;
  when: string;
  full: string;
  short: string;
  isToday: boolean;
};

function partsInEt(now = new Date()): Parts {
  const bag = new Intl.DateTimeFormat("en-US", {
    timeZone: ET,
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const get = (type: string) => bag.find((p) => p.type === type)?.value ?? "";
  return {
    weekday: WEEKDAY[get("weekday")] ?? 0,
    year: Number(get("year")),
    month: Number(get("month")),
    day: Number(get("day")),
    hour: Number(get("hour")),
    minute: Number(get("minute")),
  };
}

function addDays(p: Parts, n: number): Parts {
  const utc = new Date(Date.UTC(p.year, p.month - 1, p.day + n, 12));
  return {
    weekday: utc.getUTCDay(),
    year: utc.getUTCFullYear(),
    month: utc.getUTCMonth() + 1,
    day: utc.getUTCDate(),
    hour: 12,
    minute: 0,
  };
}

function formatLabel(p: Parts) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(p.year, p.month - 1, p.day, 12)));
}

function isoOf(p: Parts) {
  return `${p.year}-${String(p.month).padStart(2, "0")}-${String(p.day).padStart(2, "0")}`;
}

function past(p: Parts, hour: number, minute: number) {
  return p.hour > hour || (p.hour === hour && p.minute >= minute);
}

function nextWeekday(target: number, endHour: number, endMinute: number, when: string, now = new Date()): NextSitting {
  const p = partsInEt(now);
  let ahead = (target - p.weekday + 7) % 7;
  if (ahead === 0 && past(p, endHour, endMinute)) ahead = 7;
  const d = addDays(p, ahead);
  const label = formatLabel(d);
  const isToday = ahead === 0;
  const short = isToday ? `Today, ${when}` : `${label}, ${when}`;
  return {
    iso: isoOf(d),
    label,
    when,
    full: isToday ? `Today · ${when}` : `${label} · ${when}`,
    short,
    isToday,
  };
}

function nextFirstOrThirdSaturday(endHour: number, when: string, now = new Date()): NextSitting {
  const p = partsInEt(now);
  for (let i = 0; i < 60; i++) {
    const d = addDays(p, i);
    if (d.weekday !== 6) continue;
    const nth = Math.ceil(d.day / 7);
    if (nth !== 1 && nth !== 3) continue;
    if (i === 0 && past(p, endHour, 0)) continue;
    const label = formatLabel(d);
    const isToday = i === 0;
    return {
      iso: isoOf(d),
      label,
      when,
      full: isToday ? `Today · ${when}` : `${label} · ${when}`,
      short: isToday ? `Today, ${when}` : `${label}, ${when}`,
      isToday,
    };
  }
  return nextWeekday(6, endHour, 0, when, now);
}

export function getNextSittings(now = new Date()) {
  return {
    sunday: nextWeekday(0, 19, 0, "5:00 – 7:00 pm", now),
    thursday: nextWeekday(4, 21, 0, "8:00 – 9:00 pm ET", now),
    wednesday: nextWeekday(3, 21, 0, "8:00 – 9:00 pm ET", now),
    daylong: nextFirstOrThirdSaturday(16, "9:00 am – 4:00 pm", now),
  };
}

export type NextKey = keyof ReturnType<typeof getNextSittings>;

export function applyNextDates() {
  const next = getNextSittings();
  document.querySelectorAll<HTMLElement>("[data-next]").forEach((el) => {
    const key = el.dataset.next as NextKey | "sunday-hero" | "sunday-cta";
    if (key === "sunday-hero") {
      el.textContent = `${next.sunday.full} · 5004 Stone Rd, Rockville`;
      if (el.tagName === "TIME") el.setAttribute("datetime", next.sunday.iso);
      return;
    }
    if (key === "sunday-cta") {
      el.textContent = next.sunday.isToday ? "Sit today" : `Sunday, ${next.sunday.label.replace(/^Sunday, /, "")}`;
      return;
    }
    const sitting = next[key as NextKey];
    if (!sitting) return;
    el.textContent = sitting.full;
    if (el.tagName === "TIME") el.setAttribute("datetime", sitting.iso);
  });
}

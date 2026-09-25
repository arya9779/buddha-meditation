export const site = {
  name: "Buddha Meditation Center",
  shortName: "BMC DC",
  legalName: "Buddha Meditation Center of Greater Washington DC",
  alsoKnownAs: "Mahamevnawa Meditation Center",
  tagline: "Meditation for anyone, regardless of background.",
  url: "https://buddhameditationdc.org",
  description:
    "Guided mindfulness and meditation with Buddhist monks in Greater Washington DC. Beginners welcome. In person and online, open to every background.",
  address: {
    street: "5004 Stone Rd",
    city: "Rockville",
    region: "MD",
    postal: "20853",
    country: "USA",
    line: "5004 Stone Rd, Rockville, MD 20853, USA",
  },
  phone: "+1 762 233 3390",
  phoneHref: "tel:+17622333390",
  email: "info@buddhameditationdc.org",
  mapsQuery: "Buddha Meditation Center, 5004 Stone Rd, Rockville, MD",
  mapEmbed:
    "https://maps.google.com/maps?q=Buddha%20Meditation%20Center%2C%205004%20Stone%20Rd%2C%20Rockville%2C%20MD&t=m&z=16&output=embed",
  stats: {
    signups: "6,000+",
    rating: "4.90 / 5",
    relief: "82%",
    stress: "75%",
  },
  social: {
    facebook: "https://www.facebook.com/buddhameditationdc",
    instagram: "https://www.instagram.com/buddha_meditation_center_dc/",
    youtube: "https://www.youtube.com/@mahamevnawadc",
  },
  zoom: {
    onlineMeditation: "https://mahamevnawa.zoom.us/j/81813080318?pwd=Zi9zIdEpWYbIuYkjuZSaAgL830ZcOS.1",
    suttaClass: "https://mahamevnawa.zoom.us/j/87095076489?pwd=VmUwTEUwTHdBd0dpYm1PZzlOTnQ0QT09",
  },
  eventbrite: {
    sunday: "https://www.eventbrite.com/e/sunday-meditation-registration-1225425684209",
    dayLong: "https://www.eventbrite.com/e/day-long-meditation-retreat-tickets-1533409401799",
    meditateWithMonk: "https://www.eventbrite.com/e/meditate-with-a-monk-registration-1992957208660?aff=oddtdtcreator",
    vienna: "https://www.eventbrite.com/e/meditate-with-a-monk-in-vienna-tickets-1538904537899",
  },
  zeffy: {
    donate: "https://www.zeffy.com/en-US/ticketing/online-meditation",
    onlineMeditation: "https://www.zeffy.com/en-US/ticketing/online-meditation",
  },
  brevoForm:
    "https://f9d05f8f.sibforms.com/serve/MUIFAIlwzhx5cGbaTBXWo0mH6Lup_PFLCGnH2GxBnllZ_Y25_vnsZwr963KeuiapooHX4_xZCOQLnUFGpEubeH1n68wl3ygnnDnENXgxe01rJJt2OTz4aNxL8fant--qr5RUaAhmibXhAACP",
};

type NavItem = { href: string; label: string; children?: { href: string; label: string }[] };

export const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/programs",
    label: "What We Offer",
    children: [
      { href: "/programs", label: "Events & Programs" },
      { href: "/programs/sunday-evening", label: "Sunday evening" },
      { href: "/programs/meditate-with-a-monk", label: "Meditate with a Monk" },
      { href: "/programs/monthly", label: "Monthly at Sandy Spring" },
      { href: "/programs/children", label: "Mindfulness for children" },
      { href: "/programs/online", label: "Online meditation" },
      { href: "/programs/sutta-class", label: "Sutta class" },
      { href: "/programs/day-long", label: "Day-long retreat" },
      { href: "/programs/two-day", label: "Two-day retreat" },
      { href: "/programs/workplace", label: "Workplace" },
      { href: "/programs/sinhala", label: "Sinhala programs" },
    ],
  },
  { href: "/events", label: "Events Calendar" },
  {
    href: "/donate",
    label: "Support Us",
    children: [
      { href: "/donate", label: "Donation" },
      { href: "/volunteer", label: "Volunteer" },
    ],
  },
  {
    href: "/learn",
    label: "Articles",
    children: [
      { href: "/learn", label: "Learn" },
      { href: "/blog", label: "Blog" },
    ],
  },
  { href: "/visit", label: "Contact" },
];

export const footerNav = {
  practice: [
    { href: "/programs", label: "All programs" },
    { href: "/programs/meditate-with-a-monk", label: "Meditate with a Monk" },
    { href: "/programs/sunday-evening", label: "Sunday evening" },
    { href: "/programs/online", label: "Online meditation" },
    { href: "/programs/day-long", label: "Day-long retreat" },
    { href: "/events", label: "Events" },
  ],
  goFurther: [
    { href: "/results", label: "Our results" },
    { href: "/learn", label: "Dhamma archive" },
    { href: "/programs/sutta-class", label: "Sutta class" },
    { href: "/blog", label: "Blog" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/donate", label: "Give" },
  ],
};

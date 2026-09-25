export type Program = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  when: string;
  where: string;
  audience: string;
  image: string;
  imageAlt: string;
  href: string;
  ctaLabel: string;
  ctaHref: string;
  funnel: "first-visit" | "regular" | "online" | "deeper";
  featured?: boolean;
  rhythm?: "sunday" | "thursday" | "wednesday" | "daylong";
  body: string[];
  includes: string[];
  faqs: { q: string; a: string }[];
};

export const programs: Program[] = [
  {
    slug: "meditate-with-a-monk",
    title: "Meditate with a Monk",
    kicker: "Begin here",
    summary:
      "A calm, guided evening with a resident monk. Simple breathing, loving-kindness, and time for questions. Built for people who have never meditated, and for anyone who wants to sit with a teacher.",
    when: "Public sessions across the DMV, plus Utah and California dates",
    where: "Community venues and the Rockville monastery",
    audience: "Anyone. No Buddhist background needed.",
    image: "/images/washington.webp",
    imageAlt: "Visitors sitting with a monk during a Meditate with a Monk session",
    href: "/programs/meditate-with-a-monk",
    ctaLabel: "Find a session",
    ctaHref: "https://www.eventbrite.com/e/meditate-with-a-monk-registration-1992957208660?aff=oddtdtcreator",
    funnel: "first-visit",
    featured: true,
    body: [
      "Modern life pulls the mind in a hundred directions. This session is a reset: sit with a monk, follow a simple instruction, and leave with a practice you can actually use.",
      "The evening is a mindfulness experience led by Buddhist monks, designed for non-Buddhists. The focus is well-being, not religious conversion.",
    ],
    includes: [
      "Guided sitting meditation",
      "Short, practical instruction",
      "Time for questions",
      "Chairs provided; cushions welcome",
    ],
    faqs: [
      {
        q: "Is this a religious event?",
        a: "It is led by Buddhist monks, and it is designed for people of every background. The session focuses on calm, breathing, and kindness, not on converting anyone.",
      },
      {
        q: "Do I need experience?",
        a: "No. Come as you are. Beginners sit beside people who have practiced for years.",
      },
      {
        q: "What should I wear or bring?",
        a: "Wear comfortable clothes. Chairs are provided. Bring a cushion if you prefer to sit on the floor.",
      },
    ],
  },
  {
    slug: "sunday-evening",
    title: "Sunday evening meditation",
    kicker: "Weekly, in person",
    summary:
      "Guided meditation followed by a Dhamma talk or Q&A. A steady weekly hour to come back to the breath, in the shrine room at the center.",
    when: "Sundays, 5:00 – 7:00 pm",
    where: "Buddha Meditation Center, Rockville, MD",
    audience: "Anyone seeking a regular in-person practice.",
    image: "/images/shrine-room.jpg",
    imageAlt: "People sitting in meditation in the Rockville shrine room",
    href: "/programs/sunday-evening",
    ctaLabel: "Reserve a seat",
    ctaHref: "https://www.eventbrite.com/e/sunday-meditation-registration-1225425684209",
    funnel: "regular",
    featured: true,
    rhythm: "sunday",
    body: [
      "Sunday evening is the center’s home practice. Arrive a little early, take a seat, and let the room settle around you.",
      "The sitting is followed by a short talk or open questions with the resident monks.",
    ],
    includes: ["Guided sitting", "Walking practice as offered", "Talk or Q&A", "Community after the sit"],
    faqs: [
      {
        q: "Is there a fee?",
        a: "Teachings are offered freely. Donations support the volunteer-run center. Some public events use Eventbrite so we can plan seating.",
      },
    ],
  },
  {
    slug: "online",
    title: "Weekly online meditation",
    kicker: "Digital monastery",
    summary:
      "Join from anywhere. A weekly Zoom sitting with the same monks who teach in Rockville, made for people who cannot travel, or who want a midweek anchor.",
    when: "Thursdays, 8:00 – 9:00 pm ET",
    where: "Zoom",
    audience: "Anyone, worldwide.",
    image: "/images/monk-portrait.jpeg",
    imageAlt: "A monk teaching, the same teachers who sit on Zoom",
    href: "/programs/online",
    ctaLabel: "Join on Zoom",
    ctaHref: "https://mahamevnawa.zoom.us/j/81813080318?pwd=Zi9zIdEpWYbIuYkjuZSaAgL830ZcOS.1",
    funnel: "online",
    featured: true,
    rhythm: "thursday",
    body: [
      "The digital monastery is simple: a Zoom room, a monk, and an hour of practice. Camera on or off. Sit in a chair at home.",
      "If you are far from DC, this is your weekly hall.",
    ],
    includes: ["Guided mindfulness", "Interactive discussion", "Beginner-friendly instruction"],
    faqs: [
      {
        q: "Do I need to turn my camera on?",
        a: "No. Join in whatever way lets you practice.",
      },
    ],
  },
  {
    slug: "day-long",
    title: "Day-long meditation retreat",
    kicker: "Go deeper",
    summary:
      "A full Saturday of sitting, walking, and loving-kindness, with meals in noble quiet. For people who want more than an evening hour.",
    when: "1st & 3rd Saturday, 9:00 am – 4:00 pm",
    where: "Buddha Meditation Center, Rockville, MD",
    audience: "Beginners who can sit a full day, and experienced meditators.",
    image: "/images/outdoor-group.webp",
    imageAlt: "A group sitting outdoors during a day-long retreat",
    href: "/programs/day-long",
    ctaLabel: "See upcoming dates",
    ctaHref: "https://www.eventbrite.com/e/day-long-meditation-retreat-tickets-1533409401799",
    funnel: "regular",
    featured: true,
    rhythm: "daylong",
    body: [
      "The day unfolds slowly: sitting, walking, a meal, more sitting. Monks guide the rhythm so you do not have to invent a schedule.",
      "Monthly donors may attend day-long retreats as part of their pledge.",
    ],
    includes: [
      "Sitting and walking meditation",
      "Loving-kindness practice",
      "Vegetarian meal",
      "Guidance from resident monks",
    ],
    faqs: [
      {
        q: "Can a complete beginner come?",
        a: "Yes, if you are willing to spend the day in quiet. The monks give instructions throughout. An evening session first can help you know what to expect.",
      },
    ],
  },
  {
    slug: "two-day",
    title: "Two-day retreat",
    kicker: "Overnight",
    summary:
      "One night away from ordinary life at Wellspring Retreat Center in Germantown. Guided and silent sits, vegetarian meals, and simple shared lodging.",
    when: "Scheduled weekends",
    where: "Wellspring Retreat Center, Germantown, MD",
    audience: "Committed beginners through experienced meditators.",
    image: "/images/hero-walking.jpg",
    imageAlt: "Walking meditation on a wooded path",
    href: "/programs/two-day",
    ctaLabel: "Ask about the next dates",
    ctaHref: "/visit",
    funnel: "regular",
    body: [
      "Two days is long enough for the mind to stop rehearsing the week. The retreat includes sitting, walking, mindful meals, and time with the monks.",
      "Lodging is simple: two beds to a room, with separate cabin areas for men, women, and high school students. This is a fee-based program. Monthly donors receive 40% off.",
    ],
    includes: ["Guided and silent sits", "Vegetarian meals", "Shared lodging", "One-on-one guidance as offered"],
    faqs: [
      {
        q: "Is this silent?",
        a: "Noble silence is part of the container, with periods for instruction and questions. Details are sent before each retreat.",
      },
    ],
  },
  {
    slug: "monthly",
    title: "Monthly mindfulness at Sandy Spring",
    kicker: "Museum evening",
    summary:
      "A public mindfulness evening at Sandy Spring Museum. Present-moment awareness, loving-kindness, and emotional ease, offered in a civic space rather than a shrine room.",
    when: "First Tuesday, 6:30 – 8:00 pm",
    where: "Sandy Spring Museum",
    audience: "People looking for practical stress relief, including non-Buddhists.",
    image: "/images/sandy-spring-hall.jpg",
    imageAlt: "A large hall of people meditating at Sandy Spring Museum",
    href: "/programs/monthly",
    ctaLabel: "Learn more",
    ctaHref: "/visit",
    funnel: "first-visit",
    body: [
      "Some people are not ready to walk into a monastery. Sandy Spring is for them: a museum hall, chairs in rows, and a monk offering tools you can take home.",
    ],
    includes: ["Guided mindfulness", "Loving-kindness", "A civic, public setting"],
    faqs: [
      {
        q: "Do I need to be Buddhist?",
        a: "No. This evening is offered as a well-being program.",
      },
    ],
  },
  {
    slug: "children",
    title: "Mindfulness for children",
    kicker: "Ages 6–15",
    summary:
      "Sunday morning for young people: focus, kindness, and emotional balance, taught in an age-appropriate way by the monks.",
    when: "Sundays, 9:00 – 11:00 am",
    where: "Buddha Meditation Center, Rockville, MD",
    audience: "Children ages 6–15, with a parent nearby as requested.",
    image: "/images/children.jpeg",
    imageAlt: "Children smiling during a mindfulness program",
    href: "/programs/children",
    ctaLabel: "Sign a child up",
    ctaHref: "/visit",
    funnel: "regular",
    body: [
      "Children learn to notice the breath, name a feeling, and treat each other with care. The tone is warm, not stern.",
    ],
    includes: ["Age-appropriate sitting", "Kindness practices", "Group activities"],
    faqs: [
      {
        q: "Must a parent stay?",
        a: "Write to us when you register. We will tell you what the current Sunday expects of parents.",
      },
    ],
  },
  {
    slug: "sutta-class",
    title: "Mindfulness through Buddhist Sutta class",
    kicker: "For those who want to go further",
    summary:
      "A weekly online reading of the Buddha’s discourses with Theravada monks. This is the deeper path: not required, available when someone asks for it.",
    when: "Wednesdays, 8:00 – 9:00 pm ET",
    where: "Zoom",
    audience: "Anyone curious about the original teachings. No prior study needed.",
    image: "/images/monk-portrait.jpeg",
    imageAlt: "A resident monk of Buddha Meditation Center",
    href: "/programs/sutta-class",
    ctaLabel: "Join the class",
    ctaHref: "https://mahamevnawa.zoom.us/j/87095076489?pwd=VmUwTEUwTHdBd0dpYm1PZzlOTnQ0QT09",
    funnel: "deeper",
    rhythm: "wednesday",
    body: [
      "Suttas are the Buddha’s discourses, preserved in the Pali Canon. Each week the monks read, explain, and leave room for questions.",
      "This sits at the far end of the funnel on purpose. First we offer calm. Then, for those who want it, we offer the teaching in full.",
    ],
    includes: ["Live reading", "Monk-led explanation", "Open discussion", "Recordings via the WhatsApp community"],
    faqs: [
      {
        q: "Do I need to know Buddhism?",
        a: "No. The class is taught so a newcomer can follow, and so a long-time student can go deeper.",
      },
    ],
  },
  {
    slug: "sinhala",
    title: "Sinhala language programs",
    kicker: "සිංහල",
    summary:
      "Monthly sil meditation and weekly Sutta Nipata study in Sinhala, for the Sri Lankan community and anyone who practices in Sinhala.",
    when: "Monthly Uposatha days, plus Thursday 7:00 – 8:00 pm",
    where: "Center and Google Meet",
    audience: "Sinhala speakers and families.",
    image: "/images/shrine-room.jpg",
    imageAlt: "The shrine room during a community gathering",
    href: "/programs/sinhala",
    ctaLabel: "Join in Sinhala",
    ctaHref: "/visit",
    funnel: "deeper",
    body: [
      "මාසික සීල භාවනා වැඩසටහන සහ සතිපතා සුත්ත නිපාතය දේශනාව Sinhala speakers can keep a complete practice in their own language: precepts, dana, and sutta study.",
    ],
    includes: ["Monthly sil day", "Thursday Sutta Nipata", "Google Meet option"],
    faqs: [
      {
        q: "Is this only in Sinhala?",
        a: "Yes. English programs run on other days of the week.",
      },
    ],
  },
  {
    slug: "workplace",
    title: "Meditation at work",
    kicker: "Invited programs",
    summary:
      "Bring a monk-led session to an office, school, or nonprofit. Short introductions or two-hour workshops, offered by donation.",
    when: "By invitation",
    where: "Your workplace or campus",
    audience: "Teams, schools, agencies, and community groups.",
    image: "/images/community-group.jpg",
    imageAlt: "Community members gathered with monks",
    href: "/programs/workplace",
    ctaLabel: "Invite a session",
    ctaHref: "/visit",
    funnel: "first-visit",
    body: [
      "Sessions are secular in tone, rooted in authentic Buddhist mindfulness, and shaped for the room in front of us. There is no fixed fee.",
    ],
    includes: ["Guided mindfulness", "Tools for stress and focus", "Optional short Dhamma remarks"],
    faqs: [
      {
        q: "What does it cost?",
        a: "There is no fixed fee. A donation to cover travel and simple costs is welcome.",
      },
    ],
  },
];

export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug);
}

export const featuredPrograms = programs.filter((p) => p.featured);

export const programGroups: { id: Program["funnel"]; title: string; copy: string }[] = [
  { id: "first-visit", title: "A first visit", copy: "Open doors. No background required." },
  { id: "regular", title: "A regular practice", copy: "Weekly sits and retreats near DC." },
  { id: "online", title: "The digital monastery", copy: "Join from anywhere." },
  { id: "deeper", title: "If you want to go further", copy: "Study, when you ask for it." },
];

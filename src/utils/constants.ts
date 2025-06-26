export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://people-work.net";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const ROUTE = {
  index: "/",
  questions: "/questions",
  people: "/people",
  about: "/about",
};

export const CONTACT = {
  linkedin: "https://www.linkedin.com/company/people-work-net",
  email: "heypeoplework@gmail.com",
};

// Featured
export const FEATURED = [
  {
    id: 0,
    slug: "margo-laz",
  },
  {
    id: 1,
    slug: "dennis-lazard",
  },
  {
    id: 2,
    slug: "ivan-baranov",
  },
  {
    id: 3,
    slug: "lara-simonova",
  },
  {
    id: 4,
    slug: "bartek-hlawka",
  },
];

// Excluded
export const EXCLUDED_PEOPLE = ["bartek-hlawka"];
export const EXCLUDED_QUESTIONS = [
  "where-to-start",
  "drivers",
  "best-advice",
  "proud-moment",
  "regrets",
  "work-ethic",
  "winning-mindset",
  "face-the-unknown",
  "recharging",
  "values-evolution",
];

// Emojis
interface EmojiData {
  value?: string;
  className?: string;
}

type EmojisType = Record<string, EmojiData>;

export const EMOJIS: EmojisType = {
  company: {
    value: "💼",
  },
  role: {
    value: "😎",
  },
  "daily-tasks": {
    value: "📂",
  },
  "tools-apps": {
    value: "⚒️",
  },
  skills: {
    value: "🧠",
  },
  "eye-opening": {
    value: "👀",
  },
  "underrated-challenge": {
    value: "🫠",
  },
  "where-to-start": {
    value: "✏️",
  },
  drivers: {
    value: "🥁",
  },
  // 10
  "top-goal": {
    value: "🚀",
  },
  "grow-skills": {
    value: "🥷",
  },
  "unique-talent": {
    value: "🤌",
  },
  "best-advice": {
    value: "🥐",
  },
  "bad-advice": {
    value: "💩",
  },
  "lesson-learned": {
    value: "🥵",
  },
  "proud-moments": {
    value: "🥳",
  },
  regrets: {
    value: "💔",
  },
  "work-ethic": {
    value: "🦾",
  },
  "winning-mindset": {
    value: "🏆",
  },
  // 20
  "face-the-unknown": {
    value: "🤔",
  },
  networking: {
    value: "💬",
  },
  "work-life": {
    value: "🍀",
  },
  recharging: {
    value: "🔋",
  },
  "values-evolution": {
    value: "🧭",
  },
  "dream-path": {
    value: "🤩",
  },
  "exciting-trends": {
    value: "🎉",
  },
  "fav-products": {
    value: "🍏",
  },
  "media-picks": {
    value: "📚",
  },
  "advice-to-20s-self": {
    value: "🧐",
  },
  "guest-wishlist": {
    value: "💜",
  },
};

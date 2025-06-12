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
    className: "mb-1",
  },
  role: {
    value: "😎",
  },
  "daily-tasks": {
    value: "📂",
  },
  skills: {
    value: "🧠",
    className: "mb-1",
  },
  "best-thing": {
    value: "🥐",
  },
  "worst-thing": {
    value: "🥵",
  },
  "underrated-challenge": {
    value: "🫠",
  },
  "top-goal": {
    value: "🚀",
  },
  "current-goal": {
    value: "📌",
  },
  "fav-mistake": {
    value: "🙈",
    className: "mb-1",
  },
  "unique-talent": {
    value: "🤌",
  },
  "progress-check": {
    value: "🐌",
    className: "mb-1",
  },
  "grow-skills": {
    value: "🥷",
  },
  "eye-opening": {
    value: "👀",
  },
  "tools-apps": {
    value: "⚒️",
  },
  "efficiency-tips": {
    value: "🦾",
  },
  networking: {
    value: "💬",
  },
  "work-life": {
    value: "🧟‍♂️",
  },
  "dream-path": {
    value: "🤩",
  },
  "comfy-income": {
    value: "💰",
  },
  "bad-advice": {
    value: "💩",
  },
  "advice-to-20s-self": {
    value: "🧐",
  },
  "career-advice": {
    value: "✏️",
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
  "guest-wishlist": {
    value: "💜",
  },
};

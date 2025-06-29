export const EDITING_PERSON_SLUG = "alla-aloe";
export const FEATURED = [
  {
    id: 9,
    slug: "alla-aloe",
  },
  // {
  //   id: 8,
  //   slug: "gev-marotz",
  // },
  // {
  //   id: 7,
  //   slug: "luba-kazakova",
  // },
  // {
  //   id: 6,
  //   slug: "kate-rovba",
  // },
  {
    id: 5,
    slug: "agnieszka-bojanowska",
  },
  // {
  //   id: 4,
  //   slug: "bartek-hlawka",
  // },
  // {
  //   id: 2,
  //   slug: "ivan-baranov",
  // },
  {
    id: 2,
    slug: "ivan-baranov",
  },
  {
    id: 1,
    slug: "dennis-lazard",
  },
  {
    id: 0,
    slug: "margo-laz",
  },
  {
    id: 3,
    slug: "lara-simonova",
  },
];

// Excluded
export const EXCLUDED_PEOPLE: string[] = [];

// TODO: Remove
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
    value: "🥹",
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
    value: "👽",
  },
  networking: {
    value: "💬",
  },
  "work-life": {
    value: "🍀",
  },
  recharging: {
    value: "🪫",
  },
  "values-evolution": {
    value: "🌊",
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

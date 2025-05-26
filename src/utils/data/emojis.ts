interface EmojiData {
  value: string;
  className?: string;
}

type EmojisType = Record<string, EmojiData>;

export const EMOJIS: EmojisType = {
  company: {
    value: "💼",
    className: "mb-1",
  },
  "role-snapshot": {
    value: "😎",
  },
  "real-work": {
    value: "📌",
  },
  skills: {
    value: "💪",
    className: "mb-1",
  },
  "best-thing": {
    value: "🥐",
  },
  "worst-thing": {
    value: "🥵",
  },
  "underrated-challenges": {
    value: "🫠",
  },
  "biggest-goal": {
    value: "🚀",
  },
  "closest-goal": {
    value: "🦀",
  },
  "fav-mistake": {
    value: "🙈",
    className: "mb-1",
  },
  "unique-talent": {
    value: "🤌",
  },
  now: {
    value: "🐌",
    className: "mb-1",
  },
  "growth-skills": {
    value: "🥷",
  },
  "eye-opening": {
    value: "👀",
  },
  tools: {
    value: "⚒️",
  },
  "tips-tricks": {
    value: "🦍",
  },
  networking: {
    value: "💬",
  },
  "work-life-balance": {
    value: "🍀",
  },
  "true-calling": {
    value: "🤩",
  },
  money: {
    value: "💵",
  },
  "bad-advice": {
    value: "💩",
  },
  "advice-to-younger-self": {
    value: "🧐",
  },
  "career-advice": {
    value: "✏️",
  },
  "excited-trends": {
    value: "🎉",
  },
  "fav-products": {
    value: "🍏",
  },
  recommended: {
    value: "📚",
  },
  "new-people": {
    value: "🐐",
    className: "mb-1 text-xl",
  },
};

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "http://localhost:3000";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const LINKEDIN = "https://www.linkedin.com/company/people-work-net";
export const EMAIL = "heypeoplework@gmail.com";

export const PAGE = {
  HOME: "/",
  QUESTIONS: "/questions",
  BACKLOG: "/backlog",
};

export const OG = {
  BASE_URL,
  TITLE: "Job titles decoded. In a simple Q&A format.",
  DESCRIPTION:
    "A small web hustle on a mission to demystify job titles and show real people behind them.",
  IMAGE: "/opengraph-image.jpg",
};

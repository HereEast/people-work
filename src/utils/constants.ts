export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://people-work.net"
    : "http://localhost:3000";

export const LINKEDIN = "https://www.linkedin.com/company/people-work-net";
export const EMAIL = "heypeoplework@gmail.com";

export const OG = {
  BASE_URL,
  TITLE: "Job titles decoded. In a simple Q&A format.",
  DESCRIPTION:
    "A small web hustle on a mission to demystify job titles and show real people behind them.",
  IMAGE: "/opengraph-image.jpg",
};

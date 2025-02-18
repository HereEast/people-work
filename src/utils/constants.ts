export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://people-work.net"
    : "http://localhost:3000";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const LINKEDIN = "https://www.linkedin.com/company/people-work-net";
export const EMAIL = "heypeoplework@gmail.com";

export const PAGE = {
  index: "/",
  questions: "/questions",
  backlog: "/backlog",
};

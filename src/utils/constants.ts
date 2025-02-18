export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://people-work.net"
    : "http://localhost:3000";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const ROUTE = {
  index: "/",
  questions: "/questions",
  backlog: "/backlog",
};

export const CONTACT = {
  linkedin: "https://www.linkedin.com/company/people-work-net",
  email: "heypeoplework@gmail.com",
};

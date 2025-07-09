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
  admin: "/admin",
};

export const CONTACT = {
  linkedin: "https://www.linkedin.com/company/people-work-net",
  email: "heypeoplework@gmail.com",
};

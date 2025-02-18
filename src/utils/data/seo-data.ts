import { BASE_URL } from "../constants";

export const SEO_DATA = {
  index: {
    url: BASE_URL,
    imageUrl: "/opengraph-image.jpg",
    title: "Job titles decoded. In a simple Q&A format.",
    description:
      "A small web hustle on a mission to demystify job titles and show real people behind them.",
  },
  person: {
    title(name: string, title: string, company: string) {
      return `${name}, ${title} at ${company}`;
    },
    description(name: string) {
      return `Discover how ${name} approaches work, perspectives, and career growth. Explore unique insights and experiences in a simple Q&A format.`;
    },
  },
  question: {
    title(question: string) {
      return `Q: ${question}`;
    },
    description:
      "Explore diverse perspectives on this topic from professionals across industries.",
  },
  backlog: {
    title: "Backlog | Job titles decoded. In a simple Q&A format.",
  },
};

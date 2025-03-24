import localFont from "next/font/local";
import { Inter as InterFont } from "next/font/google";

export const Inter = InterFont({
  variable: "--font-secondary",
  subsets: ["latin", "cyrillic"],
});

export const InnovatorGrotesk = localFont({
  src: [
    {
      path: "../app/fonts/innovator-grotesk-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/innovator-grotesk-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/fonts/innovator-grotesk-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../app/fonts/innovator-grotesk-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../app/fonts/innovator-grotesk-extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../app/fonts/innovator-grotesk-black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-primary",
});

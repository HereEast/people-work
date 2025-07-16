import localFont from "next/font/local";
import { Inter as InterGoogle } from "next/font/google";

export const Inter = InterGoogle({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const Nm = localFont({
  src: [
    {
      path: "../../../public/fonts/nm-book.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/nm-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/nm-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/nm-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/nm-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-base",
});

export const Mondwest = localFont({
  src: [
    {
      path: "../../../public/fonts/mondwest-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-accent",
});

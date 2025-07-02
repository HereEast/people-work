import localFont from "next/font/local";

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

export const InnovatorGrotesk = localFont({
  src: [
    {
      path: "../../../public/fonts/innovator-grotesk-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/innovator-grotesk-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/innovator-grotesk-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/innovator-grotesk-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/innovator-grotesk-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/innovator-grotesk-extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/innovator-grotesk-black.woff2",
      weight: "900",
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

import { ReactNode } from "react";
import { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

import { ClientProvider } from "~/providers/ClientProvider";

import { Header } from "~/components/layouts/Header";
import { Footer } from "~/components/layouts/Footer";

const InnovatorGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/innovator-grotesk-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/innovator-grotesk-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/innovator-grotesk-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/innovator-grotesk-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/innovator-grotesk-extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/innovator-grotesk-black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "people-work.net",
  description: "Job titles decoded. In a simle Q&A format.",
};

const og = {
  title: "people-work.net",
  description: "Job titles decoded. In a simle Q&A format.",
  image: "https://people-work.net/images/og-image.jpg",
} as const;

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${InnovatorGrotesk.className} scroll-smooth`}>
      <head>
        <meta name="description" content={og.description} />
        <meta property="og:title" content={og.title} />
        <meta property="og:description" content={og.description} />
        <meta property="og:url" content="https://people-work.net" />
        <meta property="og:image" content={og.image} />
        <meta name="twitter:title" content={og.title} />
        <meta name="twitter:description" content={og.description} />
        <meta name="twitter:image" content={og.image} />
        <title>{og.title}</title>
      </head>
      <body
        suppressHydrationWarning={true}
        className="flex min-h-screen flex-col text-lg"
      >
        <ClientProvider>
          <Header />
          <main className="mt-[56px] grow">{children}</main>
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}

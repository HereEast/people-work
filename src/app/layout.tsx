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
  title: "People-work",
  description: "People-work website.",
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${InnovatorGrotesk.className} scroll-smooth`}>
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

import { ReactNode } from "react";
import { Metadata } from "next";

import "./globals.css";

import localFont from "next/font/local";

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
  ],
});

import { Header } from "~/components/layouts";
import { Footer } from "~/components/layouts";

export const metadata: Metadata = {
  title: "People Work",
  description: "Generated by create next app",
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={InnovatorGrotesk.className}>
      <body
        suppressHydrationWarning={true}
        className="flex min-h-screen flex-col"
      >
        <Header />
        <main className="flex-grow px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
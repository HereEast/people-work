import { ReactNode } from "react";
import { Metadata } from "next";

import "./globals.css";

import localFont from "next/font/local";

const InnovatorGrotesk = localFont({
  src: [
    {
      path: "../fonts/InnovatorGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/InnovatorGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/InnovatorGrotesk-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/InnovatorGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

// import { DM_Sans } from "next/font/google";

// const DMSans = DM_Sans({
//   subsets: ["latin"],
//   display: "swap",
// });

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

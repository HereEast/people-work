import { ReactNode } from "react";
import { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

import { Footer, Header } from "~/components/layouts";
import { ClientProvider } from "~/providers";

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

export const metadata: Metadata = {
  title: "People-work",
  description: "People-work website.",
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={InnovatorGrotesk.className}>
      <body
        suppressHydrationWarning={true}
        className="flex min-h-screen flex-col text-xl"
      >
        <ClientProvider>
          <Header />
          <main className="mt-16 flex-grow">{children}</main>
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}

import { ReactNode } from "react";
import { Metadata } from "next";

import "../globals.css";

import { ClientProvider } from "~/providers/ClientProvider";

import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { GoogleAnalytics } from "~/components/GoogleAnalytics";
import { CookieBanner } from "~/components/CookieBanner";

import { getMetadata } from "~/utils/metadata";
import { InnovatorGrotesk, Mondwest } from "~/utils/fonts";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = getMetadata();

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${GeistSans.className} ${Mondwest.variable} scroll-smooth`}
    >
      <GoogleAnalytics />

      <body
        suppressHydrationWarning={true}
        className="flex min-h-screen flex-col bg-stone-200 text-lg"
      >
        <ClientProvider>
          <Header />

          <main className="mt-14 flex h-full grow">{children}</main>

          <Footer />
        </ClientProvider>

        <CookieBanner />
      </body>
    </html>
  );
}

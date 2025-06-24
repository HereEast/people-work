import { ReactNode } from "react";
import { Metadata } from "next";

import "../globals.css";

import { ClientProvider } from "~/providers/ClientProvider";

import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { GoogleAnalytics } from "~/components/GoogleAnalytics";
import { CookieBanner } from "~/components/CookieBanner";

import { getMetadata } from "~/utils/metadata";
import { InnovatorGrotesk, Mondwest, Nm } from "~/utils/fonts";

export const metadata: Metadata = getMetadata();

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${Nm.className} ${Mondwest.variable} scroll-smooth`}
    >
      <GoogleAnalytics />

      <body
        suppressHydrationWarning={true}
        className="flex min-h-screen flex-col bg-bg text-xl text-stone-900"
      >
        <ClientProvider>
          <Header />

          <main className="relative mx-auto mt-12 flex size-full max-w-9xl grow flex-col px-2.5 sm:mt-16 md:px-6">
            {children}
          </main>

          <Footer />
        </ClientProvider>

        <CookieBanner />

        <div id="portal-root" />
      </body>
    </html>
  );
}

import { ReactNode } from "react";
import { Metadata } from "next";

import "./globals.css";

import { ClientProvider } from "~/providers/ClientProvider";

import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { GoogleAnalytics } from "~/components/GoogleAnalytics";
import { CookieBanner } from "~/components/CookieBanner";

import { getMetadata } from "~/utils/getMetadata";
import { InnovatorGrotesk } from "~/utils/fonts";

export const metadata: Metadata = getMetadata();

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${InnovatorGrotesk.className} scroll-smooth`}>
      <GoogleAnalytics />

      <body
        suppressHydrationWarning={true}
        className="flex min-h-screen flex-col text-lg"
      >
        <ClientProvider>
          <Header />

          <main className="mt-[56px] flex h-full grow">{children}</main>

          <Footer />
        </ClientProvider>

        <CookieBanner />
      </body>
    </html>
  );
}

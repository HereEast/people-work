import { ReactNode } from "react";
import { Metadata } from "next";

import "./globals.css";

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
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="flex min-h-screen flex-col"
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

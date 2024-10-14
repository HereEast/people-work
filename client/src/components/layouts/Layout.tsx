import { ReactNode } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex w-full grow flex-col items-center px-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}

"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Header } from "./Header";
import { Footer } from "./Footer";

const queryClient = new QueryClient();

interface ClientLayoutProps {
  children: ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </QueryClientProvider>
  );
}

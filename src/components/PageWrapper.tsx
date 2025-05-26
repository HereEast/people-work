import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageLayoutProps) {
  return (
    <div className="relative mx-auto w-full max-w-9xl grow px-2.5 md:px-6">
      {children}
    </div>
  );
}

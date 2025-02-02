import { ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div
      className={cn(
        "relative mx-auto max-w-7xl px-2 pb-16 pt-10 sm:px-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

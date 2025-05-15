import { ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageWrapper({ children, className = "" }: PageLayoutProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-9xl px-2.5 sm:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

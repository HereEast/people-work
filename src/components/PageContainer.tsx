import { ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className = "" }: PageLayoutProps) {
  return (
    <div className={cn("relative mx-auto max-w-8xl px-2 sm:px-4", className)}>
      {children}
    </div>
  );
}

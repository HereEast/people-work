import { ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <div
      className={cn("relative max-w-7xl px-2 pb-20 pt-10 sm:px-4", className)}
    >
      {children}
    </div>
  );
}

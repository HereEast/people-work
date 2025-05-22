import { ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface ColumnProps {
  children: ReactNode;
  className?: string;
  variant?: "sticky";
}

export function Column({ children, variant, className = "" }: ColumnProps) {
  return variant === "sticky" ? (
    <div className="relative">
      <div
        className={cn(
          "top-16 hidden flex-col pt-4 lg:sticky lg:flex lg:h-[calc(100vh-105px)]",
          className,
        )}
      >
        {children}
      </div>
    </div>
  ) : (
    <div className={cn("flex flex-col gap-2.5 pt-4", className)}>
      {children}
    </div>
  );
}

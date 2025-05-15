import { ReactNode } from "react";
import { cn } from "~/utils/handlers";

interface ColumnProps {
  children: ReactNode;
  className?: string;
  variant?: "left" | "right";
}

export function Column({ children, variant, className = "" }: ColumnProps) {
  return variant === "left" ? (
    <div className="relative">
      <div
        className={cn("top-20 sm:sticky lg:h-[calc(100vh-105px)]", className)}
      >
        {children}
      </div>
    </div>
  ) : (
    <div className={cn("flex flex-col gap-2", className)}>{children}</div>
  );
}

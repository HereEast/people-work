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
      <div className={cn("sticky top-20 h-[calc(100vh-100px)]", className)}>
        {children}
      </div>
    </div>
  ) : (
    <div className={cn("flex flex-col gap-1", className)}>{children}</div>
  );
}

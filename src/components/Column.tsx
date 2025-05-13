import { ReactNode } from "react";
import { cn } from "~/utils/handlers";

interface ColumnProps {
  children: ReactNode;
  className?: string;
  variant?: "left" | "right";
}

export function Column({ children, variant, className = "" }: ColumnProps) {
  return variant === "left" ? (
    <div className={cn("sticky top-20 self-start md:block", className)}>
      {children}
    </div>
  ) : (
    <div className={cn("flex flex-col gap-1", className)}>{children}</div>
  );
}

import { ReactNode } from "react";
import { cn } from "~/utils/handlers";

interface ColumnProps {
  children: ReactNode;
  className?: string;
}

export function LeftColumn({ children, className = "" }: ColumnProps) {
  return (
    <div className={cn("sticky top-20 self-start md:block", className)}>
      {children}
    </div>
  );
}

export function RightColumn({ children, className = "" }: ColumnProps) {
  return (
    <div className={cn("flex flex-col gap-1 py-6 pb-10", className)}>
      {children}
    </div>
  );
}

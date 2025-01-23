import { ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={cn(
        "relative flex max-w-full flex-col overflow-hidden rounded-6xl bg-stone-950",
        className,
      )}
    >
      {children}
    </div>
  );
}

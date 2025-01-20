import { ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface CardProps {
  children: ReactNode;
  classes?: string;
}

export function Card({ children, classes = "" }: CardProps) {
  return (
    <div
      className={cn(
        "group/card flex w-full flex-col overflow-hidden rounded-5xl bg-stone-950",
        classes,
      )}
    >
      {children}
    </div>
  );
}

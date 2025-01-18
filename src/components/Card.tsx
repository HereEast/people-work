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
        "group flex w-full flex-col overflow-hidden rounded-5xl bg-stone-950 p-6 pb-8",
        classes,
      )}
    >
      {children}
    </div>
  );
}

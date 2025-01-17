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
        "group w-full overflow-hidden rounded-[80px] bg-stone-950 p-5 pb-8",
        classes,
      )}
    >
      {children}
    </div>
  );
}

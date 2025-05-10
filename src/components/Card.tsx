import { HTMLAttributes, ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className = "", ...rest }: CardProps) {
  return (
    <div className={cn("rounded-xl transition", className)} {...rest}>
      {children}
    </div>
  );
}

import { HTMLAttributes, ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  marked?: boolean;
}

export function Card({
  children,
  className = "",
  marked = false,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col rounded-xl bg-stone-50 transition sm:rounded-xxl lg:rounded-2xl",
        marked && "bg-stone-900/30",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

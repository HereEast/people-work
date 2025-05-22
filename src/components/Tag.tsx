import { ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <div
      className={cn(
        "flex h-10 items-center justify-center gap-1 rounded-sm border border-stone-900/20 px-3.5 text-sm capitalize tracking-[0.02ch] sm:h-12 sm:px-4 sm:text-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

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
        "flex h-9 w-fit max-w-full cursor-default items-center justify-center gap-1 truncate rounded-sm border border-stone-900 px-3 text-lg capitalize tracking-[0.004ch] sm:h-12 sm:px-4 sm:text-xl",
        className,
      )}
    >
      <span>{children}</span>
    </div>
  );
}

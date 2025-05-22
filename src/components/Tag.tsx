import { ReactNode } from "react";

import { cn } from "~/utils/handlers";
import { buttonClasses } from "./ui/Button";

interface TagProps {
  children: ReactNode;
  size?: "tile";
  className?: string;
}

export function Tag({ children, size, className = "" }: TagProps) {
  return (
    <div
      className={cn(
        buttonClasses.size.base,
        buttonClasses.view.outline,
        "cursor-default pb-px text-sm tracking-[0.02ch] sm:text-xl",
        size === "tile" && buttonClasses.size.tile,
        className,
      )}
    >
      {children}
    </div>
  );
}

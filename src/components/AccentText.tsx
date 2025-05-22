import { ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface AccentTextProps {
  children: ReactNode;
  size?: "xl" | "base" | "s";
  underline?: boolean;
  className?: string;
}

export function AccentText({
  children,
  size = "base",
  underline = false,
  className = "",
}: AccentTextProps) {
  return (
    <span
      className={cn(
        // Base
        "font-accent text-3xl leading-[70%] tracking-[-0.02ch] sm:text-[40px]",
        underline &&
          "offset underline decoration-2 underline-offset-2 hover:no-underline sm:underline-offset-[3px]",
        // S
        size === "s" &&
          "text-[22px] leading-[70%] md:text-2xl md:leading-[100%]",
        // Xl
        size === "xl" &&
          "text-[40px] leading-[80%] tracking-[-0.04ch] sm:text-[86px]",
        size === "xl" &&
          underline &&
          "underline decoration-[2px] underline-offset-[3px] hover:no-underline hover:opacity-30",
        className,
      )}
    >
      {children}
    </span>
  );
}

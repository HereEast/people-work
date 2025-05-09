import { ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface AccentTextProps {
  children: ReactNode;
  size?: "xl" | "base" | "s";
  underline?: boolean;
  classname?: string;
}

export function AccentText({
  children,
  size = "base",
  underline = false,
  classname = "",
}: AccentTextProps) {
  return (
    <span
      className={cn(
        // Base
        "font-accent text-3xl leading-[80%] tracking-[-0.02ch] sm:text-[42px]",
        underline &&
          "offset underline decoration-2 underline-offset-2 hover:no-underline hover:opacity-30 sm:underline-offset-[3px]",
        // S
        size === "s" && "text-[22px] md:text-2xl md:leading-[100%]",
        // Xl
        size === "xl" && "text-[44px] leading-[80%] sm:text-[86px]",
        size === "xl" &&
          underline &&
          "underline decoration-[3px] underline-offset-[5px] hover:no-underline hover:opacity-30",
        classname,
      )}
    >
      {children}
    </span>
  );
}

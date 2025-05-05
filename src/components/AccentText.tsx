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
        "font-accent text-3xl md:text-[40px]",
        underline &&
          "offset underline decoration-2 underline-offset-2 hover:no-underline hover:opacity-30 sm:underline-offset-[3px]",
        // S
        size === "s" && "text-[22px] md:text-2xl md:leading-[100%]",
        // Xl
        size === "xl" && "text-[44px] leading-[90%] md:text-[74px]",
        size === "xl" &&
          underline &&
          "offset underline decoration-2 underline-offset-4 hover:no-underline hover:opacity-30",
        classname,
      )}
    >
      {children}
    </span>
  );
}

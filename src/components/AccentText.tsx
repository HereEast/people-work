import { ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface AccentTextProps {
  children: ReactNode;
  size: "xl" | "base";
  underline?: boolean;
  classname?: string;
}

export function AccentText({
  children,
  size,
  underline = false,
  classname = "",
}: AccentTextProps) {
  return (
    <span
      className={cn(
        "font-accent text-[40px]",
        size === "xl" && "text-[74px] leading-[90%]",
        size === "xl" &&
          underline &&
          "offset underline decoration-2 underline-offset-4 hover:no-underline hover:opacity-30",
        size === "base" &&
          underline &&
          "offset underline decoration-2 underline-offset-[3px] hover:no-underline hover:opacity-30",
        classname,
      )}
    >
      {children}
    </span>
  );
}

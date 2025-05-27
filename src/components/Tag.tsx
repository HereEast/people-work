import { ReactNode } from "react";

import { cn } from "~/utils/handlers";
import { Button, buttonClasses } from "./ui/Button";

interface TagProps {
  children: ReactNode;
  href?: string;
  size?: "tile";
}

export function Tag({ children, size, href }: TagProps) {
  const content = size === "tile" ? children : `#${children}`;

  return href ? (
    <Button href={href} view="outline" className="pb-0.5 text-sm sm:text-xl">
      {content}
    </Button>
  ) : (
    <div
      className={cn(
        buttonClasses.size.base,
        buttonClasses.view.outline,
        "cursor-default pb-px text-sm tracking-[0.02ch] hover:border-stone-900/20 hover:bg-transparent sm:text-xl",
        size && buttonClasses.size[size],
      )}
    >
      {content}
    </div>
  );
}

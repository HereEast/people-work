import { ReactNode } from "react";

import { cn } from "~/utils/handlers";
import { Button, buttonVariants } from "./ui/Button";

interface TagProps {
  children: ReactNode;
  href?: string;
  size?: "icon" | "tag";
}

export function Tag({ children, size = "tag", href }: TagProps) {
  return href ? (
    <Button
      href={href}
      variant="outline"
      size={size}
      className="pb-0.5 text-sm tracking-[0.02ch] sm:text-xl"
    >
      {children}
    </Button>
  ) : (
    <div className={cn(buttonVariants({ size, variant: "tag" }))}>
      {children}
    </div>
  );
}

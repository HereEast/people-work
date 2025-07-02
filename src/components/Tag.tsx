import { ReactNode } from "react";
import Link from "next/link";

import { buttonVariants } from "./ui";
import { cn } from "~/utils/handlers";

interface TagProps {
  children: ReactNode;
  href?: string;
  className?: string;
  size?: "default" | "icon";
}

export function Tag({
  children,
  href,
  className = "",
  size = "default",
}: TagProps) {
  const baseClasses = cn(buttonVariants({ variant: "tag", size }), className);

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <div
      className={cn(baseClasses, "hover:border-stone-900/15, cursor-default")}
    >
      {children}
    </div>
  );
}

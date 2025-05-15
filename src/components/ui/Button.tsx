import Link from "next/link";
import { MouseEvent, ReactNode } from "react";

import { cn } from "~/utils/handlers";

const styles = {
  view: {
    base: "hover:opacity-40 transition",
    accent: "font-accent",
    "button-link":
      "flex h-8 shrink-0 items-center gap-2 rounded-xs bg-stone-500/20 px-4 text-lg transition hover:bg-stone-500 md:h-10 md:px-5 md:text-xl",
  },
};

type ButtonProps = {
  children: ReactNode;
  href?: string | URL;
  target?: "_blank" | "_self";
  isDisabled?: boolean;
  view?: keyof typeof styles.view;
  underline?: boolean;
  rel?: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

export function Button({
  className = "",
  href,
  children,
  isDisabled,
  onClick,
  view = "base",
  underline = false,
  ...props
}: ButtonProps) {
  const classes = cn(
    href && "w-fit",
    view && styles.view[view],
    underline &&
      "underline decoration-2 underline-offset-[3px] hover:no-underline",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      disabled={isDisabled}
      onClick={(e: MouseEvent<HTMLButtonElement>) => onClick?.(e)}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}

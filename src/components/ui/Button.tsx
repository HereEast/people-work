import Link from "next/link";
import { MouseEvent, ReactNode } from "react";
import { cva } from "class-variance-authority";

import { cn } from "~/utils/handlers";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md disabled:pointer-events-none disabled:opacity-50 transition",
  {
    variants: {
      variant: {
        base: "hover:bg-stone-500/60 bg-stone-600/10",
        accent: "font-accent",
        outline:
          "border border-stone-900/20 bg-transparent hover:bg-stone-600/10 hover:border-transparent",
        link: "h-fit w-fit inline-block p-0 bg-transparent hover:bg-transparent hover:opacity-30",
        tag: "sm:text-xl text-sm tracking-[0.02ch] border border-stone-900/20 pb-0.5",
      },
      size: {
        base: "w-fit h-10 sm:h-14 rounded-xs sm:rounded-sm px-3 pb-px sm:px-5",
        icon: "size-10 sm:size-14 rounded-xs sm:rounded-sm shrink-0 p-0 sm:px-0 text-xl sm:text-2xl",
        tag: "w-fit h-10 sm:h-14 rounded-xs sm:rounded-sm px-3 pb-px sm:px-5",
      },
    },
  },
);

type ButtonProps = {
  children?: ReactNode;
  href?: string | URL;
  target?: "_blank" | "_self";
  isDisabled?: boolean;
  variant?: "base" | "accent" | "outline" | "link" | "tag";
  view?: "go-to";
  size?: "base" | "icon" | "tag";
  underline?: boolean;
  rel?: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

export function Button({
  href,
  children,
  isDisabled,
  onClick,
  variant = "base",
  view,
  size,
  underline = false,
  className = "",
  ...props
}: ButtonProps) {
  const classes = cn(
    buttonVariants({ variant, size }),
    underline &&
      "underline decoration-2 underline-offset-[3px] decoration-stone-900 hover:decoration-stone-900/0",
    className,
  );

  if (href) {
    const linkLabel =
      view === "go-to" ? (
        <ArrowUpRightIcon className="w-5 shrink-0 sm:w-6" />
      ) : (
        children
      );

    return (
      <Link href={href} className={classes} {...props}>
        {linkLabel}
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

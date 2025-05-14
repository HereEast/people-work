import Link from "next/link";
import { MouseEvent, ReactNode } from "react";

import { cn } from "~/utils/handlers";

const styles = {
  // base: "group/button inline-flex items-center outline-none relative justify-center leading-none font-semibold bg-stone-950 text-stone-50 rounded-full w-fit h-8 px-4 transition text-lg",
  // size: {
  //   md: "h-12 px-10",
  //   sm: "h-8 px-4 rounded-full",
  // },
  view: {
    // primary: "hover:shadow-none",
    // animated: "animate-anime bg-gradient-base bg-[length:600%] text-stone-50",
    base: "hover:opacity-40 transition",
    accent: "font-accent",
    "button-link":
      "flex h-8 shrink-0 items-center gap-2 rounded-full bg-stone-500/75 px-3 text-lg transition hover:bg-stone-500 md:h-10 md:px-5 md:text-xl",
  },
  // animated: {
  //   base: "animate-anime hover:[animation-play-state:paused] bg-gradient-base bg-[length:600%] text-stone-50",
  //   hover:
  //     "animate-anime hover:bg-gradient-base bg-[length:600%] hover:text-stone-50",
  // },
};

type ButtonProps = {
  children: ReactNode;
  href?: string | URL;
  target?: "_blank" | "_self";
  isDisabled?: boolean;
  // size?: keyof typeof styles.size;
  view?: keyof typeof styles.view;
  // animated?: keyof typeof styles.animated;
  underline?: boolean;
  rel?: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

export function Button({
  className = "",
  // size,
  href,
  children,
  isDisabled,
  onClick,
  view = "base",
  underline = false,
  // animated,
  ...props
}: ButtonProps) {
  const classes = cn(
    href && "w-fit",
    // styles.base,
    // href && styles.view[view],
    // size && styles.size[size],
    view && styles.view[view],
    underline &&
      "underline decoration-2 underline-offset-[3px] hover:no-underline",
    // (view === "primary" || view === "inverted") && styles.animated.hover,
    // animated && styles.animated[animated],
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

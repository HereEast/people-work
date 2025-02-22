import Link from "next/link";
import { MouseEvent, ReactNode } from "react";

import { cn } from "~/utils/handlers";

const styles = {
  base: "group/button inline-flex items-center outline-none relative justify-center leading-none font-semibold lowercase bg-stone-950 text-stone-50 rounded-full w-fit h-8 px-4 transition",
  size: {
    md: "h-12 px-10",
    sm: "h-8 px-4 rounded-full",
    xs: "",
  },
  view: {
    link: "hover:shadow-lg hover:shadow-blue-600 bg-stone-950",
    inverted: "bg-stone-50 text-stone-960",
  },
  animated: {
    base: "animate-anime hover:[animation-play-state:paused] bg-gradient-base bg-[length:600%] text-stone-50",
    hover:
      "animate-anime hover:bg-gradient-base bg-[length:600%] hover:text-stone-50",
  },
};

type ButtonProps = {
  children: ReactNode;
  href?: string | URL;
  target?: "_blank" | "_self";
  isDisabled?: boolean;
  size?: keyof typeof styles.size;
  view?: keyof typeof styles.view;
  animated?: keyof typeof styles.animated;
  rel?: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

export function Button({
  className = "",
  size,
  href,
  children,
  isDisabled,
  onClick,
  view,
  animated,
  ...props
}: ButtonProps) {
  const classes = cn(
    styles.base,
    href && `${styles.view.link} ${styles.size.sm}`,
    size && styles.size[size],
    view && styles.view[view],
    animated && styles.animated[animated],
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

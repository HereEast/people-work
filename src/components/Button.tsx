import Link from "next/link";
import { MouseEvent, ReactNode } from "react";

import { cn } from "~/utils/handlers";

// interface ButtonProps {
//   children: string | ReactNode;
//   disabled?: boolean;
//   className?: string;
//   isAnimated?: boolean;
// }

const styles = {
  base: "group/button inline-flex items-center outline-none relative justify-center leading-none bg-stone-950 text-stone-50 rounded-full",
  size: {
    md: "h-10 text-15 px-6 rounded-full md:h-9",
    sm: "h-8 px-3 rounded-full",
    xs: "",
  },
  link: "transition hover:shadow-lg hover:shadow-blue-600 bg-stone-950",
};

type ButtonProps = {
  href?: string | URL;
  target?: "_blank" | "_self";
  rel?: string;
  size?: keyof typeof styles.size;
  children: ReactNode;
  className?: string;
  isDisabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: "link";
};

export function Button({
  className = "",
  size,
  href = "",
  target = "_self",
  children,
  isDisabled,
  onClick,
  type,
  ...props
}: ButtonProps) {
  const classes = cn(
    styles.base,
    href && styles.link && styles.size.sm,
    size && styles.size[size],
    type && styles[type],
    className,
  );

  if (href) {
    return (
      <Link href={href} target={target} className={classes} {...props}>
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

// export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
//   (
//     {
//       children,
//       disabled = false,
//       isAnimated = false,
//       className = "",
//       ...props
//     },
//     ref,
//   ) => {
//     return (
//       <button
//         className={cn(
//           "group/button relative z-10 flex h-14 w-full items-center justify-center rounded-full bg-white text-lg font-bold",
//           isAnimated && "animate-anime bg-gradient-base bg-[length:600%]",
//           disabled && "opacity-50",
//           className,
//         )}
//         disabled={disabled}
//         ref={ref}
//         {...props}
//       >
//         {children}
//       </button>
//     );
//   },
// );

// Button.displayName = "Button";

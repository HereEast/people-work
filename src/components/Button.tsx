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
  transition: "transition-colors duration-300",
  base: "group inline-flex items-center outline-none relative justify-center tracking-tight leading-none focus:outline-white focus:outline-1 focus:outline-offset-4",
  size: {
    md: "h-10 text-15 px-6 rounded-full md:h-9",
    sm: "h-[34px] text-15 px-[18px] rounded-full",
  },
};

type ButtonProps = {
  href?: string | URL;
  target?: string;
  rel?: string;
  size?: keyof typeof styles.size;
  children: ReactNode;
  className?: string;
  isDisabled?: boolean;
  onClick?: (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => void;
};

export function Button({
  className = "",
  size,
  href = undefined,
  children,
  isDisabled,
  ...props
}: ButtonProps) {
  const classes = cn(styles.transition, size && styles.size[size], className);

  if (href) {
    return (
      <Link className={classes} href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={isDisabled} {...props}>
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

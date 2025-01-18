import { ReactNode } from "react";

import { cn } from "~/utils/handlers";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: string | ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  animate?: boolean;
}

const noop = (): void => {
  return;
};

export function Button({
  children,
  onClick = noop,
  type = "button",
  disabled = false,
  className = "",
  animate = false,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "group/button relative z-10 flex h-14 w-full animate-anime items-center justify-center rounded-full bg-white text-lg font-bold",
        animate &&
          "from-[#ffc814] via-[#ff185d] to-[#1e7fff] bg-[length:600%] filter transition hover:bg-gradient-to-r",
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

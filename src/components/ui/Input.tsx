import { ChangeEvent, useRef } from "react";
import { cn } from "~/utils/handlers";

interface InputProps {
  placeholder: string;
  className?: string;
}

export function Input({ placeholder, className = "", ...props }: InputProps) {
  const ref = useRef(null);

  return (
    <input
      className={cn(
        "h-14 w-full rounded-full border border-stone-600 bg-stone-950 px-5 text-base font-light text-stone-50 outline-none placeholder:font-light placeholder:text-stone-600 focus:border-stone-50",
        className,
      )}
      placeholder={placeholder}
      ref={ref}
      {...props}
    />
  );
}

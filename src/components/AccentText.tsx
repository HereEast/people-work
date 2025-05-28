import { cn } from "~/utils/handlers";

interface AccentTextProps {
  children: string;
  className?: string;
}

export function AccentText({ children, className = "" }: AccentTextProps) {
  return (
    <span
      className={cn(
        "font-accent text-[121%] tracking-[-0.04ch]",
        className,
        "leading-[80%]",
      )}
    >
      {children}
    </span>
  );
}

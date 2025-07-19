import { cn } from "~/utils/handlers";

interface AccentTextProps {
  children: string;
  className?: string;
  underline?: boolean;
}

export function AccentText({
  children,
  className = "",
  underline = false,
}: AccentTextProps) {
  return (
    <span
      className={cn(
        "font-accent text-[116%] leading-[80%] tracking-[-0.02ch]",
        underline &&
          "underline decoration-dotted decoration-[7%] underline-offset-[0.1em] sm:decoration-[5.5%] sm:underline-offset-[0.08em]",
        className,
      )}
    >
      {children}
    </span>
  );
}

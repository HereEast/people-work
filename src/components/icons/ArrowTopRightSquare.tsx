import { IconProps } from "~/utils/types";
import { cn } from "~/utils/handlers";

export function ArrowTopRightSquare({ className = "" }: IconProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <svg
        // className={className}
        width="100%"
        height="100%"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H12H16V4L16 16H12L12 8H8V4H0V0ZM4 12V8H8V12H4ZM4 12V16H0V12H4Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

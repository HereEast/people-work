import { IconProps } from "~/utils/types";

export function ArrowRightFull({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 0H16V8H0V12H16V20H20V16H24V12H28V8H24V4H20V0Z"
        fill="currentColor"
      />
    </svg>
  );
}

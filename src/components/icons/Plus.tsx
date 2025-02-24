import { IconProps } from "~/utils/types";

export function PlusIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="23" width="50" height="4" fill="white" />
      <rect
        x="27"
        width="50"
        height="4"
        transform="rotate(90 27 0)"
        fill="white"
      />
    </svg>
  );
}

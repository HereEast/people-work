import { IconProps } from "~/utils/types";

export function QuoteIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1795 5.60684H5.57265V0H11.1795V5.60684ZM28 5.60684H22.3932V0H28V5.60684ZM11.1795 28H0V5.60684H5.57265V16.8205H11.1795V28ZM28 28H16.7863V5.60684H22.3932V16.8205H28V28Z"
        fill="black"
      />
    </svg>
  );
}

import { IconProps } from "~/utils/types";

export function SmileIconSolid({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 72 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52 0H20V4H16V8H12V12H8V16H4V24H0V52H4V60H8V64H12V68H16V72H20V76H52V72H56V68H60V64H64V60H68V52H72V24H68V16H64V12H60V8H56V4H52V0ZM20 24H24V28H28V40H24V44H20V40H16V28H20V24ZM48 24H52V28H56V40H52V44H48V40H44V28H48V24ZM24 52H20V56H24V60H28V64H44V60H48V56H52V52H48V56H44V60H28V56H24V52Z"
      />
    </svg>
  );
}

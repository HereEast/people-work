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

export function SmileIconSolidSmall({ className = "" }: IconProps) {
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
        d="M52 0H20V8H12V16H4V24H0V52H4V60H12V68H20V76H52V68H60V60H68V52H72V24H68V16H60V8H52V0ZM19 22H25V26H29V38H25V42H19V38H15V26H19V22ZM46 22H52V26H56V38H52V42H46V38H42V26H46V22ZM22 48V54H16V48H22ZM28 60V54H22V60H28ZM44 60H28V66H44V60ZM50 54V60H44V54H50ZM50 54V48H56V54H50Z"
      />
    </svg>
  );
}

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import { ButtonLink } from "./ui";

interface ButtonProps {
  href: string;
}

export function GoToButton({ href }: ButtonProps) {
  return (
    <ButtonLink href={href} size="icon">
      <ArrowUpRightIcon className="w-5 shrink-0 sm:w-6" />
    </ButtonLink>
  );
}

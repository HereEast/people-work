import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import { Button } from "./Button";
import { LinkedinIcon } from "./icons/Linkedin";

interface ButtonProps {
  href: string;
}

export function GoToButton({ href }: ButtonProps) {
  return (
    <Button href={href} size="icon">
      <ArrowUpRightIcon className="w-5 shrink-0 sm:w-6" />
    </Button>
  );
}

export function LinkedinButton({ href }: ButtonProps) {
  return (
    <Button
      href={href}
      size="icon"
      target="_blank"
      className="bg-linkedin hover:bg-linkedin hover:opacity-75"
    >
      <LinkedinIcon className="w-6" />
    </Button>
  );
}

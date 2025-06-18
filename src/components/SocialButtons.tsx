import { LinkedinIcon } from "./icons/Linkedin";
import { ButtonLink } from "./ui";

interface ButtonProps {
  href: string;
}

export function LinkedinButton({ href }: ButtonProps) {
  return (
    <ButtonLink
      href={href}
      size="icon"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-linkedin hover:bg-linkedin hover:opacity-75"
    >
      <LinkedinIcon className="w-6" />
    </ButtonLink>
  );
}

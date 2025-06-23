import { ArrowUpRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { Button, ButtonLink } from ".";

// Go To
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

// Close Popup
interface ClosePopupButtonProps {
  handleClose: () => void;
}

export function ClosePopupButton({ handleClose }: ClosePopupButtonProps) {
  return (
    <Button
      onClick={handleClose}
      aria-label="Close"
      size="icon"
      className="absolute right-6 top-6 bg-transparent hover:bg-stone-600/10 sm:size-12"
    >
      <XMarkIcon className="size-6" />
    </Button>
  );
}

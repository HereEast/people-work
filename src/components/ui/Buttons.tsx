import { ArrowUpRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { Button, ButtonLink, buttonVariants } from ".";
import { cn } from "~/utils/handlers";

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

// Go To Pseudo
interface GoToPseudoButtonProps {
  className?: string;
}

export function GoToPseudoButton({ className = "" }: GoToPseudoButtonProps) {
  return (
    <div
      className={cn(
        buttonVariants({ variant: "base", size: "icon" }),
        className,
      )}
    >
      <ArrowUpRightIcon className="w-5 shrink-0 sm:w-6" />
    </div>
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

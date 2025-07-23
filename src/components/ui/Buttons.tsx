import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { Button, ButtonLink, buttonVariants } from ".";
import { cn } from "~/utils/handlers";

// Go To
interface ButtonProps {
  href?: string;
  className?: string;
}

export function GoToButton({ href, className = "" }: ButtonProps) {
  if (!href) {
    return (
      <div
        className={cn(
          buttonVariants({ variant: "secondary", size: "icon" }),
          className,
        )}
      >
        <ArrowRightIcon className="w-5 shrink-0 sm:w-6" />
      </div>
    );
  }

  return (
    <ButtonLink href={href} size="icon" variant="secondary">
      <ArrowRightIcon className="w-5 shrink-0 sm:w-6" />
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
      size="icon"
      variant="secondary"
      className="absolute right-6 top-6 bg-transparent hover:bg-stone-600/10 sm:size-12"
      aria-label="Close popup"
    >
      <XMarkIcon className="size-6" />
    </Button>
  );
}

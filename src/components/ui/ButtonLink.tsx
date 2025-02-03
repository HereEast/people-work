import { forwardRef, ReactNode } from "react";
import Link from "next/link";

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ children, target = "_blank", ...props }, ref) => {
    return (
      <Link
        target={target}
        className="group/button-link flex h-8 items-center rounded-full bg-stone-950 text-stone-50 transition hover:shadow-lg hover:shadow-blue-600"
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

ButtonLink.displayName = "ButtonLink";

import { ReactNode } from "react";
import Link from "next/link";

interface ButtonLinkProps {
  children: ReactNode;
  to: string;
}

export function ButtonLink({ children, to }: ButtonLinkProps) {
  return (
    <Link
      href={to}
      target="_blank"
      className="group/button-link flex items-center rounded-full bg-stone-950 text-stone-50 transition hover:shadow-lg hover:shadow-blue-600"
    >
      {children}
    </Link>
  );
}

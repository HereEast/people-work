import { ReactNode } from "react";
import Link from "next/link";

import { ArrowRightFull } from "../icons";

export type ButtonIconType = "arrow-right" | false;

interface ButtonLinkProps {
  children: ReactNode;
  to: string;
}

export function ButtonLink({ children, to }: ButtonLinkProps) {
  return (
    <Link
      href={to}
      target="_blank"
      className="flex items-center rounded-full bg-stone-950 px-3 text-stone-50 transition hover:shadow-lg hover:shadow-blue-600"
    >
      {children}
    </Link>
  );
}

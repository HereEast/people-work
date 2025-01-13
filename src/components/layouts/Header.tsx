import Link from "next/link";

import { PAGE } from "~/utils/types";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="fixed flex w-full items-center justify-between bg-white p-4">
      <Link href={PAGE.HOME}>
        <Logo />
      </Link>

      <div>hello 👋</div>
    </header>
  );
}

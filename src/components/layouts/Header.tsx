import Link from "next/link";

import { PAGE } from "~/utils/types";

export function Header() {
  return (
    <header className="flex w-full items-center justify-between p-4">
      <div>
        <h1 className="font-semibold tracking-tighter">
          <Link href={PAGE.HOME}>people work</Link>
        </h1>
      </div>

      <div>hello 👋</div>
    </header>
  );
}

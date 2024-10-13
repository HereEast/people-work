import Link from "next/link";

import { PAGE } from "~/utils/types";

export function Header() {
  return (
    <header className="flex w-full items-center justify-between px-4 py-3">
      <div>
        <h1 className="font-semibold tracking-tighter">
          <Link href={PAGE.HOME}>people work</Link>
        </h1>
      </div>

      {/* <nav>
        <ul>
          <li>
            <Link href={PAGE.QUESTIONS}>questions</Link>
          </li>
        </ul>
      </nav> */}

      <div>hello 👋</div>
    </header>
  );
}

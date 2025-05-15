"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { ROUTE } from "~/utils/constants";

export function NavLinks() {
  const params = useSearchParams();
  const from = params.get("from");

  const name = from
    ?.split("-")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");

  return (
    <div className="flex flex-col text-4xl">
      <Link href={ROUTE.questions}>
        <span>All questions</span>
      </Link>

      {from && (
        <Link href={`/people/${from}`}>
          <span>{`Back to ${name}`}</span>
        </Link>
      )}
    </div>
  );
}

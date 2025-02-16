import Link from "next/link";

import { PersonImage } from "~/components/PersonImage";

import { IPerson } from "~/models/Person";
import { BASE_URL } from "~/utils/constants";

interface PersonDetailsProps {
  person: IPerson;
}

export function PersonDetails({ person }: PersonDetailsProps) {
  return (
    <div className="flex items-start gap-3 text-base leading-none">
      <div className="size-10 shrink-0 overflow-hidden rounded-full">
        <PersonImage person={person} />
      </div>
      <div className="flex flex-col gap-1.5">
        <Link
          href={`${BASE_URL}/people/${person.slug}`}
          className="w-fit font-semibold tracking-header underline underline-offset-1 hover:no-underline hover:opacity-50"
        >
          {person.name}
        </Link>
        <span>{`${person.jobTitle} @ ${person.company.name}`}</span>
      </div>
    </div>
  );
}

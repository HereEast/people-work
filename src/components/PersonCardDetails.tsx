import Link from "next/link";

import { PersonImage } from "~/components/PersonImage";
import { AccentText } from "./AccentText";

import { PersonData } from "~/schemas";

interface PersonDetailsProps {
  person: PersonData;
  isLink?: true;
}

export function PersonCardDetails({ person, isLink }: PersonDetailsProps) {
  const content = (
    <div className="flex items-end gap-3 sm:gap-5">
      <PersonImage
        name={person.name}
        slug={person.slug}
        classname="md:size-20"
      />

      <div className="flex flex-col">
        <h3>
          <AccentText size="s">{person.name}</AccentText>
        </h3>

        <div className="flex flex-col">
          <h4 className="text-lg font-medium leading-[100%] md:text-xl md:leading-[110%]">
            {person.jobTitle}
          </h4>
          <h4 className="text-lg font-medium leading-[100%] md:text-xl md:leading-[110%]">
            {person.company.name}
          </h4>
        </div>
      </div>
    </div>
  );

  return isLink ? (
    <Link
      href={`/people/${person.slug}`}
      className="transition hover:opacity-40"
    >
      {content}
    </Link>
  ) : (
    content
  );
}

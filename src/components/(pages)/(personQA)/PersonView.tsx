import Link from "next/link";

import { AccentText } from "~/components/AccentText";
import { Column } from "~/components/Column";
import { PersonCardDetails } from "~/components/PersonCardDetails";
import { PersonImage } from "~/components/PersonImage";

import { PersonData } from "~/schemas";

interface PersonViewProps {
  person: PersonData;
}

export function PersonView({ person }: PersonViewProps) {
  const contacts = Object.entries(person.links);

  return (
    <>
      {/* Desktop */}
      <Column variant="left">
        <div className="hidden flex-col gap-8 pb-24 md:flex">
          <PersonImage
            name={person.name}
            slug={person.slug}
            classname="size-[240px] rounded-lg"
          />

          <div className="text-2xl sm:text-3xl md:leading-[110%]">
            <h1>
              <AccentText>{person.name}</AccentText>
            </h1>

            <div className="mb-16">
              <h2>{person.jobTitle}</h2>

              <Link
                href={person.company.url}
                target="_blank"
                className="capitalize underline decoration-2 underline-offset-[3.5px] transition hover:no-underline hover:opacity-30"
              >
                {person.company.name}
              </Link>
            </div>

            <ul>
              {contacts.map(([key, value], index) => (
                <li key={index}>
                  <Link
                    href={value}
                    target="_blank"
                    className="capitalize underline decoration-2 underline-offset-[3.5px] transition hover:no-underline hover:opacity-30"
                  >
                    {key}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Column>

      {/* Mobile */}
      <div className="sticky top-12 z-40 -mx-2 mb-4 bg-stone-900 p-2 text-stone-50 md:hidden">
        <div className="flex items-end gap-3 sm:gap-5">
          <PersonImage
            name={person.name}
            slug={person.slug}
            classname="size-[62px]"
          />

          <div className="flex flex-col">
            <h3 className="leading-[110%]">
              <AccentText size="s">{person.name}</AccentText>
            </h3>

            <div className="flex flex-col text-lg font-medium leading-[110%]">
              <h4>{person.jobTitle}</h4>
              <h4>{person.company.name}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

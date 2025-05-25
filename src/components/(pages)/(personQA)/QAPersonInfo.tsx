import Link from "next/link";
import { AccentText } from "~/components/AccentText";

import { Card } from "~/components/Card";
import { Column } from "~/components/Column";
import { PersonImage } from "~/components/PersonImage";

import { PersonData } from "~/schemas";

interface PersonViewProps {
  person: PersonData;
}

export function QAPersonInfo({ person }: PersonViewProps) {
  const contacts = Object.entries(person.links);

  return (
    <>
      {/* Desktop */}
      <Column variant="sticky">
        <div className="flex flex-col gap-16 text-2xl sm:text-3xl md:leading-[110%]">
          <div className="space-y-6">
            <PersonImage
              name={person.name}
              slug={person.slug}
              classname="size-[240px] rounded-lg"
            />

            <div className="space-y-1">
              <h1>
                <AccentText>{person.name}</AccentText>
              </h1>

              <div>
                <h2 className="leading-none">{person.jobTitle}</h2>
                <Link
                  href={person.company.url}
                  target="_blank"
                  className="capitalize underline decoration-2 underline-offset-[3.5px] transition hover:no-underline hover:opacity-30"
                >
                  {person.company.name}
                </Link>
              </div>
            </div>
          </div>

          {/* <div>
            <ul>
              {contacts.map(([source, url], index) => (
                <li key={index}>
                  <Link
                    href={url}
                    target="_blank"
                    className="capitalize underline decoration-2 underline-offset-[3.5px] transition hover:no-underline hover:opacity-30"
                  >
                    {source}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </Column>

      {/* Mobile */}
      <MobilePersonView person={person} />
    </>
  );
}

// Mobile
function MobilePersonView({ person }: PersonViewProps) {
  return (
    <div className="sticky top-12 z-40 mb-2.5 rounded-b-xl bg-bg sm:top-14 sm:rounded-b-2xl lg:hidden">
      <Card className="bg-stone-800 p-3 text-stone-50 sm:p-5">
        <div className="flex items-end gap-3 sm:gap-5">
          <PersonImage
            name={person.name}
            slug={person.slug}
            classname="sm:size-28 sm:rounded-lg"
          />

          <div className="flex flex-col gap-1.5">
            <h3 className="font-accent text-2xl leading-[70%] tracking-[-0.04ch] sm:text-[34px]">
              {person.name}
            </h3>

            <div className="flex flex-col text-xl leading-[108%] tracking-[0.01ch] sm:text-3xl sm:leading-[100%]">
              <h4>{person.jobTitle}</h4>
              <h4>{person.company.name}</h4>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

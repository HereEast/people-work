import Link from "next/link";
import { AccentText } from "~/components/AccentText";

import { Card, StickyMobileWrapper } from "~/components/Card";
import { Column } from "~/components/Column";
import { LinkedinIcon } from "~/components/icons/Linkedin";
import { PersonImage } from "~/components/PersonImage";
import { Button } from "~/components/Button";

import { PersonData } from "~/schemas";
import { LinkedinButton } from "~/components/Buttons";

interface PersonViewProps {
  person: PersonData;
}

export function QAPersonInfo({ person }: PersonViewProps) {
  return (
    <>
      <DesktopPersonView person={person} />
      <MobilePersonView person={person} />
    </>
  );
}

// Desktop
function DesktopPersonView({ person }: PersonViewProps) {
  const contacts = Object.entries(person.links);

  return (
    <Column variant="sticky">
      <div className="flex flex-col gap-10 text-2xl sm:text-3xl md:leading-[110%]">
        <div className="space-y-5">
          <PersonImage
            name={person.name}
            slug={person.slug}
            classname="lg:size-[240px] lg:rounded-md"
          />

          <div className="space-y-1">
            <h1>
              <AccentText>{person.name}</AccentText>
            </h1>

            <div className="space-y-px">
              <h2>{person.jobTitle}</h2>
              <Link
                href={person.company.url}
                target="_blank"
                className="inline-block capitalize underline decoration-2 underline-offset-[3.5px] transition hover:no-underline hover:opacity-30"
              >
                {person.company.name}
              </Link>
            </div>
          </div>
        </div>

        {/* Contacts */}
        {contacts.length > 0 && (
          <ul className="hidden lg:block">
            {contacts.map(([name, url]) => (
              <li key={name}>
                {name === "linkedin" && <LinkedinButton href={url} />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Column>
  );
}

// Mobile
function MobilePersonView({ person }: PersonViewProps) {
  return (
    <StickyMobileWrapper>
      <Card className="rounded-lg bg-stone-800 p-3 text-stone-50 sm:p-5">
        <div className="flex items-end gap-3 sm:gap-5">
          <PersonImage
            name={person.name}
            slug={person.slug}
            classname="sm:size-20"
          />

          <div className="flex flex-col gap-0.5 text-lg sm:text-2xl">
            <h3 className="leading-none">
              <AccentText>{person.name}</AccentText>
            </h3>

            <div className="flex flex-col leading-[1.1] tracking-[0.02ch]">
              <h4>{person.jobTitle}</h4>
              <h4>{person.company.name}</h4>
            </div>
          </div>
        </div>
      </Card>
    </StickyMobileWrapper>
  );
}

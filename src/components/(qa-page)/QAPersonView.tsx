import Link from "next/link";

import { AccentText } from "~/components/AccentText";
import { StickyMobileWrapper } from "~/components/Card";
import { Column } from "~/components/Column";
import { LinkedinButton } from "~/components/Buttons";
import { PersonImage } from "~/components/PersonImage";

import { PersonData } from "~/schemas";
import { PersonCardDetails } from "../PersonCardDetails";

interface PersonViewProps {
  person: PersonData;
}

export function QAPersonView({ person }: PersonViewProps) {
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
      <div className="flex h-full flex-col justify-between">
        <div className="space-y-10 text-2xl sm:text-3xl md:leading-[110%]">
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

        {/* Details */}
        {/* <ul className="hidden flex-col gap-2 text-3xl leading-none lg:flex">
          <li className="flex gap-2">
            <span>Experience:</span>
            <span className="font-medium">11 years</span>
          </li>
          <li className="flex gap-2">
            <span>Domain:</span>
            <span className="font-medium">Virtual Production</span>
          </li>
          <li className="flex gap-2">
            <span>Location:</span>
            <span className="font-medium">Warsaw, PL</span>
          </li>
          <li className="flex gap-2">
            <span>Contacts:</span>
            <span className="font-medium">Linkedin</span>
          </li>
        </ul> */}
      </div>
    </Column>
  );
}

// Mobile
function MobilePersonView({ person }: PersonViewProps) {
  return (
    <StickyMobileWrapper>
      <div className="flex items-end gap-2.5 py-3 sm:gap-4 sm:py-5">
        <PersonImage
          name={person.name}
          slug={person.slug}
          classname="size-10 sm:size-[68px]"
        />

        <div className="flex flex-col gap-0.5 text-lg text-stone-50 sm:text-3xl">
          <h1 className="leading-none">
            <AccentText>{person.name}</AccentText>
          </h1>

          <div className="flex flex-col leading-[1.1] tracking-[0.02ch]">
            <h2>
              {person.jobTitle},{" "}
              <Link
                href={person.company.url}
                target="_blank"
                className="inline-block capitalize underline decoration-1 underline-offset-[2.5px] transition hover:no-underline hover:opacity-30 sm:decoration-[1.5px] sm:underline-offset-[3.5px]"
              >
                {person.company.name}
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </StickyMobileWrapper>
  );
}

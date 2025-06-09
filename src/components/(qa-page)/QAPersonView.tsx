import Link from "next/link";
import Image from "next/image";

import { AccentText } from "~/components/AccentText";
import { StickyMobileWrapper } from "~/components/Card";
import { Column } from "~/components/Column";
import { LinkedinButton } from "~/components/Buttons";

import { PersonData } from "~/schemas";

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
  const contacts = Object.entries(person.metadata.links);

  return (
    <Column variant="sticky">
      <div className="flex h-full flex-col justify-between">
        <div className="space-y-10 text-2xl sm:text-3xl md:leading-[110%]">
          <div className="space-y-5">
            <Image
              src={`/images/people/${person.slug}.jpg`}
              alt={`Image of ${person.name}`}
              width={600}
              height={600}
              className="size-60 rounded-md object-cover"
              priority
            />

            <div className="space-y-1">
              <h1>
                <AccentText>{person.name}</AccentText>
              </h1>

              {person.work.map((work, index) => (
                <div className="space-y-px" key={index}>
                  <h2>{work.title}</h2>

                  {work.url && (
                    <Link
                      href={work.url}
                      target="_blank"
                      className="inline-block capitalize underline decoration-2 underline-offset-[3.5px] transition hover:no-underline hover:opacity-30"
                    >
                      {work.company}
                    </Link>
                  )}
                </div>
              ))}
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
            <span className="underline decoration-dotted decoration-2 underline-offset-4">
              Experience:
            </span>
            <span className="">11 years</span>
          </li>
          <li className="flex gap-2">
            <span className="underline decoration-dotted decoration-2 underline-offset-4">
              Domain:
            </span>
            <span className="">Social Media Marketing</span>
          </li>
          <li className="flex gap-2">
            <span className="underline decoration-dotted decoration-2 underline-offset-4">
              Location:
            </span>
            <span className="">London, UK</span>
          </li>
          <li className="flex gap-2">
            <span className="underline decoration-dotted decoration-2 underline-offset-4">
              Contacts:
            </span>
            <span className="">Linkedin</span>
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
        <Image
          src={`/images/people/${person.slug}.jpg`}
          alt={`Image of ${person.name}`}
          width={600}
          height={600}
          className="mb-px size-[44px] rounded-xs object-cover sm:size-[68px]"
          priority
        />

        <div className="flex flex-col gap-px text-xl text-stone-50 sm:text-3xl">
          <h1 className="leading-none">
            <AccentText>{person.name}</AccentText>
          </h1>

          {person.work.map((work, index) => (
            <div
              className="flex flex-col leading-[1.1] tracking-[0.02ch]"
              key={index}
            >
              <h2>
                {work.title},{" "}
                {work.url && (
                  <Link
                    href={work.url}
                    target="_blank"
                    className="inline-block capitalize underline decoration-1 underline-offset-[2.5px] transition hover:no-underline hover:opacity-30 sm:decoration-[1.5px] sm:underline-offset-[3.5px]"
                  >
                    {work.company}
                  </Link>
                )}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </StickyMobileWrapper>
  );
}

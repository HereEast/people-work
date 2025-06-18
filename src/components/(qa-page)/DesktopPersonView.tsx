import Link from "next/link";
import Image from "next/image";

import { ButtonLink } from "~/components/Button";
import { AccentText } from "~/components/AccentText";
import { Column } from "~/components/Column";

import { PersonData } from "~/schemas";

export interface DesktopPersonViewProps {
  person: PersonData;
}

export function DesktopPersonView({ person }: DesktopPersonViewProps) {
  const { experience, domain, links } = person.metadata;

  const metadataItems = [
    { label: "Experience", value: experience },
    { label: "Domain", value: domain },
    { label: "Contacts" },
  ];

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
        </div>

        {/* Details */}
        <ul className="flex flex-col gap-2 text-3xl leading-none">
          {metadataItems.map((item) => (
            <li className="flex gap-2" key={item.label}>
              <span className="underline decoration-dotted decoration-2 underline-offset-4">
                {item.label}:
              </span>

              {item.label === "Contacts" ? (
                <ContactLinks links={links} />
              ) : (
                <span>{item.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Column>
  );
}

// Contact Links
interface ContactLinksProps {
  links: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    email?: string;
  };
}

function ContactLinks({ links }: ContactLinksProps) {
  const contacts = Object.entries(links);

  return (
    <ul className="flex gap-2">
      {contacts.map(([name, url], index) => (
        <li key={index} className="group">
          <ButtonLink
            href={url}
            variant="link"
            underline
            target="_blank"
            className="capitalize"
          >
            {name}
          </ButtonLink>

          {index < contacts.length - 1 && (
            <span className="transition group-hover:opacity-30">,</span>
          )}
        </li>
      ))}
    </ul>
  );
}

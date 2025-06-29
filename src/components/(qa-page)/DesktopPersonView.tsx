import Link from "next/link";
import Image from "next/image";

import { ButtonLink, StickyColumn } from "~/components/ui";
import { AccentText } from "~/components/AccentText";

import { PersonData } from "~/schemas";

interface PersonViewProps {
  person: PersonData;
}

export function DesktopPersonView({ person }: PersonViewProps) {
  return (
    <StickyColumn>
      <div className="flex h-full flex-col justify-between">
        <PersonViewHeader person={person} />
        <PersonViewDetails person={person} />
      </div>
    </StickyColumn>
  );
}

// Person Header
function PersonViewHeader({ person }: PersonViewProps) {
  const work = person.work[0];

  return (
    <div className="space-y-6 text-2xl sm:text-3xl md:leading-[110%]">
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

        <div className="space-y-px">
          <h2>{work.title}</h2>

          {work.url ? (
            <Link
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block capitalize underline decoration-2 underline-offset-[3.5px] transition hover:no-underline hover:opacity-30"
            >
              {work.company}
            </Link>
          ) : (
            <h2 className="inline-block">{work.company}</h2>
          )}
        </div>
      </div>
    </div>
  );
}

// Profile details
function PersonViewDetails({ person }: PersonViewProps) {
  const { experience, domain, links } = person.metadata;

  const profileInfo = [
    { label: "Experience", value: experience },
    { label: "Domain", value: domain },
    { label: "Contacts" },
  ];

  return (
    <ul className="flex flex-col gap-2 text-3xl leading-none">
      {profileInfo.map((item) => (
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
  );
}

// Contact Links
interface ContactLinksProps {
  links?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    email?: string;
    website?: string;
  };
}

function ContactLinks({ links }: ContactLinksProps) {
  if (!links) return null;

  const contacts = Object.entries(links).filter(([, url]) => url);

  return (
    <ul className="flex gap-2">
      {contacts.map(([name, url], index) => (
        <li key={name} className="group">
          <ButtonLink
            href={url}
            variant="link"
            underline
            target="_blank"
            rel="noopener noreferrer"
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

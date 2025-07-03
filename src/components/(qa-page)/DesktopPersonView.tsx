import Link from "next/link";
import Image from "next/image";

import { StickyColumn } from "~/components/ui";
import { AccentText } from "~/components/AccentText";
import { ContactLinks } from "../ContactLinks";
import { MetadataDetails } from "../MetadataDetails";

import { PersonData } from "~/schemas";

interface PersonViewProps {
  person: PersonData;
}

export function DesktopPersonView({ person }: PersonViewProps) {
  const metadata = [
    { label: "Experience", value: person.metadata.experience },
    { label: "Space", value: person.metadata.domain },
    {
      label: "Contacts",
      value: <ContactLinks links={person.metadata.links} />,
    },
  ];

  return (
    <StickyColumn>
      <div className="flex h-full flex-col justify-between">
        <PersonViewHeader person={person} />
        <MetadataDetails metadata={metadata} />
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
          <AccentText className="underline decoration-dotted decoration-[2px] underline-offset-[4px]">
            {person.name}
          </AccentText>
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

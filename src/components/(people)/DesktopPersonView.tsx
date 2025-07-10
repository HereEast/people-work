import Link from "next/link";
import Image from "next/image";

import { StickyColumn } from "~/components/ui";
import { AccentText } from "~/components/AccentText";
import { ContactLinks } from "~/components/ContactLinks";
import { MetadataDetails } from "~/components/MetadataDetails";

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

  const isFreelance =
    work.company === "freelance" || work.company === "self-employed";

  const altText = isFreelance
    ? `${person.name}, ${work.title}`
    : `${person.name}, ${work.title} at ${work.company}`;

  return (
    <div className="space-y-6 text-2xl sm:text-3xl md:leading-[110%]">
      <Image
        src={`/images/people/${person.slug}.jpg`}
        alt={altText}
        width={600}
        height={600}
        className="size-60 rounded-md object-cover"
        priority
      />

      <div className="space-y-1">
        <h3>
          <AccentText className="underline decoration-dotted decoration-2 underline-offset-4">
            {person.name}
          </AccentText>
        </h3>

        <div className="space-y-px">
          <h4>{work.title}</h4>

          {work.url ? (
            <h4 className="inline-block capitalize">
              <Link
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2 underline-offset-[3.5px] transition hover:no-underline hover:opacity-30"
              >
                {work.company}
              </Link>
            </h4>
          ) : (
            <h4 className="inline-block">{work.company}</h4>
          )}
        </div>
      </div>
    </div>
  );
}

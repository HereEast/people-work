import Link from "next/link";
import Image from "next/image";

import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { StickyColumn } from "~/components/ui";
import { AccentText } from "~/components/AccentText";
import { ContactLinks } from "~/components/ContactLinks";
import { MetadataDetails } from "~/components/MetadataDetails";

import { PersonData } from "~/schemas";
import { getAttributeDescription } from "~/utils/handlers";

interface PersonViewProps {
  person: PersonData;
}

export function DesktopPersonView({ person }: PersonViewProps) {
  const year = new Date().getFullYear();
  const createdAtYear = new Date(person.createdAt).getFullYear();

  const yearsOfExperienceDB = parseInt(person.metadata.experience);
  const yearsOfExperience = year - createdAtYear + yearsOfExperienceDB;

  const metadata = [
    {
      label: "Experience",
      value: `${yearsOfExperience} years`,
    },
    { label: "Space", value: person.metadata.domain },
    {
      label: "Contacts",
      value: <ContactLinks links={person.metadata.links} />,
    },
  ];

  return (
    <StickyColumn>
      <div className="flex h-full flex-col justify-between">
        <h1 id="person-heading" className="sr-only">
          {`What does a ${person.work.title} actually do? Real experience from ${person.name}`}
        </h1>

        <PersonViewHeader person={person} />
        <MetadataDetails metadata={metadata} />
      </div>
    </StickyColumn>
  );
}

// Person Header
function PersonViewHeader({ person }: PersonViewProps) {
  const work = person.work;

  const altText = getAttributeDescription(person, "alt");

  return (
    <div className="space-y-6 text-2xl sm:text-3xl md:leading-[110%]">
      {/* Image */}
      <div className="relative size-60 overflow-hidden rounded-md">
        <ImagePlaceholder />
        <Image
          src={`/images/people/${person.slug}.jpg`}
          alt={altText}
          width={600}
          height={600}
          className="relative object-cover"
          priority
        />
      </div>

      <div className="space-y-1">
        <h2>
          <AccentText className="underline decoration-dotted decoration-2 underline-offset-4">
            {person.name}
          </AccentText>
        </h2>

        <div className="space-y-px">
          <h3>{work.title}</h3>

          {work.url ? (
            <h3 className="inline-block capitalize">
              <Link
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2 underline-offset-[3.5px] transition hover:no-underline hover:opacity-30"
                aria-label={`Visit ${work.company} website`}
              >
                {work.company}
              </Link>
            </h3>
          ) : (
            <h3 className="inline-block">{work.company}</h3>
          )}
        </div>
      </div>
    </div>
  );
}

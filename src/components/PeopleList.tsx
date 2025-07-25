import Image from "next/image";
import Link from "next/link";

import { ImagePlaceholder } from "./ui/ImagePlaceholder";
import { GoToButton } from "./ui";
import { PersonData } from "~/schemas";
import { getAttributeDescription } from "~/utils/handlers";

interface PeopleListProps {
  people: PersonData[];
}

export function PeopleList({ people }: PeopleListProps) {
  // Filter out isHidden = WIP people
  const filteredPeople = people.filter((person) => !person.isHidden);

  return (
    <ul>
      {filteredPeople.map((person) => (
        <PersonListItem key={person.id} person={person} />
      ))}
    </ul>
  );
}

// Person List Item
interface PersonListItemProps {
  person: PersonData;
}

function PersonListItem({ person }: PersonListItemProps) {
  const ariaText = getAttributeDescription(person, "aria");

  return (
    <li className="group border-t border-stone-900/15 px-px last:border-b">
      <Link
        href={`/people/${person.slug}`}
        className="grid w-full grid-cols-2 items-center gap-6 py-4 transition sm:grid-cols-[1fr_1fr_auto] lg:grid-cols-[2fr_2fr_auto] lg:gap-10 xl:grid-cols-[1.5fr_2fr_0.8fr_auto]"
        aria-label={ariaText}
      >
        <PersonView person={person} />
        <PersonJob title={person.work.title} company={person.work.company} />

        <CompanyDomain domain={person.metadata.domain} />

        <div className="hidden sm:block">
          <GoToButton className="group-hover:bg-stone-600/25" />
        </div>
      </Link>
    </li>
  );
}

// Image and Name
interface PersonViewProps {
  person: PersonData;
}

function PersonView({ person }: PersonViewProps) {
  const altText = getAttributeDescription(person, "alt");

  return (
    <div className="flex items-center gap-3 sm:gap-6">
      <div className="relative size-10 shrink-0 overflow-hidden rounded-xs sm:size-14 sm:rounded-sm">
        <ImagePlaceholder />

        <Image
          src={`/images/people/${person.slug}.jpg`}
          alt={altText}
          width={200}
          height={200}
          className="relative object-cover transition group-hover:opacity-30"
          priority
        />
      </div>

      <h4 className="text-xl font-semibold leading-[105%] transition group-hover:opacity-30 sm:text-3xl lg:truncate lg:text-nowrap">
        {person.name}
      </h4>
    </div>
  );
}

// Image and Name
interface PersonJobProps {
  title: string;
  company: string;
}

function PersonJob({ title, company }: PersonJobProps) {
  return (
    <div className="grid lg:grid-cols-[1.5fr_1fr] lg:gap-10">
      <h4 className="truncate text-lg leading-[120%] transition group-hover:opacity-40 sm:text-2xl">
        {title}
      </h4>

      <h4 className="truncate text-lg leading-[120%] transition group-hover:opacity-40 sm:text-2xl">
        {company}
      </h4>
    </div>
  );
}

// Domain
interface CompanyDomainProps {
  domain: string;
}

function CompanyDomain({ domain }: CompanyDomainProps) {
  return (
    <div className="hidden truncate transition group-hover:opacity-40 sm:text-2xl xl:block">
      <h4 className="truncate">{domain}</h4>
    </div>
  );
}

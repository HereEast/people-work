import Image from "next/image";
import Link from "next/link";

import { GoToPseudoButton } from "./ui";
import { PersonData } from "~/schemas";

interface PeopleListProps {
  people: PersonData[];
}

export function PeopleList({ people }: PeopleListProps) {
  return (
    <ul>
      {people.map((person) => (
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
  const work = person.work[0];

  return (
    <li className="group border-t border-stone-900/15 px-1 last:border-b">
      <Link
        href={`/people/${person.slug}`}
        className="grid w-full grid-cols-2 items-center gap-6 py-4 transition sm:grid-cols-[1fr_1fr_auto] lg:grid-cols-[2fr_2fr_auto] lg:gap-10 xl:grid-cols-[1.5fr_2fr_0.8fr_auto]"
      >
        <PersonView name={person.name} slug={person.slug} />
        <PersonJob title={work.title} company={work.company} />

        <CompanyDomain domain={person.metadata.domain} />

        <div className="hidden sm:block">
          <GoToPseudoButton className="group-hover:bg-stone-600/25" />
        </div>
      </Link>
    </li>
  );
}

// Image and Name
interface PersonViewProps {
  name: string;
  slug: string;
}

function PersonView({ name, slug }: PersonViewProps) {
  return (
    <div className="flex items-center gap-3 sm:gap-6">
      <Image
        src={`/images/people/${slug}.jpg`}
        alt={`Image of ${name}`}
        width={200}
        height={200}
        className="size-10 rounded-xs object-cover transition group-hover:opacity-30 sm:size-14 sm:rounded-sm"
        priority
      />

      <h3 className="text-xl font-semibold leading-[100%] transition group-hover:opacity-30 sm:text-3xl lg:truncate lg:text-nowrap">
        {name}
      </h3>
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
      <h5 className="truncate">{domain}</h5>
    </div>
  );
}

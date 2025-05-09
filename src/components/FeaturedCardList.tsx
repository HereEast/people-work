import Link from "next/link";

import { FeaturedCardWrapper } from "./FeaturedCardWrapper";
import { PersonImage } from "./PersonImage";
import { AccentText } from "./AccentText";
import { QuoteIcon } from "./icons/QuoteIcon";

import { PersonData } from "~/schemas";
import { getFeaturedAnswer } from "~/api-client/answers";

// Featured list
interface FeaturedCardListProps {
  people: PersonData[];
}

export function FeaturedCardList({ people }: FeaturedCardListProps) {
  return (
    <div className="gap-2 sm:columns-2 md:gap-6">
      {people.map((person, index) => (
        <div className="mb-2 break-inside-avoid md:mb-6" key={index}>
          <FeaturedCard person={person} />
        </div>
      ))}
    </div>
  );
}

// Featured card
interface FeaturedCardProps {
  person: PersonData;
}

export async function FeaturedCard({ person }: FeaturedCardProps) {
  const featuredAnswer = await getFeaturedAnswer(person.id);

  if (!featuredAnswer) {
    return null;
  }

  return (
    <FeaturedCardWrapper slug={person.slug}>
      <Link href={`/people/${person.slug}`} className="block p-6 md:p-8">
        <div className="mb-10 space-y-5">
          <div className="size-8">
            <QuoteIcon />
          </div>
          <p className="text-xl font-medium leading-[115%] md:text-4xl md:leading-[115%]">
            {featuredAnswer?.answer}
          </p>
        </div>

        <div className="flex items-end gap-3 sm:gap-6">
          <PersonImage
            name={person.name}
            slug={person.slug}
            classname="size-[70px] md:size-24"
          />

          <div className="flex flex-col">
            <span className="text-lg font-medium leading-[110%] md:text-xl md:leading-[110%]">
              {`${person.jobTitle} at ${person.company.name}`}
            </span>
            <AccentText size="s">{person.name}</AccentText>
          </div>
        </div>
      </Link>
    </FeaturedCardWrapper>
  );
}

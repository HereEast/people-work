import Link from "next/link";

import { FeaturedCardWrapper } from "./Card";
import { PersonCardDetails } from "./PersonCardDetails";
import { QuoteIcon } from "./icons/QuoteIcon";

import { PersonData } from "~/schemas";
import { getFeaturedAnswer } from "~/api-client/answers";

// Featured list
interface FeaturedCardListProps {
  people: PersonData[];
}

export function FeaturedList({ people }: FeaturedCardListProps) {
  return (
    <div className="gap-2 md:columns-2 md:gap-4">
      {people.map((person, index) => (
        <div className="mb-2 break-inside-avoid md:mb-4" key={index}>
          <FeaturedPersonCard person={person} />
        </div>
      ))}
    </div>
  );
}

// Featured card
interface FeaturedPersonCardProps {
  person: PersonData;
}

export async function FeaturedPersonCard({ person }: FeaturedPersonCardProps) {
  const featuredAnswer = await getFeaturedAnswer(person.id);

  if (!featuredAnswer) {
    return null;
  }

  return (
    <FeaturedCardWrapper slug={person.slug}>
      <Link href={`/people/${person.slug}`} className="block p-6 sm:p-10">
        <div className="mb-10 space-y-5 sm:mb-10">
          <QuoteIcon className="size-8" />

          <p className="text-3xl font-semibold leading-[100%] tracking-[-0.04ch] sm:text-3xl sm:leading-[110%]">
            {featuredAnswer?.answer}
          </p>
        </div>

        <PersonCardDetails person={person} />
      </Link>
    </FeaturedCardWrapper>
  );
}

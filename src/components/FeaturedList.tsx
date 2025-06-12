import Link from "next/link";

import { PersonCardDetails } from "./PersonCardDetails";
import { FeaturedCardWrapper } from "./FeaturedCardWrapper";
import { QuoteIcon } from "./icons";

import { PersonData } from "~/schemas";
import { getFeaturedAnswer } from "~/_lib";

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
  const featuredAnswer = await getFeaturedAnswer(person.slug);

  if (!featuredAnswer) {
    return null;
  }

  return (
    <FeaturedCardWrapper slug={person.slug}>
      <Link href={`/people/${person.slug}`} className="block p-6 sm:p-10">
        <div className="mb-8 space-y-5 lg:mb-10">
          <QuoteIcon />

          <p className="text-3xl font-semibold leading-[95%] tracking-[-0.02ch] sm:text-4xl sm:leading-[100%]">
            {featuredAnswer?.answer}
          </p>
        </div>

        <PersonCardDetails person={person} />
      </Link>
    </FeaturedCardWrapper>
  );
}

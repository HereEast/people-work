import Link from "next/link";

import { PersonImage } from "./PersonImage";
import { QuoteIcon } from "./icons/QuoteIcon";

import { PersonData } from "~/schemas";
import {
  // getAnswersByPersonSlug,
  getFeaturedAnswer,
} from "~/api-client/answers";
import { AccentText } from "./AccentText";

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

// const answers = await getAnswersByPersonSlug(person.slug);
// const featuredAnswer = answers?.find((a) => a.featured);

export async function FeaturedCard({ person }: FeaturedCardProps) {
  const featuredAnswer = await getFeaturedAnswer(person.id);

  if (!featuredAnswer) {
    return null;
  }

  return (
    <div className="rounded-2xl bg-stone-100 p-6 transition hover:bg-stone-100/50 md:p-8">
      <Link href={`/people/${person.slug}`}>
        <div className="mb-10 space-y-5">
          <div className="size-8">
            <QuoteIcon />
          </div>
          <p className="text-2xl font-medium leading-[115%] md:text-4xl md:leading-[115%]">
            {featuredAnswer?.answer}
          </p>
        </div>

        <div className="flex items-end gap-3 sm:gap-6">
          <div className="size-[70px] shrink-0 overflow-hidden rounded-md md:size-24">
            <PersonImage name={person.name} slug={person.slug} />
          </div>

          <div className="flex flex-col md:gap-1">
            <span className="text-lg font-medium leading-[110%] md:text-xl md:leading-[110%]">
              {`${person.jobTitle} at ${person.company.name}`}
            </span>
            <AccentText size="s">{person.name}</AccentText>
          </div>
        </div>
      </Link>
    </div>
  );
}

import Link from "next/link";

import { FeaturedCard } from "./FeaturedCard";
import { PersonImage } from "./PersonImage";
import { AccentText } from "./AccentText";
import { QuoteIcon } from "./icons/QuoteIcon";

import { PersonData } from "~/schemas";
import { getFeaturedAnswer } from "~/api-client/answers";

// Featured list
interface FeaturedCardListProps {
  people: PersonData[];
}

export function FeaturedList({ people }: FeaturedCardListProps) {
  return (
    <div className="gap-2 sm:columns-2 md:gap-4">
      {people.map((person, index) => (
        <div className="mb-2 break-inside-avoid md:mb-4" key={index}>
          <FeaturedPersonItem person={person} />
        </div>
      ))}
    </div>
  );
}

// Featured card
interface FeaturedCardProps {
  person: PersonData;
}

export async function FeaturedPersonItem({ person }: FeaturedCardProps) {
  const featuredAnswer = await getFeaturedAnswer(person.id);

  if (!featuredAnswer) {
    return null;
  }

  const data = [person.jobTitle, person.company.name];

  return (
    <FeaturedCard slug={person.slug}>
      <Link href={`/people/${person.slug}`} className="block p-6 md:p-8">
        <div className="mb-10 space-y-5">
          <div className="size-8">
            <QuoteIcon />
          </div>
          <p className="text-3xl font-medium leading-[105%] md:text-4xl md:leading-[115%]">
            {featuredAnswer?.answer}
          </p>
        </div>

        <div className="flex items-end gap-3 sm:gap-5">
          <PersonImage
            name={person.name}
            slug={person.slug}
            classname="md:size-24"
          />

          <div className="flex flex-col sm:gap-0.5">
            <AccentText size="s">{person.name}</AccentText>

            <div className="flex flex-col">
              {data.map((item, index) => (
                <span
                  key={index}
                  className="text-lg font-medium leading-[105%] md:text-xl md:leading-[110%]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </FeaturedCard>
  );
}

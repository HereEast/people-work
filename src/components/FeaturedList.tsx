import Link from "next/link";

import { PersonCardDetails } from "./PersonCardDetails";
import { Card } from "./Card";
import { QuoteIcon } from "./icons/QuoteIcon";

import { PersonData } from "~/schemas";
import { ALL_SLUGS } from "~/utils/data";
import { getAttributeDescription } from "~/utils/handlers";

// Featured list
interface FeaturedCardListProps {
  people: PersonData[];
}

export function FeaturedList({ people }: FeaturedCardListProps) {
  const mid = Math.ceil(people.length / 2);

  const columnOne = people.slice(0, mid);
  const columnTwo = people.slice(mid);

  return (
    <>
      <div className="md:hidden">
        <ul className="space-y-2">
          {people.map((person) => (
            <li key={person.id}>
              <FeaturedCard person={person} />
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden grid-cols-2 gap-4 md:grid">
        <ul
          className="grid h-fit grid-cols-1 gap-4"
          aria-label="Featured professionals and insights"
        >
          {columnOne.map((person) => (
            <li key={person.id}>
              <FeaturedCard person={person} />
            </li>
          ))}
        </ul>

        <ul
          className="grid h-fit grid-cols-1 gap-4"
          aria-label="Featured professionals and insights"
        >
          {columnTwo.map((person) => (
            <li key={person.id}>
              <FeaturedCard person={person} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// Featured card
interface FeaturedCardProps {
  person: PersonData;
}

export async function FeaturedCard({ person }: FeaturedCardProps) {
  const { featuredAnswer } = person.metadata;

  if (!featuredAnswer) {
    return null;
  }

  const featuredItem = ALL_SLUGS.find((item) => item.slug === person.slug);
  const featuredId = featuredItem?.id || 0;

  const ariaText = getAttributeDescription(person, "aria");

  return (
    <Card
      className="transition duration-300 hover:brightness-[0.95] hover:saturate-[1.2]"
      style={{ backgroundColor: `var(--featured-${featuredId})` }}
    >
      <Link
        href={`/people/${person.slug}`}
        className="block min-w-0 p-6 sm:p-10"
        aria-label={ariaText}
      >
        <article>
          <div className="mb-8 space-y-5 lg:mb-10">
            <QuoteIcon />

            <h3 className="text-2xl font-semibold leading-[102%] sm:text-4xl sm:tracking-[0.005ch]">
              {featuredAnswer}
            </h3>
          </div>

          <PersonCardDetails person={person} />
        </article>
      </Link>
    </Card>
  );
}

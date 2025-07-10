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
  return (
    <ul
      className="columns-1 gap-4 md:columns-2"
      aria-label="Featured professionals and their insights"
    >
      {people.map((person) => (
        <li className="mb-4 break-inside-avoid" key={person.id}>
          <FeaturedCard person={person} />
        </li>
      ))}
    </ul>
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
        className="block p-6 sm:p-10"
        aria-label={ariaText}
      >
        <article>
          <div className="mb-8 space-y-5 lg:mb-10">
            <QuoteIcon />

            <h3 className="text-3xl font-semibold leading-[98%] sm:text-4xl">
              {featuredAnswer}
            </h3>
          </div>

          <PersonCardDetails person={person} />
        </article>
      </Link>
    </Card>
  );
}

import Link from "next/link";

import { PersonCardDetails } from "./PersonCardDetails";
import { Card } from "./Card";
import { QuoteIcon } from "./icons";

import { PersonData } from "~/schemas";
import { ALL_SLUGS } from "~/utils/data";

// Featured list
interface FeaturedCardListProps {
  people: PersonData[];
}

export function FeaturedList({ people }: FeaturedCardListProps) {
  return (
    <div className="columns-1 gap-4 md:columns-2">
      {people.map((person) => (
        <div className="mb-4 break-inside-avoid" key={person.id}>
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
  const { featuredAnswer } = person.metadata;

  if (!featuredAnswer) {
    return null;
  }

  const featuredItem = ALL_SLUGS.find((item) => item.slug === person.slug);
  const featuredId = featuredItem?.id || 0;

  return (
    <Card
      className="transition duration-300 hover:brightness-[0.95] hover:saturate-[1.2]"
      style={{ backgroundColor: `var(--featured-${featuredId})` }}
    >
      <Link href={`/people/${person.slug}`} className="block p-6 sm:p-10">
        <div className="mb-8 space-y-5 lg:mb-10">
          <QuoteIcon />

          <p className="text-3xl font-semibold leading-[98%] tracking-[-0.01ch] sm:text-4xl sm:leading-[102%]">
            {featuredAnswer}
          </p>
        </div>

        <PersonCardDetails person={person} />
      </Link>
    </Card>
  );
}

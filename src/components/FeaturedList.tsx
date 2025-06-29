import Link from "next/link";

import { PersonCardDetails } from "./PersonCardDetails";
import { Card } from "./Card";
import { QuoteIcon } from "./icons";

import { PersonData } from "~/schemas";
import { FEATURED } from "~/utils/data";
import { cn } from "~/utils/handlers";

// Featured list
interface FeaturedCardListProps {
  people: PersonData[];
}

export function FeaturedList({ people }: FeaturedCardListProps) {
  return (
    <div className="md:columns-2 md:gap-4">
      {people.map((person, index) => (
        <div className="mb-2 break-inside-avoid md:mb-4" key={index}>
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

  const featuredItem = FEATURED.find((item) => item.slug === person.slug);
  const featuredId = featuredItem?.id || 0;

  return (
    <Card className={cn(`featured-card featured-card-${featuredId}`)}>
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

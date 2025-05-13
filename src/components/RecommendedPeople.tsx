import { FeaturedList } from "./FeaturedList";

import { getPeople } from "~/api-client/people";
import { cn, getFeaturedSlugs } from "~/utils/handlers";

interface RecommendedPeopleProps {
  slug?: string;
  className?: string;
}

export async function RecommendedPeople({
  slug,
  className = "",
}: RecommendedPeopleProps) {
  const recommendedSlugs = getFeaturedSlugs(2, slug);
  const recommendedPeople = await getPeople(recommendedSlugs);

  if (!recommendedPeople) {
    return null;
  }

  return (
    <div className={cn(className)}>
      <div className="mb-10">
        <h2 className="text-center text-2xl font-medium md:text-4xl">
          Check other cool people
        </h2>
      </div>

      {recommendedPeople && <FeaturedList people={recommendedPeople} />}
    </div>
  );
}

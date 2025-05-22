import { FeaturedList } from "./FeaturedList";

import { getPeople } from "~/api-client/people";
import { cn, getFeaturedSlugs } from "~/utils/handlers";

interface RecommendedPeopleProps {
  slug?: string;
  className?: string;
}

export async function RecommendedSection({
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
      <div className="mb-8">
        <h2 className="text-center text-xl font-medium md:text-3xl">
          Check other cool people
        </h2>
      </div>

      {recommendedPeople && <FeaturedList people={recommendedPeople} />}
    </div>
  );
}

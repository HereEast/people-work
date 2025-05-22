import { FeaturedList } from "./FeaturedList";

import { getPeople } from "~/api-client/people";
import { getFeaturedSlugs } from "~/utils/handlers";

interface RecommendedPeopleProps {
  slug?: string;
}

export async function RecommendedSection({ slug }: RecommendedPeopleProps) {
  const recommendedSlugs = getFeaturedSlugs(2, slug);
  const recommendedPeople = await getPeople(recommendedSlugs);

  if (!recommendedPeople) {
    return null;
  }

  return (
    <div className="space-y-8">
      <h2 className="text-center text-xl font-medium sm:text-3xl">
        Check other cool people
      </h2>

      {recommendedPeople && <FeaturedList people={recommendedPeople} />}
    </div>
  );
}

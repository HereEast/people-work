import { getPeople } from "~/_lib";
import { FeaturedList } from "./FeaturedList";

import { getFeaturedSlugs } from "~/utils/handlers";

interface RecommendedPeopleProps {
  slug: string;
}

export async function RecommendedSection({ slug }: RecommendedPeopleProps) {
  const slugs = getFeaturedSlugs({
    listType: "all",
    maxCount: 2,
    excludeSlugs: [slug],
  });

  const recommendedPeople = await getPeople(slugs);

  if (!recommendedPeople) {
    return null;
  }

  return (
    <section className="space-y-8" aria-labelledby="recommended-heading">
      <h2
        id="recommended-heading"
        className="text-center text-xl font-medium sm:text-3xl sm:font-normal"
      >
        Check other cool people
      </h2>

      {recommendedPeople && <FeaturedList people={recommendedPeople} />}
    </section>
  );
}

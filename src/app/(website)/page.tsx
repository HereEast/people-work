import { HeroSection } from "~/components/(home)";
import { FeaturedList } from "~/components/FeaturedList";
import { SubscribeSection } from "~/components/SubscribeSection";

import { getFeaturedSlugs } from "~/utils/handlers";
import { getPeople } from "~/_lib";
import { EXCLUDED_PEOPLE } from "~/utils/constants";

export default async function HomePage() {
  const featuredSlugs = getFeaturedSlugs(null, EXCLUDED_PEOPLE);
  const featuredPeople = await getPeople(featuredSlugs);

  return (
    <div>
      <HeroSection />

      {featuredPeople && (
        <div className="mb-20">
          <FeaturedList people={featuredPeople} />
        </div>
      )}

      <div className="mx-auto my-16 max-w-screen-sm">
        <SubscribeSection />
      </div>
    </div>
  );
}

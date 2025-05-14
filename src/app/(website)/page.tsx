import { PageContainer } from "~/components/PageContainer";
import { Hero } from "~/components/(pages)/(home)";
import { FeaturedList } from "~/components/FeaturedList";
import { Subscribe } from "~/components/Subscribe";

import { getFeaturedSlugs } from "~/utils/handlers";
import { getPeople } from "~/api-client/people";

export default async function HomePage() {
  const featuredSlugs = getFeaturedSlugs();
  const featuredPeople = await getPeople(featuredSlugs);

  return (
    <PageContainer>
      <Hero />

      {featuredPeople && (
        <div className="mb-20">
          <FeaturedList people={featuredPeople} />
        </div>
      )}

      <div className="my-20">
        <Subscribe />
      </div>
    </PageContainer>
  );
}

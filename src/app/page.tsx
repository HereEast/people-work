// export const dynamic = "force-dynamic";

import { PageContainer } from "~/components/PageContainer";
import { Hero } from "~/components/(pages)/(home)";
// import { FeaturedCardList } from "~/components/FeaturedCardList";
import { Subscribe } from "~/components/Subscribe";

import { featuredSlugs } from "~/utils/data/featured";
import { getPeople } from "~/api-client/people";

export default async function HomePage() {
  const featuredPeople = await getPeople(featuredSlugs);

  return (
    <PageContainer>
      <Hero />

      {/* {featuredPeople && (
        <div className="my-20">
          <FeaturedCardList people={featuredPeople} />
        </div>
      )} */}

      <div className="my-20">
        <Subscribe />
      </div>
    </PageContainer>
  );
}

import { PageContainer } from "~/components/PageContainer";
import { Hero } from "~/components/(pages)/(home)";
import { FeaturedCardList } from "~/components/FeaturedCard";
import { Subscribe } from "~/components/Subscribe";

import { getPeople } from "~/api-client/people";

// Get people who are currently featured by ids/slugs

export const featuredSlugs = [
  "margo-laz",
  "dennis-lazard",
  "ivan-baranov",
  "lara-simonova",
];

export default async function HomePage() {
  const featuredPeople = await getPeople(featuredSlugs);

  return (
    <PageContainer>
      <Hero />

      {featuredPeople && (
        <div className="my-20">
          <FeaturedCardList people={featuredPeople} />
        </div>
      )}

      <div className="my-20">
        <Subscribe />
      </div>
    </PageContainer>
  );
}

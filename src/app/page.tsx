import { PageContainer } from "~/components/PageContainer";
import { Hero } from "~/components/(pages)/(home)";
import { FeaturedCardList } from "~/components/FeaturedCard";
import { Subscribe } from "~/components/Subscribe";

import { getPeople, getPerson } from "~/api-client/people";
import { notFound } from "next/navigation";

// Get people who are currently featured by ids/slugs

export const featuredSlugs = [
  "margo-laz",
  "dennis-lazard",
  "ivan-baranov",
  "lara-simonova",
];

export default async function HomePage() {
  const featuredPeople = await getPeople();
  // const featuredPeople = await Promise.all(
  //   featuredSlugs.map(async (slug) => {
  //     const person = await getPerson(slug);
  //     return person;
  //   }),
  // );

  if (!featuredPeople) {
    notFound();
  }

  return (
    <PageContainer>
      <Hero />

      <div className="my-20">
        <FeaturedCardList people={featuredPeople} />
      </div>

      <div className="my-20">
        <Subscribe />
      </div>
    </PageContainer>
  );
}

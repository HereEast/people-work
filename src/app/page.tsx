import { PageWrapper } from "~/components/PageWrapper";
import { Hero } from "~/components/(pages)/(home)";
import { FeaturedList } from "~/components/FeaturedList";
import { Subscribe } from "~/components/Subscribe";

import { getFeaturedSlugs } from "~/utils/handlers";
import { getPeople } from "~/api-client/people";

export default async function HomePage() {
  const featuredSlugs = getFeaturedSlugs();
  const featuredPeople = await getPeople(featuredSlugs);

  return (
    <PageWrapper>
      <section className="my-8 sm:my-12">
        <Hero />
      </section>

      {featuredPeople && (
        <section className="mb-20">
          <FeaturedList people={featuredPeople} />
        </section>
      )}

      <section className="mx-auto my-16 max-w-[640px]">
        <Subscribe />
      </section>
    </PageWrapper>
  );
}

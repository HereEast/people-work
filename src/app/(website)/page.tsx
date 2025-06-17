import { PageWrapper } from "~/components/PageWrapper";
import { HeroSection } from "~/components/(home)";
import { FeaturedList } from "~/components/FeaturedList";
import { SubscribeSection } from "~/components/SubscribeSection";

import { getFeaturedSlugs } from "~/utils/handlers";
import { getPeople } from "~/_lib";

export default async function HomePage() {
  const featuredSlugs = getFeaturedSlugs();
  const featuredPeople = await getPeople(featuredSlugs);

  return (
    <PageWrapper>
      <HeroSection />

      {/* 
      {featuredPeople && (
        <section className="mb-20">
          <FeaturedList people={featuredPeople} />
        </section>
      )} */}

      <section className="mx-auto my-16 max-w-screen-sm">
        <SubscribeSection />
      </section>
    </PageWrapper>
  );
}

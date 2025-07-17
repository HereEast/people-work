import { HeroSection } from "~/components/(home)/HeroSection";
import { FeaturedList } from "~/components/FeaturedList";
import { PeopleList } from "~/components/PeopleList";
import { SubscribeSection } from "~/components/SubscribeSection";

import { getFeaturedSlugs } from "~/utils/handlers";
import { getPeople } from "~/_lib";
import { ButtonLink } from "~/components/ui";
import { ROUTE } from "~/utils/constants";

const MAX_PEOPLE_COUNT = 10;

export default async function HomePage() {
  const featuredSlugs = getFeaturedSlugs({ listType: "featured" });
  const people = await getPeople();

  const featuredPeople = featuredSlugs
    .map((slug) => people?.find((person) => person.slug === slug))
    .filter((person) => person !== undefined);

  const peopleList = people
    ?.filter(
      (person) => !person.isHidden && !featuredSlugs.includes(person.slug),
    )
    .slice(0, MAX_PEOPLE_COUNT);

  return (
    <div>
      <HeroSection />

      {/* Featured People */}
      {featuredPeople && (
        <section className="mb-20" aria-labelledby="featured-heading">
          <h2 id="featured-heading" className="sr-only">
            Featured Professionals
          </h2>

          <FeaturedList people={featuredPeople} />
        </section>
      )}

      {/* 10 People (not featured) */}
      {peopleList && (
        <section className="mb-20" aria-labelledby="people-heading">
          <h2 id="people-heading" className="sr-only">
            All Professionals
          </h2>

          <div className="space-y-6">
            <PeopleList people={peopleList} />

            <ButtonLink
              href={ROUTE.people}
              className="h-16 w-full rounded-md pb-px text-xl tracking-[0.04ch] sm:h-24 sm:rounded-lg sm:text-3xl"
            >
              View All
            </ButtonLink>
          </div>
        </section>
      )}

      <div className="mx-auto my-16 max-w-screen-sm">
        <SubscribeSection />
      </div>
    </div>
  );
}

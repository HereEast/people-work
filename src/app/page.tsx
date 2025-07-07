import { HeroSection } from "~/components/(home)/HeroSection";
import { FeaturedList } from "~/components/FeaturedList";
import { PeopleList } from "~/components/PeopleList";
import { SubscribeSection } from "~/components/SubscribeSection";
import { Admin } from "~/components/(admin)/Admin";

import { getFeaturedSlugs } from "~/utils/handlers";
import { getPeople } from "~/_lib";
import { ButtonLink } from "~/components/ui";
import { ROUTE } from "~/utils/constants";

export default async function HomePage() {
  const featuredSlugs = getFeaturedSlugs({ source: "featured" });
  const people = await getPeople();

  const featuredPeople = people?.filter(
    (person) => !person.isHidden && featuredSlugs.includes(person.slug),
  );

  // Filter out isHidden = WIP people
  const peopleList = people
    ?.filter(
      (person) => !person.isHidden && !featuredSlugs.includes(person.slug),
    )
    .slice(0, 10);

  return (
    <div>
      {/* <Admin /> */}
      <HeroSection />

      {featuredPeople && (
        <div className="mb-20">
          <FeaturedList people={featuredPeople} />
        </div>
      )}

      {peopleList && (
        <div className="mb-20 space-y-6">
          <PeopleList people={peopleList} />
          <ButtonLink
            href={ROUTE.people}
            className="h-16 w-full rounded-md bg-stone-800 pb-px text-xl tracking-[0.04ch] text-stone-50 hover:bg-stone-900 sm:h-24 sm:rounded-lg sm:text-3xl"
          >
            See All
          </ButtonLink>
        </div>
      )}

      <div className="mx-auto my-16 max-w-screen-sm">
        <SubscribeSection />
      </div>
    </div>
  );
}

import { HeroSection } from "~/components/(home)";
import { FeaturedList } from "~/components/FeaturedList";
import { PeopleList } from "~/components/PeopleList";
import { SubscribeSection } from "~/components/SubscribeSection";
import { Admin } from "~/components/(admin)/Admin";

import { getFeaturedSlugs } from "~/utils/handlers";
import { getPeople } from "~/_lib";

export default async function HomePage() {
  const featuredSlugs = getFeaturedSlugs();
  const people = await getPeople();

  const featuredPeople = people?.filter((person) =>
    featuredSlugs.includes(person.slug),
  );

  const peopleList = people?.filter(
    (person) => !person.isHidden && !featuredSlugs.includes(person.slug),
  );

  return (
    <div>
      {/* <Admin /> */}
      <HeroSection />

      {/* {featuredPeople && (
        <div className="mb-20">
          <FeaturedList people={featuredPeople} />
        </div>
      )} */}

      {peopleList && (
        <div className="mb-20">
          <PeopleList people={peopleList} />
        </div>
      )}

      <div className="mx-auto my-16 max-w-screen-sm">
        <SubscribeSection />
      </div>
    </div>
  );
}

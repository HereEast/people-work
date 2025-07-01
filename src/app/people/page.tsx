import { PeopleList } from "~/components/PeopleList";
import { SubscribeSection } from "~/components/SubscribeSection";

import { getPeople } from "~/_lib";

export default async function PeoplePage() {
  const people = await getPeople();

  const peopleList = people?.filter((person) => !person.isHidden);

  return (
    <div>
      <div className="my-10">
        {peopleList && <PeopleList people={peopleList} />}
      </div>

      <div className="mx-auto my-16 max-w-screen-sm">
        <SubscribeSection />
      </div>
    </div>
  );
}

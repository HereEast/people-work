import { PeopleList } from "~/components/PeopleList";
import { SubscribeSection } from "~/components/SubscribeSection";

import { getPeople } from "~/_lib";

export default async function PeoplePage() {
  const people = await getPeople();

  return (
    <div>
      <section className="my-10" aria-labelledby="people-heading">
        <h1 id="people-heading" className="sr-only">
          All Professionals
        </h1>

        {people && <PeopleList people={people} />}
      </section>

      <div className="mx-auto my-16 max-w-screen-sm">
        <SubscribeSection />
      </div>
    </div>
  );
}

import { notFound } from "next/navigation";

import { About } from "~/components/(pages)/(home)";
import { PageContainer } from "~/components/PageContainer";
import { FeaturedCard } from "~/components/FeaturedCard";
import { Subscribe } from "~/components/Subscribe";

import { getPeople } from "~/api-client/people";

// Get people who are currently featured by ids/slugs

export default async function HomePage() {
  const people = await getPeople();

  if (!people) {
    notFound();
  }

  return (
    <PageContainer>
      <div className="my-20">
        <About />
      </div>

      <div className="mb-24 columns-2 gap-6">
        {people.map((person, index) => (
          <div className="mb-6 break-inside-avoid" key={index}>
            <FeaturedCard person={person} />
          </div>
        ))}
      </div>

      <div className="mb-20">
        <Subscribe />
      </div>
    </PageContainer>
  );
}

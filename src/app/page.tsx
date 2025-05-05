import { notFound } from "next/navigation";

import { About } from "~/components/(pages)/(home)";
import { PageContainer } from "~/components/PageContainer";
import { FeaturedCard } from "~/components/FeaturedCard";
import { Subscribe } from "~/components/Subscribe";

import { getPeople } from "~/api-client/people";

// Get people who are currently featured by ids/slugs

export default async function HomePage() {
  const featuredPeople = await getPeople();

  return (
    <PageContainer>
      <div className="mb-20 mt-10 sm:my-20">
        <About />
      </div>

      {featuredPeople && (
        <div className="mb-20 gap-2 sm:columns-2 md:gap-6">
          {featuredPeople.map((person, index) => (
            <div className="mb-2 break-inside-avoid md:mb-6" key={index}>
              <FeaturedCard person={person} />
            </div>
          ))}
        </div>
      )}

      <div className="mb-20">
        <Subscribe />
      </div>
    </PageContainer>
  );
}

import { notFound } from "next/navigation";

import { About } from "~/components/(pages)/(home)";
import { PageContainer } from "~/components/PageContainer";
import { FeaturedCard } from "~/components/FeaturedCard";
import { Subscribe } from "~/components/Subscribe";

import { getPeople } from "~/api-client/people";
import { getFeaturedAnswer } from "~/api-client/answers";

// Get people who are currently featured by ids/slugs

export default async function HomePage() {
  const featuredPeople = await getPeople();

  if (!featuredPeople) {
    notFound();
  }

  const data = await Promise.all(
    featuredPeople.map(async (person) => {
      const featuredAnswer = await getFeaturedAnswer(person.id);

      return { person, featuredAnswer };
    }),
  );

  return (
    <PageContainer>
      <div className="my-20">
        <About />
      </div>

      <div className="mb-24 columns-2 gap-6">
        {data.map(({ person, featuredAnswer }, index) => (
          <div className="mb-6 break-inside-avoid" key={index}>
            <FeaturedCard person={person} featuredAnswer={featuredAnswer} />
          </div>
        ))}
      </div>

      <div className="mb-20">
        <Subscribe />
      </div>
    </PageContainer>
  );
}

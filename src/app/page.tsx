import { PageContainer } from "~/components/PageContainer";
import { Hero } from "~/components/(pages)/(home)";
import { FeaturedCardList } from "~/components/FeaturedCardList";
import { Subscribe } from "~/components/Subscribe";

import { featuredSlugs } from "~/utils/data/featured";
import { getPeople } from "~/api-client/people";
import { getFeaturedAnswer } from "~/api-client/answers";

export default async function HomePage() {
  const featuredPeople = await getPeople(featuredSlugs);

  const featuredAnswers = featuredPeople
    ? await Promise.all(
        featuredPeople.map(async (p) => {
          return await getFeaturedAnswer(p.id);
        }),
      )
    : [];

  return (
    <PageContainer>
      <Hero />

      {featuredAnswers &&
        featuredAnswers.map((answer) => (
          <div key={answer?.id}>{answer?.answer}</div>
        ))}

      {/* {featuredPeople && (
        <div className="my-20">
          <FeaturedCardList people={featuredPeople} />
        </div>
      )} */}

      <div className="my-20">
        <Subscribe />
      </div>
    </PageContainer>
  );
}

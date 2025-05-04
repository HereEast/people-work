import { notFound } from "next/navigation";

import { About } from "~/components/(pages)/(home)";
import { PageContainer } from "~/components/PageContainer";
import { FeaturedCard } from "~/components/FeaturedCard";
import { Subscribe } from "~/components/Subscribe";

import { getPerson } from "~/api-client/people";

const featured = [
  "margo-laz",
  "dennis-lazard",
  "ivan-baranov",
  "lara-simonova",
];

export default async function HomePage() {
  // const featuredPeople = await getPeople();

  const featuredPeople = await Promise.all(
    featured.map((slug) => getPerson(slug)),
  );

  if (!featuredPeople.length) {
    notFound();
  }

  return (
    <PageContainer>
      <div className="my-20">
        <About />
      </div>

      <div className="mb-24 columns-2 gap-6">
        {featuredPeople.map((data, index) => (
          <div className="mb-6 break-inside-avoid" key={index}>
            <FeaturedCard data={data} />
          </div>
        ))}
      </div>

      <div className="mb-20">
        <Subscribe />
      </div>
    </PageContainer>
  );
}

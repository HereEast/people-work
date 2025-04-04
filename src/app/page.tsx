import { MainCards, About } from "~/components/(home)";
import { BacklogPreview } from "~/components/(backlog)";

import { PageContainer } from "~/components/PageContainer";
import { ShareForm } from "~/components/ShareForm";
import { SubscribeForm } from "~/components/SubscribeForm";

import { getPeople } from "~/api-client/people";

export default async function HomePage() {
  const people = await getPeople();

  return (
    <PageContainer>
      {people && (
        <>
          {/* Add skeletons for cards */}
          <div className="mb-16">
            <MainCards people={people} />
          </div>

          <div id="about" className="mb-20">
            <div className="w-full">
              <About />
            </div>
          </div>

          <div className="mb-10">
            <div className="mx-auto w-full max-w-4xl">
              <ShareForm />
            </div>
          </div>

          <div className="mb-10">
            <div className="mx-auto w-full max-w-4xl">
              <SubscribeForm />
            </div>
          </div>

          <div className="mx-auto w-full max-w-4xl">
            <BacklogPreview />
          </div>
        </>
      )}
    </PageContainer>
  );
}

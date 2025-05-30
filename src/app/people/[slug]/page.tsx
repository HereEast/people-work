import { notFound } from "next/navigation";

import { PageContainer } from "~/components/PageContainer";
import { PersonPreview, Content } from "~/components/(pages)/(personQA)";

import { getPeople, getPerson } from "~/api-client/people";
import { getAnswersByPersonSlug } from "~/api-client/answers";
import { generatePersonMetadata } from "~/utils/metadata";

interface PersonPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// METADATA
export async function generateMetadata(props: PersonPageProps) {
  const params = await props.params;
  return generatePersonMetadata(params.slug);
}

// PARAMS
export async function generateStaticParams() {
  const people = await getPeople();

  return (
    people?.map((person) => ({
      slug: person.slug,
    })) || []
  );
}

// PAGE
export default async function PersonQAPage(props: PersonPageProps) {
  const params = await props.params;
  const { slug } = params;

  const person = await getPerson(slug);
  const answers = await getAnswersByPersonSlug({ slug });

  if (!person || !answers) {
    notFound();
  }

  return (
    <PageContainer className="min-h-screen w-full max-w-full justify-between gap-10 bg-stone-200/75 px-0 pt-4 sm:pt-10 lg:flex">
      <div className="mx-auto w-full space-y-16 lg:max-w-4xl">
        <div className="grid gap-6 px-2">
          <div className="sticky top-[56px] z-10 w-full overflow-hidden rounded-b-xxl bg-stone-100">
            <PersonPreview person={person} />
          </div>

          <Content data={answers} />
        </div>
      </div>
    </PageContainer>
  );
}

import { QAPage } from "~/components/layouts/QAPage";
import { getPerson } from "~/api-client/people";

interface PersonPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PersonPageProps) {
  const person = await getPerson(params.slug);

  if (person) {
    const personInfo = `${person.name}, ${person.jobTitle}`;
    const title = `${personInfo} | Job titles decoded. In a simple Q&A format.`;

    return {
      title: title,
      openGraph: {
        title: title,
      },
      twitter: {
        title: title,
      },
    };
  }
}

export default function Person({ params }: PersonPageProps) {
  return <QAPage slug={params.slug} />;
}

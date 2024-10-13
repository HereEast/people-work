import { PersonIntro } from "~/components/PersonIntro";
import { getPerson } from "~/client-api/people";

interface PersonPageProps {
  params: {
    slug: string;
  };
}

export default async function PersonPage({ params }: PersonPageProps) {
  const person = await getPerson(params.slug);

  console.log(person);

  return <div>{person && <PersonIntro person={person} />}</div>;
}

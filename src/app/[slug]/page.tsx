import { PersonPage } from "~/components/layouts/PersonPage";

interface PersonPageProps {
  params: {
    slug: string;
  };
}

export default function Person({ params }: PersonPageProps) {
  return <PersonPage slug={params.slug} />;
}

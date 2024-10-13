// import { Person } from "~/components/layouts";

interface PersonPageProps {
  params: {
    slug: string;
  };
}

export default function PersonPage({ params }: PersonPageProps) {
  return <div>{params.slug}</div>;
}

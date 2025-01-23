import { QAPage } from "~/components/layouts/QAPage";

interface PersonPageProps {
  params: {
    slug: string;
  };
}

export default function Person({ params }: PersonPageProps) {
  return <QAPage slug={params.slug} />;
}

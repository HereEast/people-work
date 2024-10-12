interface PersonPageProps {
  params: {
    slug: string;
  };
}

export default async function PersonPage({ params }: PersonPageProps) {
  return <div>Hello, {params.slug}</div>;
}

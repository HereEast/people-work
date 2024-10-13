interface PersonPageProps {
  params: {
    person: string;
  };
}

export default function PersonPage({ params }: PersonPageProps) {
  return <div>{params.person}</div>;
}

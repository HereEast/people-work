import Image from "next/image";

interface PersonImageProps {
  slug: string;
  name: string;
}

export function PersonImage({ name, slug }: PersonImageProps) {
  return (
    <Image
      src={`/images/people/${slug}.jpg`}
      alt={`Image of ${name}`}
      width={600}
      height={600}
      className="object-cover"
      priority
    />
  );
}

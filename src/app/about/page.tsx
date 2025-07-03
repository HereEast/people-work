import Image from "next/image";

import { StickyColumn } from "~/components/ui";
import { About } from "~/components/(about)/About";
import { MetadataDetails } from "~/components/MetadataDetails";
import { ContactLinks } from "~/components/ContactLinks";

import { CONTACT } from "~/utils/constants";

export default async function AboutPage() {
  const links = {
    linkedin: CONTACT.linkedin,
    email: CONTACT.email,
  };

  const metadata = [
    { label: "Name", value: "People Work" },
    { label: "Space", value: "Takeaway Archive, Media" },
    { label: "Created", value: "2025" },
    {
      label: "Contacts",
      value: <ContactLinks links={links} />,
    },
  ];

  return (
    <div className="mb-4 grid grid-cols-2 gap-4">
      <StickyColumn>
        <div className="flex h-full flex-col justify-between">
          <Image
            src={`/images/about.jpg`}
            alt="People Work image"
            width={600}
            height={600}
            className="size-60 rounded-md object-cover"
            priority
          />

          <MetadataDetails metadata={metadata} />
        </div>
      </StickyColumn>

      <div className="space-y-20 pr-10 pt-4">
        <About />
      </div>
    </div>
  );
}

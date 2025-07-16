import { ImageResponse } from "next/og";

import { getPerson } from "~/_lib";
import { PersonData } from "~/schemas";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const person = await getPerson(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* {params.slug} */}
      </div>
    ),
  );
}

export function OpenGraphImage({ person }: { person: PersonData }) {
  return (
    <div className="h-[630px] w-[1200px] bg-stone-300 p-10 font-inter">
      <div className="flex items-start justify-between">
        <div className="max-w-[700px]">
          <h1 className="text-4xl font-bold leading-[100%]">
            What does a{" "}
            <span className="underline decoration-dotted underline-offset-4">
              {person.work.title}
            </span>{" "}
            actually do?
          </h1>
        </div>
      </div>
    </div>
  );
}

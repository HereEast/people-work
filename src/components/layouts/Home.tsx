"use client";

import Link from "next/link";

import { ImageThumbnail } from "../ImageThumbnail";
import { getPerson } from "~/client-api/people";
import { useEffect, useState } from "react";
import { IPerson } from "~/utils/types";

export function Home() {
  const [margo, setMargo] = useState<IPerson | undefined>(undefined);

  useEffect(() => {
    async function fetchPerson() {
      const person = await getPerson("margo-lazarenkova");

      if (margo) {
        setMargo(person);
      }
    }

    fetchPerson();
  }, [margo]);

  const companyURL = margo?.companyURL?.startsWith("https")
    ? margo.companyURL
    : `https://${margo?.companyURL}`;

  return (
    <section className="flex items-center justify-center gap-8 sm:items-start">
      <div className="flex flex-col items-center space-y-2">
        <ImageThumbnail
          src={`/images/people/${margo?.profileImageURL}` || ""}
          alt={margo?.name || ""}
        />

        <div className="mb-2">
          <h4 className="hover:opacity-50">
            <Link href={`/people/${margo?.slug}`} className="space-y-[-10px]">
              {margo?.name.split(" ").map((item) => (
                <span
                  className="leading-0 block text-center text-5xl font-bold tracking-tighter"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </Link>
          </h4>
        </div>

        <div className="flex flex-col items-center space-y-[-5px]">
          <a
            href={companyURL}
            target="_blank"
            rel="noopener noreferrer"
            className="leading-0 underline hover:no-underline hover:opacity-50"
          >
            {margo?.company}
          </a>
          <p className="leading-0">{margo?.jobTitle}</p>
        </div>
      </div>
    </section>
  );
}

import { ImageThumbnail } from "../ImageThumbnail";
import { getPerson } from "~/client-api/people";

export async function Home() {
  const margo = await getPerson("margo-lazarenkova");

  console.log(margo);

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

        <div>
          <div className="mb-2 space-y-[-10px]">
            {margo?.name.split(" ").map((item) => (
              <h4
                className="leading-0 text-center text-5xl font-bold tracking-tighter"
                key={item}
              >
                {item}
              </h4>
            ))}
          </div>
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

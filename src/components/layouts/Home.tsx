import { ImageThumbnail } from "../ImageThumbnail";
import { getPerson } from "~/client-api/people";

export async function Home() {
  const margo = await getPerson("margo-lazarenkova");

  console.log(margo);

  return (
    <section className="flex items-center justify-center gap-8 sm:items-start">
      <div>
        <ImageThumbnail
          src={`/people/${margo?.profileImageURL}` || ""}
          alt={margo?.name || ""}
        />
      </div>
    </section>
  );
}

import { handleError } from "~/utils/handlers";

interface INameProps {
  name: string;
  link: string;
}

// SUBMIT NAME (SHARE FORM)
export async function submitName({ name, link }: INameProps) {
  if (!name || !link) {
    throw new Error("Name and link are required.");
  }

  try {
    const response = await fetch("api/names", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit answers.");
    }

    const data = await response.json();

    return data;
  } catch (err) {
    handleError(err);
  }
}

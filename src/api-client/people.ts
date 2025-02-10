import { IPerson } from "~/models/Person";
import { BASE_URL } from "~/utils/constants";

// GET PERSON BY SLUG
export async function getPerson(slug: string) {
  try {
    const response = await fetch(`${BASE_URL}/api/people/${slug}`);

    if (!response.ok) {
      throw new Error("🔴 Data fetch failed");
    }

    const person: IPerson = await response.json();

    return person;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// GET ALL PEOPLE
export async function getPeople() {
  try {
    const response = await fetch(`${BASE_URL}/api/people`);

    if (!response.ok) {
      throw new Error("🔴 Data fetch failed");
    }

    const people: IPerson[] = await response.json();

    return people;
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴 Error:", err.message);
    }

    return null;
  }
}

import { BASE_URL } from "~/utils/constants";
import { handleError } from "~/utils/handlers";
import { PersonData } from "~/schemas";

// GET PERSON BY SLUG
export async function getPerson(slug: string): Promise<PersonData | null> {
  try {
    const response = await fetch(`${BASE_URL}/api/people/${slug}`);

    if (!response.ok) {
      throw new Error("🔴 Data fetch failed");
    }

    const person = await response.json();

    return person;
  } catch (error) {
    handleError(error);

    return null;
  }
}

// GET ALL PEOPLE
export async function getPeople(): Promise<PersonData[] | null> {
  try {
    const response = await fetch(`${BASE_URL}/api/people`);

    if (!response.ok) {
      throw new Error("🔴 Data fetch failed");
    }

    const people = await response.json();

    return people;
  } catch (err) {
    handleError(err);

    return null;
  }
}

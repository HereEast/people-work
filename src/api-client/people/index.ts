import { BASE_URL } from "~/utils/constants";
import { handleError } from "~/utils/handlers";
import { AnswerBasicData, PersonData } from "~/schemas";

// GET PERSON BY SLUG
interface PersonInfo {
  person: PersonData;
  featuredAnswer: AnswerBasicData;
}

export async function getPerson(slug: string): Promise<PersonInfo | null> {
  try {
    const response = await fetch(`${BASE_URL}/api/people/${slug}`);

    if (!response.ok) {
      throw new Error("🔴 Failed to fetch a person by slug.");
    }

    const person: PersonInfo = await response.json();

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
      throw new Error("🔴 Failed to fetch all people.");
    }

    const people: PersonData[] = await response.json();

    return people;
  } catch (err) {
    handleError(err);

    return null;
  }
}

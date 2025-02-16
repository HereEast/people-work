import { IAnswer } from "~/models/Answer";
import { BASE_URL } from "~/utils/constants";

// GET ANSWERS BY PERSON SLUG
export async function getAnswersByPersonSlug(slug: string) {
  try {
    const response = await fetch(`${BASE_URL}/api/answers/person/${slug}`);

    if (!response.ok) {
      throw new Error("🔴 Data fetch failed");
    }

    const answers: IAnswer[] = await response.json();

    return answers;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// GET ANSWERS BY QUESTION SLUG
export async function getAnswersByQuestionSlug(slug: string) {
  try {
    const response = await fetch(`${BASE_URL}/api/answers/question/${slug}`);

    if (!response.ok) {
      throw new Error("🔴 Data fetch failed");
    }

    const answers: IAnswer[] = await response.json();

    return answers;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// GET ANSWERS BY SLUG ARRAY
// export async function getAnswersBySlugArray(slugs: string[]) {
//   if (!slugs.length) {
//     return [];
//   }

//   try {
//     const response = await axios.get<IAnswer[]>(`/api/answers`, {
//       params: {
//         slugs: slugs.toString(),
//       },
//     });

//     const data = response.data;

//     return data;
//   } catch (err) {
//     if (err instanceof Error) {
//       console.log("🔴", err.message);
//     }

//     return [];
//   }
// }

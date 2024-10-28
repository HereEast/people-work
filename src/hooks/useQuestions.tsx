import { useEffect, useState } from "react";

import { getQuestions } from "~/client-api/questions";
import { IQuestion } from "~/utils/types";

export function useQuestions() {
  const [data, setData] = useState<IQuestion[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setIsError(false);

      try {
        const questions = await getQuestions();

        if (questions) {
          setData(questions);
        }
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, isLoading, isError };
}

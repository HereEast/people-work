import { useEffect, useState } from "react";

import { getAnswers } from "~/api-client/answers";
import { IAnswer } from "~/utils/types";

export function useAnswers(slug: string) {
  const [data, setData] = useState<IAnswer[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setIsError(false);

      try {
        const answers = await getAnswers(slug);

        if (answers) {
          setData(answers);
        }
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  return { data, isLoading, isError };
}

import { useEffect, useState } from "react";

import { getSelectedAnswers } from "~/api-client/answers";
import { ISelectedResult } from "~/utils/types";

export function useSelectedAnswers(slugArray: string[]) {
  const [data, setData] = useState<ISelectedResult[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setIsError(false);

      try {
        const selectedAnswers = await getSelectedAnswers(slugArray);

        if (selectedAnswers) {
          setData(selectedAnswers);
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

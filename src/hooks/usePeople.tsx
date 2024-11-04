import { useEffect, useState } from "react";

import { getPeople } from "~/api-client/people";
import { IPerson } from "~/utils/types";

export function usePeople() {
  const [data, setData] = useState<IPerson[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setIsError(false);

      try {
        const data = await getPeople();

        if (data) {
          setData(data);
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

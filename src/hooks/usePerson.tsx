import { useEffect, useState } from "react";

import { getPerson } from "~/client-api/people";
import { IPerson } from "~/utils/types";

export function usePerson(slug: string) {
  const [data, setData] = useState<IPerson | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchPerson() {
      setIsLoading(true);
      setIsError(false);

      try {
        const data = await getPerson(slug);

        if (data) {
          setData(data);
        }
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPerson();
  }, [slug]);

  return { data, isLoading, isError };
}

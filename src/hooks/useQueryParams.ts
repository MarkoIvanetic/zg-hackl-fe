import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";

function useQueryParams(): {
  query: Record<string, string>;
  change: (newQuery: Record<string, string | null>) => void;
} {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Memoize the query object to avoid triggering rerenders
  const query = useMemo(() => {
    return Object.fromEntries(searchParams.entries());
  }, [searchParams]);

  // Function to update query parameters
  const change = (newQuery: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());

    // Update the params with the newQuery values
    Object.entries(newQuery).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    // Push updated query params to the router
    router.push(`?${params.toString()}`);
  };

  return { query, change };
}

export default useQueryParams;

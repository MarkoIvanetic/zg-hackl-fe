import apiClient from "@/lib/apiClient";
import { Event } from "@/types";
import { useQuery, QueryFunctionContext } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";

export type FetchEventsParams = {
  search?: string;
  event_type?: string;
  organizer_id?: string;
  min_price?: string;
  max_price?: string;
  kid_friendly?: string;
  from?: string;
  to?: string;
  order_by?: "start_datetime" | "price";
  order_direction?: "asc" | "desc";
  page?: string;
  per_page?: string;
};

type PaginatedEventsResponse = {
  total_results: number;
  total_pages: number;
  current_page: number;
  per_page: number;
  records: Event[];
};

const fetchEvents = async (
  params: FetchEventsParams = {}
): Promise<PaginatedEventsResponse> => {
  const filteredParams: Record<string, string> = {};

  console.log("params:", params);

  // Filter out undefined or empty parameters
  Object.entries(params).forEach(([key, value]) => {
    if (value && value.trim() !== "") {
      filteredParams[key] = value;
    }
  });

  const response = await apiClient.get("/events", {
    params: filteredParams,
  });

  return response.data; // Assuming API returns a paginated response
};

export const useEvents = (params: FetchEventsParams) => {
  const debouncedParams = useDebounce(params, 300); // Debounce for search input

  return useQuery<PaginatedEventsResponse, Error>({
    queryKey: ["events", debouncedParams],
    queryFn: ({ queryKey }: QueryFunctionContext) => {
      const [_key, queryParams] = queryKey as [string, FetchEventsParams];
      return fetchEvents(queryParams);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: true,
  });
};

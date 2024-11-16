import apiClient from "@/lib/apiClient";
import { Event } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";

type FetchEventsParams = {
  [key: string]: string | undefined;
};

const fetchEvents = async (
  params: FetchEventsParams = {}
): Promise<Event[]> => {
  const filteredParams: Record<string, string> = {};

  Object.entries(params).forEach(([key, value]) => {
    if (value && value.trim() !== "") {
      filteredParams[key] = value;
    }
  });

  const response = await apiClient.get("/events", {
    params: filteredParams,
  });

  return response.data;
};

export const useEvents = (search: string) => {
  return useQuery({
    queryKey: ["events", search],
    queryFn: () => fetchEvents({ search }),
    staleTime: 5 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: true,
  });
};

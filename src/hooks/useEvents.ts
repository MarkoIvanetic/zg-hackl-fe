import apiClient from "@/lib/apiClient";
import { Event } from "@/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const fetchEvents = async (search: string = ""): Promise<Event[]> => {
  const response = await apiClient.get("/events", {
    params: { search },
  });

  console.log("response:", response);
  return response.data;
};

export const useEvents = (search: string = "") => {
  return useQuery({
    queryKey: ["events", search], // Include search in query key
    queryFn: () => fetchEvents(search), // Pass search to fetch function
    staleTime: 5 * 60 * 1000, // Data considered fresh for 5 minutes
    retry: 1, // Retry failed queries once
    refetchOnWindowFocus: true, // Refetch when the window regains focus
  });
};

"use client";

import { DebouncedInput } from "@/components/features/DebouncedInput";
import { EventCard, EventCardSkeleton } from "@/components/features/EventCard";
import RefreshButton from "@/components/features/RefreshButton";
import { useEvents } from "@/hooks/useEvents";
import useQueryParams from "@/hooks/useQueryParams";

export default function EventList() {
  const { query, change } = useQueryParams();
  const search = query.search || "";

  const { data, isFetching, error, isError, refetch } = useEvents(search);

  const handleSearchChange = (value: string) => {
    change({ search: value });
  };

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <DebouncedInput
          value={search}
          onChange={handleSearchChange}
          placeholder="Search events..."
          debounceTime={300}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <RefreshButton onClick={refetch} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {isError && <p>Error loading events: {error.message}</p>}
        {isFetching && !isError
          ? Array.from({ length: 6 }).map((_, index) => (
              <EventCardSkeleton key={index} />
            ))
          : data?.map((event) => <EventCard key={event.id} event={event} />)}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { EventCardSkeleton, EventCard } from "@/components/features/EventCard";
import { useEvents } from "@/hooks/useEvents";

export default function EventList() {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError, error } = useEvents(search);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {isError && <p>Error loading events: {error.message}</p>}
        {isLoading && !isError
          ? Array.from({ length: 6 }).map((_, index) => (
              <EventCardSkeleton key={index} />
            ))
          : data?.map((event) => <EventCard key={event.id} event={event} />)}
      </div>
    </div>
  );
}

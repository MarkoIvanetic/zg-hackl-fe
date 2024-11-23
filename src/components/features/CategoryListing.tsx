"use client";

import { useEvents } from "@/hooks/useEvents";
import { EventCard, EventCardSkeleton } from "@/components/features/EventCard";
import { FC } from "react";

interface CategoryListProps {
  category: string;
}

export const CategoryListing: FC<CategoryListProps> = ({ category }) => {
  const { data, isFetching, isError, error } = useEvents({
    category: category,
    page: "1",
    per_page: "6",
  });

  if (isError) return <p className="text-red-600">Failed to load {category}: {error.message}</p>;

  return (
    <div className="mb-8 bg-sky-200 p-4 rounded-md">
      <h2 className="text-xl font-semibold mb-4">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isFetching
          ? Array.from({ length: 10 }).map((_, index) => (
              <EventCardSkeleton key={index} />
            ))
          : data?.records.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
      </div>
    </div>
  );
};

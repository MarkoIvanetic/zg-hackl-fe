"use client";

import { DebouncedInput } from "@/components/features/DebouncedInput";
import { EventCard, EventCardSkeleton } from "@/components/features/EventCard";
import { Pagination } from "@/components/features/Pagination";
import RefreshButton from "@/components/features/RefreshButton";

import { FetchEventsParams, useEvents } from "@/hooks/useEvents";
import useQueryParams from "@/hooks/useQueryParams";

const NoEventsMessage = () => (
  <div className="text-left text-gray-500">
    <p className="text-xl font-semibold">Nema događanja</p>
    <p>Molimo promijenite pretragu ili filtre.</p>
  </div>
);

export default function EventList() {
  const { query, change } = useQueryParams();

  const {
    search = "",
    event_type = "",
    min_price = "",
    max_price = "",
    kid_friendly = "",
    order_by = "start_datetime",
    order_direction = "asc",
    page = "1",
    from = "",
    to = "",
    per_page = "10",
  } = query as FetchEventsParams;

  const { data, isFetching, error, isError, refetch } = useEvents({
    search,
    event_type,
    min_price,
    max_price,
    kid_friendly,
    order_by,
    order_direction,
    page,
    from,
    to,
    per_page,
  });

  const handleSearchChange = (value: string) => {
    change({ search: value, page: null }); // Reset to first page on search change
  };

  const handlePageChange = (newPage: number) => {
    const newValue = newPage === 1 ? null : String(newPage);

    change({ page: newValue });
  };

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <DebouncedInput
          value={search}
          onChange={handleSearchChange}
          placeholder="Pretraži događanja..."
          debounceTime={300}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <RefreshButton onClick={refetch} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
        {isError && <p>Error loading events: {error.message}</p>}

        {isFetching && !isError
          ? Array.from({ length: 12 }).map((_, index) => (
              <EventCardSkeleton key={index} />
            ))
          : data?.records.length === 0 && <NoEventsMessage />}

        {!isFetching &&
          !isError &&
          data?.records.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
      </div>
      {/* @ts-expect-error total_pages definetelly defined  */}
      {data?.total_pages > 1 && !isFetching && !isError && (
        <div className="flex w-full justify-end">
          <Pagination
            totalPages={data?.total_pages || 1}
            currentPage={Number(page)}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

import SwipeCards from "@/components/features/swipe/SwipableCard";
import { fetchEvents } from "@/hooks/useEvents"; // Adjust path if necessary

import { Event } from "@/types";

// Server-side data fetching function
export default async function DiscoverPage() {
  // Fetch events data
  const events = await fetchEvents({
    page: "1",
    per_page: "50",
  });

  // Filter events to only include those with images
  const filteredEvents = events.records.filter(
    (event: Event) => !!event.image_url
  );

  return (
    <div className="min-h-[90vh] bg-neutral-100 p-4">
      <h1 className="text-3xl font-bold mb-2 text-center">Otkrij Događanja</h1>
      {filteredEvents.length > 0 ? (
        <SwipeCards events={filteredEvents} />
      ) : (
        <div className="text-center text-gray-500">
          <p className="text-xl font-semibold">Nema događanja</p>
          <p>Molimo pokušajte kasnije.</p>
        </div>
      )}
    </div>
  );
}

import EventList from "@/components/features/EventList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <Suspense>
        <EventList />
      </Suspense>
    </div>
  );
}

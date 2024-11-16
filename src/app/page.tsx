import EventList from "@/components/features/EventList";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <EventList />
    </div>
  );
}

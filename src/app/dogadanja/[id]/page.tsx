import { notFound } from "next/navigation";
import { Event } from "@/types";
import apiClient from "@/lib/apiClient";

async function fetchEventDetails(id: string): Promise<Event | null> {
  try {
    const response = await apiClient.get(`/events/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching event details:", error);
    return null;
  }
}

// @ts-expect-error no sufficient type definitions for params
export default async function EventDetailsPage({ params }) {
  const event = await fetchEventDetails(params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{event.name}</h1>
      <p className="mb-4">{event.description || "Opis nije dostupan."}</p>
      <p>
        <strong>Lokacija:</strong> {event.location}
      </p>
      <p>
        <strong>Vrsta:</strong> {event.category}
      </p>
      <p>
        <strong>Cijena:</strong> {event.price} kn
      </p>
      <p>
        <strong>Datum:</strong>{" "}
        {new Date(event.start_datetime).toLocaleDateString()} -{" "}
        {new Date(event.end_datetime).toLocaleDateString()}
      </p>
    </div>
  );
}

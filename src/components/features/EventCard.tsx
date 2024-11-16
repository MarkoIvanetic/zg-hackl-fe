'use client';

import { Event } from "@/types";
import { FC } from "react";

interface CardProps {
  event: Event;
}

export const EventCard: FC<CardProps> = ({ event }) => {
  const startDate = new Date(event.start_datetime).toLocaleString();
  const endDate = new Date(event.end_datetime).toLocaleString();

  return (
    <div className="rounded-lg shadow-md p-4 bg-white border">
      <div className="font-semibold text-lg">{event.name}</div>
      <p className="text-sm text-gray-500">{event.event_type}</p>
      <p className="text-sm text-gray-500">Location: {event.location}</p>
      <p className="text-sm text-gray-500">
        Time: {startDate} - {endDate}
      </p>
      <p className="text-sm text-gray-500">Price: ${event.price}</p>
      {event.description && (
        <p className="text-gray-700 mt-2">{event.description}</p>
      )}
      {event.event_url && (
        <a
          href={event.event_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mt-2 inline-block"
        >
          View Details
        </a>
      )}
    </div>
  );
};

export const EventCardSkeleton: FC = () => {
  return (
    <div className="rounded-lg shadow-md p-4 bg-gray-200 border animate-pulse">
      <div className="h-6 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
    </div>
  );
};

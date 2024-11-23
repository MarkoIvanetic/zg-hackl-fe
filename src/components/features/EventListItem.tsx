"use client";

import { Event } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useEventPreview } from "@/context/EventPreviewContext";

interface CardProps {
  event: Event;
}

export const EventCard: FC<CardProps> = ({ event }) => {
  const startDate = new Date(event.start_datetime).toLocaleString();
  const endDate = new Date(event.end_datetime).toLocaleString();

  const { openSheet } = useEventPreview();

  return (
    <div className="rounded-lg shadow-md bg-white border hover:shadow-lg transition-shadow duration-200">
      <div className="h-48 overflow-hidden rounded-t-lg bg-gray-200 flex items-center justify-center">
        {event.media_url ? (
          <Image
            src={event.media_url}
            alt={event.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src="/placeholder.png"
            alt="Nema slike"
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="p-4">
        <Link
          href={`/dogadanja/${event.id}`}
          className="font-semibold text-lg text-sky-600 hover:underline block"
        >
          {event.name}
        </Link>

        <p className="text-sm text-gray-500">{event.category}</p>
        <p className="text-sm text-gray-500">Location: {event.location}</p>
        <p className="text-sm text-gray-500">
          Time: {startDate} - {endDate}
        </p>
        <p className="text-sm text-gray-500">Price: ${event.price}</p>
        {event.description && (
          <p className="text-gray-700 mt-2">{event.description}</p>
        )}
      </div>
      <div className="p-4">
        <Button
          size="lg"
          className="px-2"
          variant="ghost"
          aria-label="Preview event"
          onClick={() => openSheet(event)}
        >
          <Eye className="!h-6 !w-6 text-gray-700" />
          Brzi pregled
        </Button>
      </div>
    </div>
  );
};

export const EventCardSkeleton: FC = () => {
  return (
    <div className="rounded-lg shadow-md bg-gray-200 border animate-pulse">
      <div className="h-44 bg-gray-300 rounded-t-lg mb-4"></div>

      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

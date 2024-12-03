"use client";

import { Event } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { CurrencyEuroIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";
import { differenceInDays } from "date-fns";

import { Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tag } from "@/components/features/Tag";
import { useEventPreview } from "@/context/EventPreviewContext";

interface CardProps {
  event: Event;
}

export const EventCard: FC<CardProps> = ({ event }) => {
  console.log("EVENT", event);
  const startDate = new Date(event.start_datetime);
  const formattedStartDate = startDate.toLocaleString();

  const { openSheet } = useEventPreview();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const truncatedDescription =
    event.description && event.description.length > 100
      ? event.description.substring(0, 100) + "..."
      : event.description;

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const daysRemaining = differenceInDays(startDate, new Date());
  const showTimeTag = daysRemaining <= 7 && daysRemaining >= 0;

  return (
    <div className="w-full rounded-lg shadow-md bg-white border hover:shadow-lg transition-shadow duration-200 flex flex-col">
      <div className="h-48 overflow-hidden rounded-t-lg bg-gray-200 flex items-center justify-center relative">
        {event.image_url ? (
          <Image
            src={event.image_url}
            alt={event.name}
            width={500}
            height={300}
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
        <div className="absolute top-4 right-4">
          {isBookmarked ? (
            <BookmarkIconSolid
              className="!h-6 !w-6 text-navigation"
              onClick={toggleBookmark}
            />
          ) : (
            <BookmarkIcon
              className="!h-6 !w-6 text-navigation"
              onClick={toggleBookmark}
            />
          )}
        </div>
        <div className="absolute bottom-2 left-2 flex gap-2">
          <Tag tagName={event.category} />
          {showTimeTag && (
            <Tag
              tagName="time"
              time={
                daysRemaining === 0
                  ? "Danas"
                  : `Za ${daysRemaining} ${
                      daysRemaining === 1 ? "dan" : "dana"
                    }`
              }
            />
          )}
        </div>
      </div>

      <div className="p-4">
        <Link
          href={`/dogadanja/${event.id}`}
          className="font-bold text-lg text-gray-950 hover:underline"
        >
          {event.name}
        </Link>
        <p className="text-sm text-gray-800 flex items-center gap-2">
          <MapPinIcon className="!h-4 !w-4 text-gray-700" />
          {event.location}
        </p>
        <p className="text-sm text-gray-800 flex items-center gap-2">
          <CalendarDaysIcon className="!h-4 !w-4 text-gray-700" />
          {formattedStartDate}
        </p>
        <p className="text-sm text-gray-800 flex items-center gap-2">
          <CurrencyEuroIcon className="!h-4 !w-4 text-gray-700" />€{event.price}
        </p>
        {event.description && event.description.length > 0 && (
          <p className="text-gray-500 mt-2">{truncatedDescription}</p>
        )}
      </div>
      <div className="p-4 flex flex-wrap gap-2">
        <Button
          size="lg"
          className="px-2"
          variant="secondary"
          aria-label="Preview event"
          onClick={() => openSheet(event)}
        >
          <Eye className="!h-4 !w-4 text-gray-700" />
          Brzi pregled
        </Button>
        <Button
          size="lg"
          className="px-2"
          variant="action"
          aria-label="Preview event"
          onClick={() => openSheet(event)}
        >
          <ArrowRightIcon className="!h-4 !w-4 text-white stroke-2" />
          Kupi ulaznicu
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

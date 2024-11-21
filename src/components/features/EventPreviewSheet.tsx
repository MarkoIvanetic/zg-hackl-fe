"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { useEventPreview } from "@/context/EventPreviewContext";

export const EventPreviewSheet = () => {
  const { event, isSheetOpen, closeSheet } = useEventPreview();

  return (
    <Sheet open={isSheetOpen}  onOpenChange={closeSheet}>
      <SheetContent side="right" className="max-w-[400px] sm:max-w-[540px]">
        <SheetHeader>
          <SheetTitle>{event?.name || "Event Details"}</SheetTitle>
          <SheetDescription>
            {event?.description || "No description available."}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4">
          <p>
            <strong>Location:</strong> {event?.location}
          </p>
          <p>
            <strong>Type:</strong> {event?.event_type}
          </p>
          <p>
            <strong>Price:</strong> {event?.price || "Free"}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {event?.start_datetime
              ? new Date(event.start_datetime).toLocaleString()
              : "N/A"}
          </p>
        </div>
        <SheetClose asChild>
          <button className="mt-4 btn btn-secondary">Close</button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

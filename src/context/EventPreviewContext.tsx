"use client";

import { createContext, FC, ReactNode, useContext, useState } from "react";
import { Event } from "@/types";

interface EventPreviewContextValue {
  event: Event | null;
  openSheet: (event: Event) => void;
  closeSheet: () => void;
  isSheetOpen: boolean;
}

const EventPreviewContext = createContext<EventPreviewContextValue | undefined>(
  undefined
);

export const EventPreviewProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [event, setEvent] = useState<Event | null>(null);
  const [isSheetOpen, setSheetOpen] = useState(false);

  const openSheet = (event: Event) => {
    setEvent(event);
    setSheetOpen(true);
  };

  const closeSheet = () => {
    setSheetOpen(false);
    setEvent(null);
  };

  return (
    <EventPreviewContext.Provider
      value={{ event, openSheet, closeSheet, isSheetOpen }}
    >
      {children}
    </EventPreviewContext.Provider>
  );
};

export const useEventPreview = () => {
  const context = useContext(EventPreviewContext);
  if (!context) {
    throw new Error(
      "useEventPreview must be used within an EventPreviewProvider"
    );
  }
  return context;
};

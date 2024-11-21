"use client";

import { EventPreviewProvider } from "@/context/EventPreviewContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react";

const queryClient = new QueryClient();

export const AppProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <EventPreviewProvider>{children}</EventPreviewProvider>
    </QueryClientProvider>
  );
};

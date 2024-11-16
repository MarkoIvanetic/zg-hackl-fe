"use client";

import { AppSidebar } from "@/components/features/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <div className="flex w-full">
          <AppSidebar />
          <main className="flex-1 w-full p-4">
            {/* <SidebarTrigger /> */}
            {children}
          </main>
        </div>
      </SidebarProvider>
    </QueryClientProvider>
  );
};

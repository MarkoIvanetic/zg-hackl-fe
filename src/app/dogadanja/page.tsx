"use client";

import EventList from "@/components/features/EventList";
import { QuickCategories } from "@/components/features/filtering/QuickCategories";
import { AppSidebar } from "@/components/features/sidebar/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Suspense } from "react";

export default function DogadanjaPage() {
  return (
    <Suspense>
      <AppSidebar />
      <main className="w-full">
        <div className="container mx-auto p-6">
          <div className="flex gap-x-2">
            <SidebarTrigger/>
            <h1 className="text-2xl font-bold mb-8">Događanja</h1>
          </div>
          <QuickCategories />
          <EventList />
        </div>
      </main>
    </Suspense>
  );
}

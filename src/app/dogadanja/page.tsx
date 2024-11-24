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
            <SidebarTrigger />
            <div className="flex gap-4">
              <span className="text-2xl font-bold mb-8">Lista</span>
              <span className="text-2xl font-bold mb-8">Kartice</span>
              <span className="text-2xl font-bold mb-8">Karta</span>
              <span className="text-2xl font-bold mb-8">Istraži</span>
            </div>
          </div>
          <QuickCategories />
          <EventList />
        </div>
      </main>
    </Suspense>
  );
}

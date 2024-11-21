"use client";

import { CategorySelector } from "@/components/features/sidebar/CategorySelector";
import { DateRangePicker } from "@/components/features/sidebar/DateRangePicker";
import { KidFriendlyFilter } from "@/components/features/sidebar/KidFriendlyFilter";
import { PriceRangeInputs } from "@/components/features/sidebar/PriceRangeInputs";
import { ResetButton } from "@/components/features/sidebar/ResetButton";
import { ShowEventsFilter } from "@/components/features/sidebar/ShowEventsFilter";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export const AppSidebar = () => {
  return (
    <Sidebar className="top-[--navbar-height] pb-[--navbar-height]" variant="sidebar">
      <SidebarHeader>
        <h1 className="text-xl px-4 font-semibold">Filtriraj događaje</h1>
      </SidebarHeader>
      <SidebarContent className="space-y-4 px-4 py-2">
        <SidebarGroup>
          <ShowEventsFilter />
        </SidebarGroup>
        <SidebarGroup>
          <DateRangePicker />
        </SidebarGroup>
        <SidebarGroup>
          <PriceRangeInputs />
        </SidebarGroup>
        <SidebarGroup>
          <CategorySelector />
        </SidebarGroup>
        <SidebarGroup>
          <KidFriendlyFilter />
        </SidebarGroup>
        <SidebarGroup>
          <ResetButton />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

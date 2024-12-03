"use client";

import { CategorySelector } from "@/components/features/sidebar/CategorySelector";
import { DateRangePicker } from "@/components/features/sidebar/DateRangePicker";
import { LocationFilter } from "@/components/features/sidebar/LocationFilter";
import { PriceRangeInputs } from "@/components/features/sidebar/PriceRangeInputs";
import { ResetButton } from "@/components/features/sidebar/ResetButton";
import { SearchFilter } from "@/components/features/sidebar/SearchFilter";
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
      <SidebarContent className="space-y-3 px-4 py-2">
        <SidebarGroup>
          <SearchFilter />
        </SidebarGroup>
        <SidebarGroup>
          <DateRangePicker />
        </SidebarGroup>
        <SidebarGroup>
          <LocationFilter />
        </SidebarGroup>
        <SidebarGroup>
          <CategorySelector />
        </SidebarGroup>
        <SidebarGroup>
          <PriceRangeInputs />
        </SidebarGroup>
        {/* <SidebarGroup>
          <KidFriendlyFilter />
        </SidebarGroup> */}
        <SidebarGroup>
          <ResetButton />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

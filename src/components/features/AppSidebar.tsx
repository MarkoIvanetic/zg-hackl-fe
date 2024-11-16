"use client";

import { Calendar } from "@/components/ui/calendar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { Checkbox } from "@/components/ui/checkbox";

import { useState } from "react";

export function AppSidebar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Sidebar className="min-h-screen">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </SidebarGroup>
        <SidebarGroup className="flex flex-row items-center gap-1.5">
          <Checkbox id="test1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="test1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Checkbox filter
            </label>
          </div>
        </SidebarGroup>
        <SidebarGroup className="flex flex-row items-center gap-1.5">
          <Checkbox id="test2" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="test2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Checkbox filter2
            </label>
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

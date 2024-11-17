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
import { Slider } from "@/components/ui/slider";

import { useState } from "react";

export function AppSidebar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [sliderValue, setSliderValue] = useState([25, 75]);

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
        <SidebarGroup>
          <label className="text-sm font-medium leading-none mb-2 block">
            Price Range
          </label>
          <Slider
            value={sliderValue}
            min={0}
            max={100}
            step={1}
            minStepsBetweenThumbs={1}
            className="w-full"
            onValueChange={(value) => {
              setSliderValue(value as number[]);
            }}
          />
          <span className="text-sm text-muted-foreground">
            ${sliderValue[0]} - ${sliderValue[1]}
          </span>
        </SidebarGroup>
        <SidebarGroup className="flex flex-row items-center gap-1.5">
          <Checkbox id="test1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="test1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Location
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
              Free Entrance
            </label>
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

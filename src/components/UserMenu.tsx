"use client";

import { useState } from "react";
import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild className="w-min">
          <button className="flex items-center justify-center rounded-full p-2 bg-gray-100 hover:bg-gray-200">
            <User className="h-4 w-4 text-gray-700" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={() => alert("Profile clicked")}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => alert("Settings clicked")}>
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => alert("Help clicked")}>
            Help
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              alert("Logging out");
            }}
            className="text-red-500"
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
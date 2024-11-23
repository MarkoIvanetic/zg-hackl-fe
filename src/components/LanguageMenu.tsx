"use client";

import { CroIcon } from "@/components/icons/CroIcon";
import { EnIcon } from "@/components/icons/EnIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export const LanguageMenu = () => {
  const [language, setLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // Add logic here to update language preference, e.g., using i18n or cookies
    console.log("Language changed to:", lang);
  };

  return (
    <div>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild className="w-min cursor-pointer">
          {/* <button className="flex items-center justify-center rounded-full"> */}
            {language === "Croatian" ? (
              <CroIcon width="32px" height="32px" />
            ) : (
              <EnIcon width="32px" height="32px" />
            )}
          {/* </button> */}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem
            onClick={() => handleLanguageChange("English")}
            className={language === "English" ? "font-semibold" : ""}
          >
            English
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleLanguageChange("Croatian")}
            className={language === "Croatian" ? "font-semibold" : ""}
          >
            Hrvatski
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

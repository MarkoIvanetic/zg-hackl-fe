"use client";

import { Button } from "@/components/ui/button";
import useQueryParams from "@/hooks/useQueryParams";
import { cn } from "@/lib/utils";
import { TicketIcon } from "@heroicons/react/24/outline";
import {
  Baby,
  CandyCane,
  Car,
  Drama,
  Heart,
  Accessibility,
  Coffee,
  GraduationCap,
  ChevronDownIcon,
  ChevronLeftIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";

interface QuickCategoryProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const activeStyle = "border-b-2 border-black";

const QuickCategory: React.FC<QuickCategoryProps> = ({
  icon,
  label,
  isActive,
  onClick,
}) => {
  return (
    <Button
      variant="ghost"
      size="lg"
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center rounded-none focus:outline-none group transition-colors",
        "h-24 px-4 rounded-xl min-w-[86px] max-w-[86px]",
        "gap-2",
        isActive
          ? "bg-navigation hover:bg-navigation [&_svg]:text-white [&_p]:text-white"
          : "hover:bg-sky-50 border-b-2 border-transparent hover:border-sky-100"
      )}
    >
      <div className="flex items-center justify-center [&_svg]:size-6">
        {icon}
      </div>
      <p className="text-sm text-center transition-colors">{label}</p>
    </Button>
  );
};

export const QuickCategories: React.FC = () => {
  const { query, change } = useQueryParams();
  const [isOpen, setIsOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<string>("kronoloski");

  const handleSortChange = (order: string) => {
    setSortOrder(order);
    change({
      sort: order,
      page: null,
    });
  };

  const categories = [
    {
      icon: <CandyCane />,
      label: "Božićno",
      onClick: () =>
        change({
          tag: query.tag === "tag1" ? null : "tag1",
          page: null,
        }),
      isActive: query.tag === "tag1",
    },
    {
      icon: <Drama />,
      label: "Komično",
      onClick: () =>
        change({
          tag: query.tag === "tag2" ? null : "tag2",
          page: null,
        }),
      isActive: query.tag === "tag2",
    },
    {
      icon: <Baby size={64} />,
      label: "Za djecu",
      onClick: () =>
        change({
          kid_friendly: query.kid_friendly === "true" ? null : "true",
          page: null,
        }),
      isActive: query.kid_friendly === "true",
    },
    {
      icon: <TicketIcon />,
      label: "Besplatno",
      onClick: () =>
        change({
          price: query.price === "0" ? null : "0",
          page: null,
        }),
      isActive: query.price === "0",
    },
    {
      icon: <Heart />,
      label: "Za spoj",
      onClick: () =>
        change({
          category: query.category === "tag3" ? null : "tag3",
          page: null,
        }),
      isActive: query.category === "tag3",
    },
    {
      icon: <Car />,
      label: "Ima parking",
      onClick: () =>
        change({
          tag5: query.tag5 === "true" ? null : "true",
          page: null,
        }),
      isActive: query.tag5 === "true",
    },
    {
      icon: <Accessibility />,
      label: "Pristupačno",
      onClick: () =>
        change({
          category: query.category === "tag5" ? null : "tag5",
          page: null,
        }),
      isActive: query.category === "tag5",
    },
    {
      icon: <Coffee />,
      label: "Opuštajuće",
      onClick: () =>
        change({
          category: query.category === "tag6" ? null : "tag6",
          page: null,
        }),
      isActive: query.category === "tag6",
    },
    {
      icon: <GraduationCap />,
      label: "Za studente",
      onClick: () =>
        change({
          category: query.category === "tag7" ? null : "tag7",
          page: null,
        }),
      isActive: query.category === "tag7",
    },
  ];

  return (
    <div className="relative">
      <div className="flex gap-8 align-center overflow-x-auto no-scrollbar min-h-[60px] pt-3 mr-16">
        {categories.map((category, index) => (
          <QuickCategory
            key={index}
            icon={category.icon}
            label={category.label}
            onClick={category.onClick}
            isActive={category.isActive}
          />
        ))}
        <div
          className="flex items-center absolute right-0 self-center py-12 px-8"
          style={{
            background:
              "linear-gradient(to left, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 0))",
          }}
        >
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild className="w-min cursor-pointer">
              <Button
                variant="default"
                className="flex items-center bg-navigation"
              >
                {sortOrder === "uzlazno"
                  ? "Cijena uzlazno"
                  : sortOrder === "silazno"
                  ? "Cijena silazno"
                  : "Kronološki"}
                <span className="ml-1">
                  {isOpen ? (
                    <ChevronDownIcon className="w-4 h-4" />
                  ) : (
                    <ChevronLeftIcon className="w-4 h-4" />
                  )}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem
                onClick={() => handleSortChange("uzlazno")}
                className={sortOrder === "uzlazno" ? "font-semibold" : ""}
              >
                Cijena uzlazno
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSortChange("silazno")}
                className={sortOrder === "silazno" ? "font-semibold" : ""}
              >
                Cijena silazno
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSortChange("kronoloski")}
                className={sortOrder === "kronoloski" ? "font-semibold" : ""}
              >
                Kronološki
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

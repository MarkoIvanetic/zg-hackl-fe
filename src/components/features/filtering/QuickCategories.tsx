"use client";

import { Button } from "@/components/ui/button";
import useQueryParams from "@/hooks/useQueryParams";
import { cn } from "@/lib/utils";
import { TicketIcon } from "@heroicons/react/24/outline";
import { Baby, CandyCane, Snowflake, Store, Piano } from "lucide-react";

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
        "h-24 px-4 rounded-xl",
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

  const categories = [
    {
      icon: <CandyCane />,
      label: "Božić dolazi",
      onClick: () =>
        change({
          tag: query.tag === "bozic" ? null : "bozic",
          page: null,
        }),
      isActive: query.tag === "bozic",
    },
    {
      icon: <Snowflake />,
      label: "Zimske radosti",
      onClick: () =>
        change({
          tag: query.tag === "snow" ? null : "snow",
          page: null,
        }),
      isActive: query.tag === "snow",
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
      label: "Besplatni događaji",
      onClick: () =>
        change({
          price: query.price === "0" ? null : "0",
          page: null,
        }),
      isActive: query.price === "0",
    },
    {
      icon: <Piano />,
      label: "Klasična glazba",
      onClick: () =>
        change({
          category: query.category === "Opera" ? null : "Opera",
          page: null,
        }),
      isActive: query.category === "Opera",
    },
    {
      icon: <Store />,
      label: "Sajmovi",
      onClick: () =>
        change({
          category: query.category === "Fair" ? null : "Fair",
          page: null,
        }),
      isActive: query.category === "Fair",
    },
  ];

  return (
    <div className="relative">
      <div className="flex gap-8 align-center overflow-x-auto no-scrollbar min-h-[60px] pt-3">
        {categories.map((category, index) => (
          <QuickCategory
            key={index}
            icon={category.icon}
            label={category.label}
            onClick={category.onClick}
            isActive={category.isActive}
          />
        ))}
      </div>
    </div>
  );
};

"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useQueryParams from "@/hooks/useQueryParams";
import { categories } from "@/data";

import { Filter } from "lucide-react";

export const CategorySelector = ({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) => {
  const { query, change } = useQueryParams();

  const handleCategoryChange = (category: string) => {
    change({ category: category || null, page: null });
  };

  return (
    <div className={className} {...props}>
      <Select value={query.category || ""} onValueChange={handleCategoryChange}>
        <SelectTrigger
          className="w-full bg-white py-5"
          // @ts-expect-error see in component
          icon={<Filter fill="#163d73" color="#163d73" />}
        >
          <SelectValue placeholder="Kategorija događaja" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

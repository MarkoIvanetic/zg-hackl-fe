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

export const CategorySelector = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
  const { query, change } = useQueryParams();

  const handleCategoryChange = (category: string) => {
    change({ event_type: category || null, page: null });
  };

  return (
    <div className={className} {...props}>
      <label className="text-sm font-medium leading-none mb-2 block">Kategorija</label>
      <Select value={query.event_type || ""} onValueChange={handleCategoryChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Odaberi kategoriju" />
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

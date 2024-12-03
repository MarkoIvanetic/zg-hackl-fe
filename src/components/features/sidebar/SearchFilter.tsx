"use client";

import { DebouncedInput } from "@/components/features/DebouncedInput";
import useQueryParams from "@/hooks/useQueryParams";

export const SearchFilter: React.FC = () => {
  const { query, change } = useQueryParams();

  const handleSearchChange = (value: string) => {
    change({ search: value, page: null }); // Reset to the first page on search change
  };

  return (
    <div className="flex items-center gap-4">
      <DebouncedInput
        value={query.search || ""}
        onChange={handleSearchChange}
        placeholder="Pretraži događanja..."
        debounceTime={300}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

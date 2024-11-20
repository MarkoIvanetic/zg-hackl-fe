"use client";

import useQueryParams from "@/hooks/useQueryParams";
import { useState } from "react";

export const PriceRangeInputs = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
  const { query, change } = useQueryParams();
  const [minPrice, setMinPrice] = useState(query.min_price || "");
  const [maxPrice, setMaxPrice] = useState(query.max_price || "");

  const handlePriceChange = (key: "min_price" | "max_price", value: string) => {
    if (key === "min_price") setMinPrice(value);
    if (key === "max_price") setMaxPrice(value);

    change({
      [key]: value.trim() !== "" ? value : null,
      page: null,
    });
  };

  return (
    <div className={`flex gap-2 ${className}`} {...props}>
      <input
        type="number"
        value={minPrice}
        onChange={(e) => handlePriceChange("min_price", e.target.value)}
        placeholder="Min"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => handlePriceChange("max_price", e.target.value)}
        placeholder="Max"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

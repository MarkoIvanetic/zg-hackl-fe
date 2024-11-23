"use client";

import {
  addDays,
  endOfMonth,
  format,
  startOfMonth,
  startOfToday,
} from "date-fns";
import useQueryParams from "@/hooks/useQueryParams";
import { Button } from "@/components/ui/button";

const options = [
  {
    label: "Dan",
    calculateRange: () => ({ from: startOfToday(), to: startOfToday() }),
  },
  {
    label: "Tjedan",
    calculateRange: () => ({
      from: startOfToday(),
      to: addDays(startOfToday(), 6),
    }),
  },
  {
    label: "Vikend",
    calculateRange: () => {
      const today = startOfToday();
      const day = today.getDay();
      const saturday = addDays(today, day <= 5 ? 6 - day : 0); // Saturday
      const sunday = addDays(saturday, 1); // Sunday
      return { from: saturday, to: sunday };
    },
  },
  {
    label: "Mjesec",
    calculateRange: () => ({
      from: startOfMonth(startOfToday()),
      to: endOfMonth(startOfToday()),
    }),
  },
];

export const ShowEventsFilter = ({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) => {
  const { change } = useQueryParams();

  const handleOptionSelect = (
    calculateRange: () => { from: Date; to: Date }
  ) => {
    const { from, to } = calculateRange();

    change({
      from: format(from, "yyyy-MM-dd"),
      to: format(to, "yyyy-MM-dd"),
      page: null,
    });
  };

  return (
    <div className={className} {...props}>
      <div className="flex gap-x-2">
        {options.map((option) => (
          <Button
            key={option.label}
            variant="outline"
            onClick={() => handleOptionSelect(option.calculateRange)}
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

"use client";

import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange, SelectRangeEventHandler } from "react-day-picker";
import useQueryParams from "@/hooks/useQueryParams";
import { ShowEventsFilter } from "@/components/features/sidebar/ShowEventsFilter";

export const DateRangePicker = ({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) => {
  const { query, change } = useQueryParams();

  const [range, setRange] = useState<DateRange>({
    from: query.from ? new Date(query.from) : undefined,
    to: query.to ? new Date(query.to) : undefined,
  });

  // Synchronize state with query changes
  useEffect(() => {
    setRange({
      from: query.from ? new Date(query.from) : undefined,
      to: query.to ? new Date(query.to) : undefined,
    });
  }, [query.from, query.to]);

  const handleRangeChange: SelectRangeEventHandler = (
    range: DateRange | undefined
  ) => {
    if (!range) {
      setRange({ from: undefined, to: undefined });
      change({ from: null, to: null, page: null });
      return;
    }

    const { from, to } = range;
    setRange({ from: from || undefined, to: to || undefined });

    change({
      from: from ? format(from, "yyyy-MM-dd") : null,
      to: to ? format(to, "yyyy-MM-dd") : null,
      page: null,
    });
  };

  return (
    <div className={className} {...props}>
      <ShowEventsFilter />
      <Calendar
        mode="range"
        selected={range}
        onSelect={handleRangeChange}
        className="rounded-md border bg-white mt-4"
      />
    </div>
  );
};

"use client";

import { Checkbox } from "@/components/ui/checkbox";
import useQueryParams from "@/hooks/useQueryParams";

export const KidFriendlyFilter = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
  const { query, change } = useQueryParams();

  const handleKidFriendlyChange = (checked: boolean) => {
    change({ kid_friendly: checked ? "true" : null, page: null });
  };

  return (
    <div className={`flex flex-row items-center gap-1.5 ${className}`} {...props}>
      <Checkbox
        id="kid_friendly"
        checked={query.kid_friendly === "true"}
        onCheckedChange={handleKidFriendlyChange}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="kid_friendly"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Prikladno za djecu
        </label>
      </div>
    </div>
  );
};

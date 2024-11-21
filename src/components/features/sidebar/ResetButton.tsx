"use client";

import { Button } from "@/components/ui/button";
import useQueryParams from "@/hooks/useQueryParams";

export const ResetButton = ({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) => {
  const { reset } = useQueryParams();

  return (
    <div className={className} {...props}>
      <Button className="w-full" onClick={reset}>Očisti</Button>
    </div>
  );
};

"use client";

import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

type CustomPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: CustomPaginationProps) {
  return (
    <ShadcnPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
            aria-disabled={currentPage <= 1}
            className={
              currentPage <= 1 ? "pointer-events-none opacity-50" : "pointer"
            }
          />
        </PaginationItem>
        {Array.from({ length: totalPages }).map((i, index) => {
          const pageIndex = index + 1;

          if (pageIndex === currentPage) {
            return (
              <PaginationItem key={pageIndex}>
                <PaginationLink isActive>{pageIndex}</PaginationLink>
              </PaginationItem>
            );
          }

          if (
            pageIndex === 1 ||
            pageIndex === totalPages ||
            Math.abs(pageIndex - currentPage) <= 1
          ) {
            return (
              <PaginationItem key={pageIndex}>
                <PaginationLink onClick={() => onPageChange(pageIndex)}>
                  {pageIndex}
                </PaginationLink>
              </PaginationItem>
            );
          }

          if (pageIndex === currentPage - 2 || pageIndex === currentPage + 2) {
            return <PaginationEllipsis key={`ellipsis-${pageIndex}`} />;
          }

          return null;
        })}
        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
            aria-disabled={currentPage >= totalPages}
            className={
              currentPage >= totalPages
                ? "pointer-events-none opacity-50"
                : "pointer"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
}

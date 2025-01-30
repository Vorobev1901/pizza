import {
  Pagination,
  PaginationContent,
  PaginationItem
} from "@/components/ui/pagination";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type TMeta = {
  total_items: number;
  total_pages: number;
  current_page: number;
  per_page: number;
  remaining_count: number;
};

type PaginatorProps = {
  meta: TMeta;
  changePage: (page: number) => void;
};

const Paginator = ({ meta, changePage }: PaginatorProps) => {
  return (
    <div className="flex gap-8 justify-center items-center mt-auto">
      <Pagination className="mx-0 w-min">
        <PaginationContent>
          <PaginationItem>
            <Button
              onClick={() => changePage(meta.current_page - 1)}
              variant={"destructive"}
              disabled={meta.current_page <= 1}
              className="cursor-pointer px-2.5"
            >
              <ChevronLeft />
            </Button>
          </PaginationItem>
          <>
            {Array.from({ length: meta.total_pages }, (_, index) => (
              <PaginationItem key={index}>
                <Button
                  onClick={() => changePage(index + 1)}
                  variant={
                    index + 1 === meta.current_page ? "default" : "destructive"
                  }
                  className="cursor-pointer"
                  disabled={index + 1 === meta.current_page}
                >
                  {index + 1}
                </Button>
              </PaginationItem>
            ))}
          </>
          <PaginationItem>
            <Button
              onClick={() => changePage(meta.current_page + 1)}
              variant={"destructive"}
              disabled={meta.current_page >= meta.total_pages}
              className="cursor-pointer px-2.5"
            >
              <ChevronRight />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <div className="text-muted-foreground font-medium">
        {meta.total_items - meta.remaining_count} из {meta.total_items}
      </div>
    </div>
  );
};

export default Paginator;

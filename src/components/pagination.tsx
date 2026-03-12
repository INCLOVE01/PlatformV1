// components/Pagination.tsx
import { Button } from "@/components/ui/button";
import Useicon from "@/components/UseIcon";
import { ChevronLeft, ChevronRight } from "@hugeicons/core-free-icons";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isFetching: boolean;
}

export default function Pagination({ currentPage, totalPages, onPageChange, isFetching }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4 pt-12">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isFetching}
        className="rounded-xl border-slate-200 hover:bg-slate-50"
      >
        <Useicon icon={ChevronLeft} className="w-4 h-4 mr-1" /> Previous
      </Button>
      
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-slate-900">{currentPage}</span>
        <span className="text-sm text-slate-400">/</span>
        <span className="text-sm text-slate-400">{totalPages}</span>
      </div>

      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isFetching}
        className="rounded-xl border-slate-200 hover:bg-slate-50"
      >
        Next <Useicon icon={ChevronRight} className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );
}
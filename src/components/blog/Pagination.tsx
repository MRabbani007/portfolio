"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Helper to update URL without full page reload
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  if (totalPages <= 1) return null;

  return (
    <div className="mt-16 flex flex-col items-center gap-6 border-t border-slate-100 dark:border-white/5 pt-12">
      <div className="flex items-center gap-2">
        {/* Previous Button */}
        <PaginationButton
          onClick={() => createPageURL(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          <ChevronLeft size={18} />
        </PaginationButton>

        {/* Page Numbers */}
        <div className="flex items-center gap-1 mx-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            // Logic for showing dots if pages are too many could go here
            return (
              <button
                key={page}
                onClick={() => createPageURL(page)}
                className={`w-10 h-10 rounded-xl font-mono text-xs font-bold transition-all
                  ${
                    currentPage === page
                      ? "bg-slate-900 dark:bg-sky-500 text-white shadow-lg shadow-sky-500/20"
                      : "text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
              >
                {page.toString().padStart(2, "0")}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <PaginationButton
          onClick={() => createPageURL(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          <ChevronRight size={18} />
        </PaginationButton>
      </div>

      {/* Status Bar style detail */}
      <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-sky-500" />
        Showing {Math.min(itemsPerPage, totalItems)} of {totalItems} Entries
      </div>
    </div>
  );
}

function PaginationButton({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="p-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-white/5 transition-all shadow-sm"
    >
      {children}
    </button>
  );
}

"use client";

import React, { useEffect, useRef, Suspense } from "react";
import { Search, Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  // Initial value from URL query "q"
  const currentQuery = searchParams.get("q") || "";

  // 1. Handle Cmd+K Shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 2. Update URL on Submit
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("q")?.toString().trim();

    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("q", query);
      params.set("page", "1"); // Reset to page 1 on new search
    } else {
      params.delete("q");
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="w-full lg:w-96 relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-slate-400 group-focus-within:text-sky-500 transition-colors pointer-events-none">
        <Search size={18} />
        <span className="text-[10px] font-bold border border-slate-200 dark:border-white/10 px-1.5 py-0.5 rounded uppercase">
          Cmd + K
        </span>
      </div>
      <input
        ref={inputRef}
        type="text"
        name="q"
        defaultValue={currentQuery}
        placeholder="Search documentation..."
        className="w-full pl-28 pr-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 outline-none transition-all dark:text-white text-sm"
      />
      {/* Optional: Hidden submit button to allow Enter key functionality */}
      <button type="submit" className="hidden" aria-hidden="true" />
    </form>
  );
}

// 3. Main Export with Suspense
// SearchParams hooks require a Suspense boundary in Next.js Client Components
export default function BlogSearchBar() {
  return (
    <Suspense
      fallback={
        <div className="w-full lg:w-96 h-[54px] rounded-2xl bg-slate-100 dark:bg-white/5 animate-pulse flex items-center px-4">
          <Loader2 className="animate-spin text-slate-300" size={18} />
        </div>
      }
    >
      <SearchInput />
    </Suspense>
  );
}

"use client";

import { CATEGORIES } from "@/lib/data";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function CategoriesList() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSelect = (category: string) => {
    const newParams = new URLSearchParams(window.location.search);
    newParams.set("category", category);

    router.push(`${window.location.pathname}?${newParams}`);
  };

  const selected = searchParams.get("category") ?? "";

  return (
    <div className="">
      <h2 className="mb-2">Categories</h2>
      <div className="flex flex-wrap items-stretch gap-4 text-sm">
        {CATEGORIES.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleSelect(item.value)}
            className={
              (selected === item.value
                ? "bg-sky-500"
                : "bg-zinc-200 dark:bg-zinc-800") +
              " py-1 px-4 rounded-full font-medium text-nowrap duration-200"
            }
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

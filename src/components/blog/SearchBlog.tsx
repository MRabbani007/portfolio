"use client";

import { useParams, useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBlog({ className }: { className?: string }) {
  const router = useRouter();
  const params = useParams();

  const [search, setSearch] = useState(
    decodeURIComponent((params?.slug as string) || "")
  );

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newParams = new URLSearchParams(window.location.search);
    newParams.set("search", search);

    router.push(`${window.location.pathname}?${newParams}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="border-2 border-zinc-500 rounded-lg flex items-center gap-4 px-4"
    >
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none border-none py-2 flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">
        <IoSearch size={25} />
      </button>
    </form>
  );
}

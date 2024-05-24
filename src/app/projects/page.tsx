import Link from "next/link";
import React from "react";

export default function ProjectsPage() {
  return (
    <div className=" min-h-screen">
      <div className="bg-zinc-900 w-full h-[40vh] relative">
        <div className="text-zinc-50 absolute left-0 bottom-0 p-4">
          <p className="text-2xl">Projects</p>
          <p>Projects that I built</p>
        </div>
      </div>
      <div className="py-2 px-4">
        <h1>Projects</h1>
        <ul>
          <li className="p-2 cursor-pointer hover:bg-zinc-200 duration-200">
            <Link href="/projects/todoapp">Todo App</Link>
          </li>
          <li className="p-2 cursor-pointer hover:bg-zinc-200 duration-200">
            <Link href="/projects/onlinestore">Online Store</Link>
          </li>
          <li className="p-2 cursor-pointer hover:bg-zinc-200 duration-200">
            <Link href="/projects/languageapp">Language Learning</Link>
          </li>
          <li className="p-2 cursor-pointer hover:bg-zinc-200 duration-200">
            <Link href="/projects/expensemanager">Expense Manager</Link>
          </li>
          <li className="p-2 cursor-pointer hover:bg-zinc-200 duration-200">
            <Link href="/projects/moviesapp">Movies App</Link>
          </li>
          <li className="p-2 cursor-pointer hover:bg-zinc-200 duration-200">
            <Link href="/projects/travelapp">Travel App</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

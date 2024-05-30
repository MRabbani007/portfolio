"use client";

import Link from "next/link";
import React, { useState } from "react";
import { projects } from "../_lib/projects";

export default function ProjectsPage() {
  const [expandIndex, setExpandIndex] = useState(-1);

  return (
    <div className="min-h-screen">
      <header className="bg-zinc-900 mt-[80px]">
        <div className="h-[40vh] w-full max-w-[1000px] mx-auto relative">
          <div className="text-zinc-50 absolute left-0 bottom-0 p-4">
            <p className="text-2xl">Projects</p>
            <p>Projects that I built</p>
          </div>
        </div>
      </header>
      <main className="py-2 px-4 max-w-[1000px] mx-auto">
        <h1>Projects</h1>
        <ul>
          {projects.map((project, index) => {
            return (
              <li
                key={project.id}
                title={`Go to ${project.name}`}
                onMouseOver={() => setExpandIndex(index)}
                onMouseLeave={() => setExpandIndex(-1)}
                className="p-2 cursor-pointer hover:bg-zinc-200 duration-200"
              >
                <Link
                  href={`/projects/${project.id}/${project.name}`}
                  className="text-xl uppercase"
                >
                  {project.title}
                </Link>
                <p
                  className={
                    (expandIndex === index
                      ? "h-6"
                      : "h-0 -translate-y-4 invisible opacity-0 ") +
                    " duration-400"
                  }
                >
                  {project.about}
                </p>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

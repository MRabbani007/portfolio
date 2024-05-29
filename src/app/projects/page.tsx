"use client";

import Link from "next/link";
import React, { useState } from "react";
import { projects } from "../_lib/projects";

export default function ProjectsPage() {
  const [expandIndex, setExpandIndex] = useState(-1);

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
                      ? ""
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
      </div>
    </div>
  );
}

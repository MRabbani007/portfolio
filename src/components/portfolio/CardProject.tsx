import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../../../types";

export default function CardProject({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl text-blue-600 uppercase">{project.title}</h3>
      <div className="sm:w-[400px] sm:h-[300px] w-full relative group overflow-hidden">
        <Image
          src={"/assets/projects/" + project.mainImage}
          width={600}
          height={400}
          alt="Dashboard"
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-blue-600/50 z-10 -translate-y-[1000px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-end justify-center gap-6 p-6 duration-200">
          <Link
            title="Show More"
            href={`/projects/${project.id}/${project.name}`}
            className="bg-zinc-200 hover:bg-white text-zinc-800 py-2 px-4 rounded-full duration-200"
          >
            More
          </Link>
          <Link
            title="Go to live demo"
            href={project.live_URL}
            target="_blank"
            className="bg-zinc-200 hover:bg-white text-zinc-800 py-2 px-4 rounded-full duration-200"
          >
            Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

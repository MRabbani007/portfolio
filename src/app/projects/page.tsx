"use client";

import CardProject from "@/components/portfolio/CardProject";
import { PROJECTS } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function ProjectsPage() {
  const [expandIndex, setExpandIndex] = useState(-1);
  const [onItem, setOnItem] = useState(-1);

  return (
    <div className="">
      <header className="bg-gradient-to-br from-zinc-900 to-zinc-700">
        <div className="h-[40vh] w-full mx-auto relative overflow-hidden">
          {/* <div className="text-zinc-50 absolute left-0 bottom-0 py-4">
            <p className="text-2xl">Projects</p>
            <p>Projects that I built</p>
          </div> */}
          <div className="w-full ">
            <Image
              src={"/wallpaper.jpeg"}
              width={6000}
              height={4000}
              alt="wallpaper"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>
      <main className="p-8">
        <h1>Projects</h1>
        <ul className="flex flex-col gap-8">
          {PROJECTS.map((project, index) => {
            // return (
            //   <li
            //     key={project.id}
            //     onMouseOver={() => {
            //       setExpandIndex((curr) => (onItem === index ? curr : index));
            //       setOnItem(index);
            //     }}
            //     onClick={() =>
            //       setExpandIndex((curr) => (curr === index ? -1 : index))
            //     }
            //     onMouseLeave={() => {
            //       setOnItem(-1);
            //       // setExpandIndex(-1);
            //     }}
            //     className="cursor-pointer rounded-xl duration-200 flex flex-col items-start"
            //   >
            //     <div
            //       className={
            //         (expandIndex === index ? "rounded-t-xl" : "rounded-xl") +
            //         " duration-500 z-20 flex items-center gap-2 bg-stone-500 text-white w-full p-2"
            //       }
            //     >
            //       <IoIosArrowForward
            //         size={25}
            //         className={
            //           (expandIndex === index ? "rotate-90" : "") +
            //           " duration-200"
            //         }
            //       />
            //       <p className="text-xl">{project.title}</p>
            //     </div>
            //     <div
            //       className={
            //         (expandIndex === index
            //           ? ""
            //           : " h-0 -translate-y-4 invisible opacity-0 ") +
            //         " pl-[33px] duration-500 flex flex-col gap-2 py-2 w-full z-10 rounded-b-xl bg-stone-100 dark:bg-zinc-900 dark:text-zinc-50 text-zinc-800"
            //       }
            //     >
            //       <p className="max-w-[600px] text-pretty">{project.about}</p>
            //       <p className="flex items-center gap-4">
            //         <Link
            //           title={`More about ${project.name}`}
            //           href={`/projects/${project.id}/${project.name}`}
            //           className="py-1 px-6 text-center bg-stone-300 hover:bg-stone-200 text-zinc-800 duration-200 rounded-full"
            //         >
            //           More
            //         </Link>
            //         <Link
            //           title={`Go to ${project.name} demo`}
            //           href={project.live_URL}
            //           target="_blank"
            //           className="py-1 px-6 text-center bg-stone-300 hover:bg-stone-200 text-zinc-800 duration-200 rounded-full"
            //         >
            //           Demo
            //         </Link>
            //       </p>
            //     </div>
            //   </li>
            // );
            return <CardProject key={index} project={project} />;
          })}
        </ul>
      </main>
    </div>
  );
}

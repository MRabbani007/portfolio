"use client";

import { PROJECTS } from "@/lib/projects";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function ProjectsPage() {
<<<<<<< Updated upstream
  const [expandIndex, setExpandIndex] = useState(-1);
  const [onItem, setOnItem] = useState(-1);
=======
  return (
    <main className="mb-10">
      <div className="h-[40vh] bg-sky-950 rounded-br-[100px]"></div>
      <Wrapper>
        <h1 className="my-4">Projects</h1>
        <p></p>
        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, index) => {
            return <RenderPorject key={index} project={project} />;
          })}
        </div>
      </Wrapper>
    </main>
  );
}
>>>>>>> Stashed changes

  return (
<<<<<<< Updated upstream
    <div className="">
      {/* <header className="bg-gradient-to-br from-zinc-900 to-zinc-700">
        <div className="h-[40vh] w-full max-w-[1024px] mx-auto relative">
          <div className="text-zinc-50 absolute left-0 bottom-0 py-4">
            <p className="text-2xl">Projects</p>
            <p>Projects that I built</p>
          </div>
        </div>
      </header> */}
      <main className="p-8">
        <h1>Projects</h1>
        <ul className="flex flex-col gap-2 py-2">
          {PROJECTS.map((project, index) => {
            return (
              <li
                key={project.id}
                onMouseOver={() => {
                  setExpandIndex((curr) => (onItem === index ? curr : index));
                  setOnItem(index);
                }}
                onClick={() =>
                  setExpandIndex((curr) => (curr === index ? -1 : index))
                }
                onMouseLeave={() => {
                  setOnItem(-1);
                  // setExpandIndex(-1);
                }}
                className="cursor-pointer rounded-xl duration-200 flex flex-col items-start"
              >
                <div
                  className={
                    (expandIndex === index ? "rounded-t-xl" : "rounded-xl") +
                    " duration-500 z-20 flex items-center gap-2 bg-stone-500 text-white w-full p-2"
                  }
                >
                  <IoIosArrowForward
                    size={25}
                    className={
                      (expandIndex === index ? "rotate-90" : "") +
                      " duration-200"
                    }
                  />
                  <p className="text-xl">{project.title}</p>
                </div>
                <div
                  className={
                    (expandIndex === index
                      ? ""
                      : " h-0 -translate-y-4 invisible opacity-0 ") +
                    " pl-[33px] duration-500 flex flex-col gap-2 py-2 w-full z-10 rounded-b-xl bg-stone-100 dark:bg-zinc-900 dark:text-zinc-50 text-zinc-800"
                  }
                >
                  <p className="max-w-[600px] text-pretty">{project.about}</p>
                  <p className="flex items-center gap-4">
                    <Link
                      title={`More about ${project.name}`}
                      href={`/projects/${project.id}/${project.name}`}
                      className="py-1 px-6 text-center bg-stone-300 hover:bg-stone-200 text-zinc-800 duration-200 rounded-full"
                    >
                      More
                    </Link>
                    <Link
                      title={`Go to ${project.name} demo`}
                      href={project.live_URL}
                      target="_blank"
                      className="py-1 px-6 text-center bg-stone-300 hover:bg-stone-200 text-zinc-800 duration-200 rounded-full"
                    >
                      Demo
                    </Link>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
=======
    <div className="flex flex-col min-h-screen items-stretch justify-center">
      <article className="flex flex-col gap-4 p-4 lg:p-8 bg-zinc-100 dark:bg-zinc-800 rounded-xl ">
        <div className=" lg:mb-8">
          <h2 className="mb-0">{project.title}</h2>
          <p className="text-zinc-400">{project.subtitle}</p>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:items-stretch items-center justify-center gap-4">
          <div className="flex-1 flex flex-col gap-4">
            <p className="">{project.about}</p>
            {project.features.length !== 0 && (
              <p className="">{project.features.join(", ")}</p>
            )}
            {project.build.length !== 0 && <p>{project.build.join(", ")}</p>}
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs py-1 px-4 bg-zinc-200 dark:bg-zinc-600 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-auto justify-center">
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
          <div className="w-[350px] sm:w-[400px] lg:w-[500px] h-[250px] lg:h-[350px] relative">
            <Image
              src={"/assets/projects/" + project.mainImage}
              fill
              alt="Dashboard"
              className="object-cover object-center rounded-lg"
            />
          </div>
        </div>
      </article>
>>>>>>> Stashed changes
    </div>
  );
}

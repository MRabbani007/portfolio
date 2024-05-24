"use client";

import { projects } from "@/app/_lib/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TravelApp() {
  const project = projects.find((item) => item.name === "travelApp") || {
    images: [],
    imageNames: [],
    live_URL: "/",
  };

  return (
    <div>
      <div className="bg-zinc-900 w-full h-[40vh] relative">
        <div className="text-zinc-50 absolute left-0 bottom-0 p-4">
          <p className="text-2xl">ToDo App</p>
          <p>React, Tailwind, Render</p>
        </div>
      </div>
      <div className="p-4 md:max-w-[1000px] mx-auto flex flex-wrap gap-4">
        <div className="flex flex-1 justify-between gap-3">
          <div className="flex-1 flex flex-col gap-4">
            {/* About */}
            <div>
              <div className="text-blue-600 text-xl uppercase tracking-wide m-0 p-0">
                About
              </div>
              <p>
                Application to track and organize activities, save notes, build
                a journal and more.
              </p>
            </div>
            {/* Features */}
            <div>
              <div className="text-blue-600 text-xl uppercase tracking-wide m-0">
                Features
              </div>
              <ul>
                <li>Keep track of daily activities</li>
                <li>Sort in lists, set priorities, add tags</li>
                <li>Dashboard helps monitor completion and commitment</li>
              </ul>
            </div>
          </div>
          {/* Technologies */}
          <div className=" bg-zinc-200 rounded-xl">
            <h4 className="text-blue-600 bg-zinc-300 py-2 px-4 rounded-t-xl">
              Technologies
            </h4>
            <ul className="list-inside px-4 rounded-b-xl flex flex-col text-zinc-700">
              <li className="py-1">React</li>
              <li className="py-1">Tailwind</li>
              <li className="py-1">SASS</li>
              <li className="py-1">Node Js</li>
              <li className="py-1">MongoDB</li>
            </ul>
          </div>
        </div>
        {/* Preview */}
        <div>
          <div className="text-blue-600 text-xl uppercase tracking-wide m-0">
            Preview
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {project.images.map((image, index) => {
              return (
                <article className="text-center" key={index}>
                  <Image
                    src={"/assets/projects/" + image}
                    alt={project.imageNames[index]}
                    width={500}
                    height={350}
                    className="rounded-lg"
                  />
                  <p className="py-1 font-semibold">
                    {project.imageNames[index]}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center gap-4">
          <Link
            href={project?.live_URL}
            title="Demo"
            className="w-fit text-xl group border-none px-6 py-3 my-2 flex items-center duration-500 rounded-full shadow-xl shadow-blue-500 bg-gradient-to-r from-sky-600 to-sky-400 text-white"
          >
            Demo
          </Link>
          <Link
            href={project?.live_URL}
            title="View Code"
            className="w-fit text-xl group border-none px-6 py-3 my-2 flex items-center duration-500 rounded-full shadow-xl shadow-blue-500 bg-gradient-to-r from-sky-600 to-sky-400 text-white"
          >
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
}

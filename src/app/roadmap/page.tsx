import React from "react";

export default function RoadmapPage() {
  return (
    <div className=" min-h-screen">
      <div className="bg-zinc-900 w-full h-[40vh] relative">
        <img
          src="/assets/stairs.png"
          alt="stairs"
          className="object-contain h-full ml-auto"
        />
        <div className="text-zinc-50 absolute left-0 bottom-0 p-4">
          <p className="text-2xl">Web Developer Roadmap</p>
          <p>How to became a web developer</p>
        </div>
      </div>
      <div className="py-2 px-4">
        <h2>Roadmap</h2>
        <ol className="list-decimal list-inside">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>Tailwind</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Sass</li>
          <li>Typescript</li>
          <li>NextJS</li>
        </ol>
      </div>
    </div>
  );
}

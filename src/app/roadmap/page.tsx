import React from "react";
import { BsSignStop } from "react-icons/bs";
import { IoConstructOutline } from "react-icons/io5";
import { GoAlert } from "react-icons/go";

const FRONTEND = [
  "HTML",
  "CSS",
  "Javascript",
  "Bootstrap",
  "React",
  "Typescript",
  "Tailwind",
  "Sass",
];

const BACKEND = [
  "NodeJS",
  "ExpressJS",
  "NestJS",
  "MongoDB",
  "MySQL",
  "PostGre-SQL",
];

export default function RoadmapPage() {
  return (
    <div className="">
      <header className="bg-zinc-900">
        <div className="w-full max-w-[1024px] mx-auto h-[40vh] relative">
          <img
            src="/assets/stairs.png"
            alt="stairs"
            className="object-contain h-full ml-auto"
            height={300}
            width={200}
          />
          <div className="text-zinc-50 absolute left-0 bottom-0 py-4">
            <p className="text-2xl">Web Developer Roadmap</p>
            <p>How to became a web developer</p>
          </div>
        </div>
      </header>
      <main className="">
        <h2>Roadmap</h2>
        <div className="flex flex-col flex-wrap w-full sm:justify-center sm:items-start items-start gap-6">
          <article className="flex-1">
            <h3 className="text-xl text-blue-600">Frontend</h3>
            <p>UI & UX</p>
            <ol className="list-decimal list-inside p-2">
              {FRONTEND.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ol>
          </article>
          <article className="flex-1">
            <h3 className="text-xl text-blue-600">Backend</h3>
            <p className="text-wrap">
              Server functionality, data storage and database management
            </p>
            <ol
              className="list-decimal list-inside"
              start={FRONTEND.length + 1}
            >
              {BACKEND.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ol>
          </article>
          <article className="flex-1">
            <h3 className="text-xl text-blue-600">Full-Stack</h3>
            <p>Frontend & backend</p>
            <ol
              className="list-decimal list-inside"
              start={FRONTEND.length + BACKEND.length + 1}
            >
              <li>NextJS</li>
            </ol>
          </article>
        </div>
      </main>
    </div>
  );
}

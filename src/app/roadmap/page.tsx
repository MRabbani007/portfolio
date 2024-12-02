import React from "react";
import { BsSignStop } from "react-icons/bs";
import { IoConstructOutline } from "react-icons/io5";
import { GoAlert } from "react-icons/go";
import { Metadata } from "next";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";

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

export const metadata: Metadata = {
  title: "RoadMap",
  description: "Roadmap for becoming a webdeveloper",
};

export default function RoadmapPage() {
  return (
    <main className="">
      <header className="w-full h-[50vh] relative bg-gradient-to-br from-sky-900 to-sky-950 dark:from-zinc-900 dark:to-zinc-950">
        <div className="absolute top-0 left-0 right-0 h-20 bg-sky-950/80 dark:bg-zinc-950/80 z-10"></div>
        <div className="absolute bottom-6 right-6">
          <Image
            src="/assets/stairs.png"
            alt="stairs"
            className="object-contain h-full ml-auto"
            height={300}
            width={200}
          />
        </div>
        <div className="text-zinc-50 absolute left-0 bottom-0 px-8 py-4">
          <h1 className="text-2xl">Web Developer Roadmap</h1>
          <p>How to became a web developer</p>
        </div>
      </header>
      <section className="items-stretch">
        <Wrapper className="flex-col items-stretch space-y-8 my-10">
          <article className="">
            <h2 className="mb-0">Frontend</h2>
            <p className="text-muted-foreground">UI & UX</p>
            <ol className="list-decimal list-inside p-2">
              {FRONTEND.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ol>
          </article>
          <article className="">
            <h2 className="mb-0">Backend</h2>
            <p className="text-muted-foreground">
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
          <article className="">
            <h2 className="mb-0">Full-Stack</h2>
            <p className="text-muted-foreground">Frontend & backend</p>
            <ol
              className="list-decimal list-inside"
              start={FRONTEND.length + BACKEND.length + 1}
            >
              <li>NextJS</li>
            </ol>
          </article>
        </Wrapper>
      </section>
    </main>
  );
}

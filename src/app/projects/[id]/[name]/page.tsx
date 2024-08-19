import PreviewCard from "@/components/projects/PreviewCard";
import Technologies from "@/components/projects/Technologies";
import { PROJECTS } from "@/lib/projects";
import Link from "next/link";
import React from "react";

type URLProps = {
  params: {
    id: string;
    name: string;
  };
};

const defaultProject = {
  id: 0,
  name: "",
  title: "",
  subtitle: "",
  mainImage: "",
  images: [],
  imageNames: [],
  live_URL: "",
  code_URL: "",
  about: "",
  features: [],
  build: [],
  technologies: [],
};

export default function ProjectPage({ params }: URLProps) {
  const project =
    PROJECTS.find((item) => item.name === params?.name) || defaultProject;

  return (
    <div>
      <header className="bg-gradient-to-br from-zinc-900 to-zinc-700">
        <div className="w-full max-w-[1000px] mx-auto h-[40vh] relative">
          <div className="text-zinc-50 absolute left-0 bottom-0 py-4">
            <p className="text-2xl">{project?.title}</p>
            <p>{project?.subtitle}</p>
          </div>
        </div>
      </header>
      <main className="p-8">
        <div className="flex flex-wrap flex-1 justify-between items-start gap-3">
          <div className="flex-1 flex flex-col gap-4">
            {/* About */}
            <div>
              <div className="text-accent text-xl uppercase tracking-wide m-0 p-0">
                About
              </div>
              <p>{project?.about}</p>
            </div>
            {/* Features */}
            <div>
              <div className="text-accent text-xl uppercase tracking-wide m-0">
                Features
              </div>
              <ul>
                {project?.features.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
            {/* Features */}
            <div>
              <div className="text-accent text-xl uppercase tracking-wide m-0">
                Build
              </div>
              <ul>
                {project?.build.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
          {/* Technologies */}
          <Technologies technologies={project?.technologies} />
        </div>
        {/* Preview */}
        <div>
          <div className="text-accent text-xl uppercase tracking-wide m-0">
            Preview
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 py-4">
            {project?.images.map((image, index) => {
              return (
                <PreviewCard
                  imageName={project?.imageNames[index]}
                  imageURL={image}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center gap-4">
          <Link
            href={project?.live_URL}
            target="_blank"
            title="Demo"
            className="w-fit text-xl group border-none px-6 py-3 my-2 flex items-center duration-500 rounded-full bg-gradient-to-r from-sky-600 to-sky-400 text-white"
          >
            Demo
          </Link>
          <Link
            href={project?.live_URL}
            target="_blank"
            title="View Code"
            className="w-fit text-xl group border-none px-6 py-3 my-2 flex items-center duration-500 rounded-full  bg-gradient-to-r from-sky-600 to-sky-400 text-white"
          >
            View Code
          </Link>
        </div>
      </main>
    </div>
  );
}

import PreviewCard from "@/app/_components/projects/PreviewCard";
import Technologies from "@/app/_components/projects/Technologies";
import { projects } from "@/app/_lib/projects";
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
    projects.find((item) => item.name === params?.name) || defaultProject;

  return (
    <div>
      <div className="bg-zinc-900 w-full h-[40vh] relative">
        <div className="text-zinc-50 absolute left-0 bottom-0 p-4">
          <p className="text-2xl">{project?.title}</p>
          <p>{project?.subtitle}</p>
        </div>
      </div>
      <div className="p-4 md:max-w-[1000px] mx-auto flex flex-wrap gap-4">
        <div className="flex flex-1 justify-between items-start gap-3">
          <div className="flex-1 flex flex-col gap-4">
            {/* About */}
            <div>
              <div className="text-blue-600 text-xl uppercase tracking-wide m-0 p-0">
                About
              </div>
              <p>{project?.about}</p>
            </div>
            {/* Features */}
            <div>
              <div className="text-blue-600 text-xl uppercase tracking-wide m-0">
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
              <div className="text-blue-600 text-xl uppercase tracking-wide m-0">
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
          <div className="text-blue-600 text-xl uppercase tracking-wide m-0">
            Preview
          </div>
          <div className="flex flex-wrap items-center justify-start gap-4 p-4">
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
            className="w-fit text-xl group border-none px-6 py-3 my-2 flex items-center duration-500 rounded-full shadow-xl shadow-blue-500 bg-gradient-to-r from-sky-600 to-sky-400 text-white"
          >
            Demo
          </Link>
          <Link
            href={project?.live_URL}
            target="_blank"
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

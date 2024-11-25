import Wrapper from "@/components/Wrapper";
import Technologies from "@/components/projects/Technologies";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PROJECTS } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
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

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id.toString(),
    name: project.name,
  }));
}

export async function generateMetadata({ params }: Props) {
  const project =
    PROJECTS.find((item) => item.name === params?.name) || defaultProject;

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    Content: project.about,
  };
}

export default function ProjectPage({ params }: Props) {
  const project =
    PROJECTS.find((item) => item.name === params?.name) || defaultProject;

  return (
    <main>
      <header className="bg-gradient-to-b from-transparent to-transparent via-sky-900/30 dark:from-zinc-900 dark:to-zinc-700">
        <div className="w-full max-w-[1024px] mx-auto h-[40vh] relative">
          <div className="absolute left-0 bottom-0 py-4 px-4 lg:px-0">
            <p className="text-2xl">{project?.title}</p>
            <p>{project?.subtitle}</p>
          </div>
        </div>
      </header>
      <section>
        <Wrapper>
          <div className="flex flex-col md:flex-row flex-wrap flex-1 justify-between items-start gap-4">
            <div className="flex-1 flex flex-col gap-4">
              {/* About */}
              <div>
                <h3 className="">About</h3>
                <p>{project?.about}</p>
              </div>
              {/* Features */}
              <div>
                <h3 className="">Features</h3>
                <ul>
                  {project?.features.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
              {/* Features */}
              <div>
                <h3 className="">Build</h3>
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
          <div className="mt-4">
            <h3 className="">Preview</h3>
            <div className="flex flex-wrap items-center justify-center gap-4 py-4">
              <Carousel className="w-full group ">
                <CarouselContent className="">
                  {project?.images.map((image, index) => {
                    return (
                      <CarouselItem key={index}>
                        <div className="relative h-[300px] w-[330px] sm:w-[600px] md:w-[700px] lg:w-[1000px] md:h-[500px] lg:h-[600px] mx-auto">
                          <Image
                            src={"/assets/projects/" + image}
                            alt={project.imageNames[index]}
                            fill
                            className="object-contain object-center"
                          />
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="left-2 opacity-100 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300" />
                <CarouselNext className="right-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-20" />
              </Carousel>
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
        </Wrapper>
      </section>
    </main>
  );
}

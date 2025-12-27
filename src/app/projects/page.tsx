"use client";

import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { Metadata } from "next";
import FeaturedProjectCard, {
  FeaturedProjectData,
} from "@/components/projects/FeaturedProjectCard";

// export const metadata: Metadata = {
//   title: "Projects",
//   description: "Projects done by Mohamad",
// };

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string; // Optional image URL
  colorFallback: string; // Tailwind color class for fallback, e.g., 'bg-blue-500'
  liveUrl: string;
  githubUrl: string;
}

export interface TestimonialData {
  id: number;
  quote: string;
  name: string;
  title: string; // e.g., "CEO of Company X"
  imageUrl: string; // Path to the reviewer's photo
}

// Define your featured project data (ensure you have the image path!)
const featuredProject: FeaturedProjectData = {
  id: 99,
  title: "AI-Powered Resume Optimizer",
  subtitle:
    "A full-stack application using GPT-4 API to tailor resumes for specific job descriptions.",
  description:
    "Built a platform that analyzes job descriptions and user resumes, providing actionable feedback and optimized keywords using cutting-edge AI technology. The interface is clean, intuitive, and highly performant.",
  role: "Full Stack Developer, AI Lead",
  duration: "3 Months",
  tags: ["Next.js 14", "TypeScript", "OpenAI API", "Tailwind", "Vercel"],
  imageUrl: "/bg_pattern.jpg", // <-- Make sure this image exists!
  liveUrl: "#",
  githubUrl: "#",
};

const projectsPerPage = 3;

const mockTestimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO, TechSolutions",
    quote:
      "The project delivery was outstanding. Mohamad exceeded our expectations in both design quality and technical execution. Highly recommended!",
    imageUrl: "/author.png", // Make sure you have this image
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Project Manager, Innovate Inc.",
    quote:
      "Mohamad is an incredible problem solver. They tackled complex integration challenges with ease and maintained clear communication throughout the process.",
    imageUrl: "/author.png", // Make sure you have this image
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(projectsPerPage);

  // Logic to get all unique tags from all projects
  const allTags = useMemo(() => {
    const tags = mockProjects.flatMap((p) => p.tags);
    return ["All", ...Array.from(new Set(tags))];
  }, []);

  // Logic to filter the projects based on the active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return mockProjects;

    return mockProjects.filter((project) =>
      project.tags.includes(activeFilter)
    );
  }, [activeFilter]);

  // Determine which projects to show based on the current visible count
  const projectsToShow = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  // Check if there are more projects left to load
  const hasMoreProjects = visibleCount < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + projectsPerPage);
  };

  return (
    <main className="gap-0 p-0">
      {/* Page Hero */}
      <section className="items-center justify-center py-16 md:py-24 min-h-screen bg-gradient-to-br from-sky-950 via-gray-950 to-sky-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-100 sm:text-6xl">
                Projects
              </h1>
              <p className="mt-4 text-xl text-gray-500 max-w-lg">
                A curated selection of my work demonstrating technical skills
                and creative problem-solving.
              </p>
              <div className="mt-8 flex justify-center md:justify-start gap-x-6">
                <Link
                  href="#project-list"
                  className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition duration-150 ease-in-out transform hover:scale-105"
                >
                  Explore My Work
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src={"/projects/undraw_web-app_141a.png"}
                  alt="Illustration of a person working on projects"
                  width={500}
                  height={500}
                  layout="responsive"
                  objectFit="contain"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="min-h-screen justify-center items-center">
        <Wrapper>
          <FeaturedProjectCard project={featuredProject} />
        </Wrapper>
      </section>

      {/* Projects */}
      <section className="items-center justify-center min-h-screen py-20">
        <Wrapper className="py-10">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeFilter === tag
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsToShow.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreProjects && (
            <div className="mt-16 text-center">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Load More Projects ({filteredProjects.length - visibleCount}{" "}
                remaining)
              </button>
            </div>
          )}

          {!hasMoreProjects && filteredProjects.length > 0 && (
            <div className="mt-16 text-center text-gray-500">
              <p>You have viewed all {filteredProjects.length} projects.</p>
            </div>
          )}
        </Wrapper>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-900 py-20 text-center w-full">
        <Wrapper className="">
          <h3 className="text-3xl font-bold text-white mb-4">
            Let's build something together.
          </h3>
          <p className="text-blue-100 mb-6">
            View my resume or reach out to start a conversation.
          </p>
          <Link
            href="/contact"
            className="w-fit mx-auto bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-200"
          >
            Get In Touch
          </Link>
        </Wrapper>
      </section>

      {/* Testimonials */}
      <section className="justify-center items-center py-10 md:py-32">
        <Wrapper>
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
              What clients and colleagues say
            </p>
          </div>

          {/* Grid for multiple testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {mockTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100"
              >
                {/* Quote Icon */}
                <svg
                  className="h-8 w-8 text-blue-400 mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" />
                </svg>

                {/* Quote Text */}
                <p className="text-lg text-gray-600 italic flex-grow mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  {testimonial.imageUrl && (
                    <div className="flex-shrink-0 mr-4">
                      <Image
                        className="h-12 w-12 rounded-full object-cover"
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-base font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
    </main>
  );
}

const ProjectCard: React.FC<{ project: ProjectData }> = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out bg-white transform hover:-translate-y-1">
      {/* Image or Fallback Div */}
      <div className="relative h-48 w-full overflow-hidden">
        {project.imageUrl && !imageError ? (
          <Image
            src={project.imageUrl}
            alt={`Screenshot of ${project.title}`}
            layout="fill"
            objectFit="cover"
            className="transition duration-500 ease-in-out hover:scale-110"
            onError={handleImageError}
          />
        ) : (
          // Fallback div with dynamic background color
          <div
            className={`flex items-center justify-center h-full w-full ${project.colorFallback}`}
          >
            <span className="text-xl font-bold text-white p-4 text-center">
              {project.title}
              <br />
              (Image N/A)
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-auto">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-semibold transition duration-150 flex items-center"
          >
            View Live
            <span className="ml-1">→</span>
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition duration-150"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

const mockProjects: ProjectData[] = [
  {
    id: 1,
    title: "Task Manager Application",
    description:
      "A robust task management tool built with Next.js and a REST API. Features state management and user authentication.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imageUrl: "", // Intentionally left empty to trigger fallback
    colorFallback: "bg-indigo-600",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-commerce Storefront",
    description:
      "A fully functional e-commerce platform using Stripe for payments and a headless CMS.",
    tags: ["Gatsby", "GraphQL", "Stripe", "Node.js"],
    imageUrl: "/author.png",
    colorFallback: "bg-green-600",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AI Chatbot Integration",
    description:
      "Integrated OpenAI GPT models into a web application for enhanced customer support automation.",
    tags: ["Vue.js", "Firebase", "OpenAI", "AI/ML"],
    imageUrl: "/author.png",
    colorFallback: "bg-blue-600",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 1,
    title: "Project One",
    description: "...",
    tags: ["React"],
    imageUrl: "",
    colorFallback: "bg-blue-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "...",
    tags: ["Vue"],
    imageUrl: "",
    colorFallback: "bg-green-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "...",
    tags: ["Angular"],
    imageUrl: "",
    colorFallback: "bg-red-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Project Four",
    description: "...",
    tags: ["Next"],
    imageUrl: "",
    colorFallback: "bg-purple-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Project Five",
    description: "...",
    tags: ["React"],
    imageUrl: "",
    colorFallback: "bg-yellow-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Project Six",
    description: "...",
    tags: ["Node"],
    imageUrl: "",
    colorFallback: "bg-indigo-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Project Seven (Extra)",
    description: "...",
    tags: ["Node"],
    imageUrl: "",
    colorFallback: "bg-pink-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Project Eight (Extra)",
    description: "...",
    tags: ["Node"],
    imageUrl: "",
    colorFallback: "bg-teal-500",
    liveUrl: "#",
    githubUrl: "#",
  },
];

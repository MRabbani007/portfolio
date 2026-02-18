"use client";

import { ProjectData } from "@/lib/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

export default ProjectCard;

import Image from "next/image";
import Link from "next/link";

export interface FeaturedProjectData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  duration: string;
  tags: string[];
  imageUrl: string; // Image URL is required for the featured card design
  liveUrl: string;
  githubUrl: string;
}

interface FeaturedProjectCardProps {
  project: FeaturedProjectData;
}

export default function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Side: Image/Media */}
      <div className="md:w-1/2 relative min-h-[300px] md:min-h-[450px]">
        <Image
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          layout="fill"
          objectFit="cover"
          className="transition duration-500 ease-in-out hover:opacity-90"
          priority // Prioritize loading for the featured project
        />
      </div>

      {/* Right Side: Details & Content */}
      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <span className="text-blue-400 font-semibold uppercase tracking-wider mb-2">
          Featured Project
        </span>
        <h2 className="text-4xl font-extrabold mb-4">{project.title}</h2>
        <p className="text-gray-300 mb-6 text-lg">{project.description}</p>

        {/* Key Details Section */}
        <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
          <div>
            <p className="font-semibold text-blue-300">Role</p>
            <p className="text-gray-400">{project.role}</p>
          </div>
          <div>
            <p className="font-semibold text-blue-300">Duration</p>
            <p className="text-gray-400">{project.duration}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <p
              key={tag}
              className="px-3 py-1 text-sm font-medium bg-gray-700 text-gray-100 rounded-full"
            >
              {tag}
            </p>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition duration-150 transform hover:scale-105"
          >
            View Project →
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-700 text-gray-300 font-bold rounded-lg hover:bg-gray-600 transition duration-150"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}

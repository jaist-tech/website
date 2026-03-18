import { siGithub } from "simple-icons";
import { Globe } from "lucide-react";
import { Project } from "@/types/Project";
import { CategoryTag } from "./CategoryTag.tsx";

type Props = {
  project: Project;
};


export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="relative flex flex-col w-full border border-violet-400 bg-violet-100 rounded-lg shadow-md">
      <CategoryTag category={project.category} />
      <figure className="w-full text-center text-7xl py-5">
        {project.iconEmoji}
      </figure>
      <div className="flex h-full flex-col bg-white rounded-b-lg py-3 px-5">
        <p className="text-xl font-semibold mb-1">{project.title}</p>
        <p className="text-sm text-gray-600 mb-1">{project.description}</p>

        <div className="mt-auto flex justify-end gap-3">
          {project.siteLink && (
            <a
              href={project.siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-900 hover:text-cyan-500 transition-colors"
            >
              <Globe className="h-6 w-6 inline-block" />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-900 hover:text-cyan-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 inline-block"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={siGithub.path} />
              </svg>
            </a>
          )}
        </div>

      </div>
    </div>
  );
};

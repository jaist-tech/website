import { Globe } from "lucide-react";
import { siAppstore, siGithub, siGoogleplay, siQiita } from "simple-icons";

import { CategoryTag } from "./CategoryTag.tsx";
import { IconLink } from "./IconLink";

import type { Project } from "@/types/Project";

type Props = {
  project: Project;
  onTagClick?: (tag: string) => void;
};

export const ProjectCard = ({ project, onTagClick }: Props) => {
  return (
    <div className="flex w-full flex-col rounded-lg border border-violet-400 bg-violet-100">
      <div className="relative">
        <CategoryTag category={project.category} />
        <figure className="w-full select-none py-5 text-center text-7xl">
          {project.iconEmoji}
        </figure>
        <p className="absolute right-3 bottom-1 text-gray-600 text-sm">
          {project.date}
        </p>
      </div>
      <div className="flex h-full flex-col rounded-b-lg bg-white px-5 py-3">
        <p className="mb-1 font-semibold text-xl">{project.title}</p>

        <div className="mb-2 flex flex-wrap gap-x-2 gap-y-1">
          {project.tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className="cursor-pointer select-none text-violet-800 text-xs transition-colors hover:text-cyan-500 hover:underline"
              onClick={() => onTagClick?.(tag)}
            >
              {`#${tag}`}
            </button>
          ))}
        </div>

        <p className="mb-1 text-gray-600 text-sm">{project.description}</p>

        <div className="mt-auto flex justify-end gap-3">
          {project.siteLink && (
            <IconLink href={project.siteLink} label="Website">
              <Globe className="inline-block h-6 w-6" />
            </IconLink>
          )}
          {project.appStoreLink && (
            <IconLink href={project.appStoreLink} label="App Store">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={siAppstore.path} />
              </svg>
            </IconLink>
          )}
          {project.googlePlayLink && (
            <IconLink href={project.googlePlayLink} label="Google Play Store">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={siGoogleplay.path} />
              </svg>
            </IconLink>
          )}
          {project.githubLink && (
            <IconLink href={project.githubLink} label="GitHub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={siGithub.path} />
              </svg>
            </IconLink>
          )}
          {project.qiitaLink && (
            <IconLink href={project.qiitaLink} label="Qiita">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={siQiita.path} />
              </svg>
            </IconLink>
          )}
        </div>
      </div>
    </div>
  );
};

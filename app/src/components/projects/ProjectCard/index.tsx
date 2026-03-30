import { siGithub, siAppstore, siGoogleplay, siQiita  } from "simple-icons";
import { Globe } from "lucide-react";
import { Project } from "@/types/Project";
import { CategoryTag } from "./CategoryTag.tsx";
import { IconLink } from "./IconLink";

type Props = {
  project: Project;
  onTagClick?: (tag: string) => void;
};


export const ProjectCard = ({ project, onTagClick }: Props) => {
  return (
    <div className="flex flex-col w-full border border-violet-400 bg-violet-100 rounded-lg shadow-md">
      <div className="relative">
        <CategoryTag category={project.category} />
        <figure className="w-full text-center text-7xl py-5 select-none">
          {project.iconEmoji}
        </figure>
        <p className="absolute bottom-1 right-3 text-sm text-gray-600">{project.date}</p>
      </div>
      <div className="flex h-full flex-col bg-white rounded-b-lg py-3 px-5">
        <p className="text-xl font-semibold mb-1">{project.title}</p>

        <div className="flex flex-wrap gap-x-2 gap-y-1 mb-2">
          {project.tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className="text-violet-800 text-xs select-none hover:underline hover:text-cyan-500 transition-colors cursor-pointer"
              onClick={() => onTagClick?.(tag)}
            >
              {`#${tag}`}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-600 mb-1">{project.description}</p>

        <div className="mt-auto flex justify-end gap-3">
          {project.siteLink && (
            <IconLink href={project.siteLink} label="Website">
              <Globe className="h-6 w-6 inline-block" />
            </IconLink>
          )}
          {project.appStoreLink && (
            <IconLink href={project.appStoreLink} label="App Store">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 inline-block"
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
                className="h-6 w-6 inline-block"
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
                className="h-6 w-6 inline-block"
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
                className="h-6 w-6 inline-block"
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

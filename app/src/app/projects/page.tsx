
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Heading } from "@/components/shared/Heading";
import { SectionFrame } from "@/components/shared/SectionFrame";
import { projects as projectsData } from "@/data/projects";
import { ja } from "@/locales/ja";

const { projects: projectsLabel } = ja;

export default function Page() {
  return (
      <SectionFrame maxWidth="7xl">
        <Heading level={1}>{projectsLabel.title}</Heading>

        <div className="grid w-full justify-items-start gap-6 mt-3 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionFrame>
  );
}

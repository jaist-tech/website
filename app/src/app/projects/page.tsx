
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Heading } from "@/components/shared/Heading";
import { SectionFrame } from "@/components/shared/SectionFrame";
import { projects as projectsData } from "@/data/projects";
import { ja } from "@/locales/ja";

const { projects: projectsLabel } = ja;

export default function Page() {
  return (
      <SectionFrame>
        <Heading level={1}>{projectsLabel.title}</Heading>
        
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SectionFrame>
  );
}

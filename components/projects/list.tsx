import { ProjectCard } from "./card";
import { projects } from "@/data/projects";

export function ProjectsList({ isHome = false }: { isHome?: boolean }) {
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {isHome ? (
        <>
          {featuredProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </>
      ) : (
        <>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </>
      )}
    </div>
  );
}
import Image from "next/image";

import Halo from "@/components/ui/halo";
import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  summary: string;
  image: string;
};

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className="animated-list --mx-4 md:-mx-6 flex flex-col md:flex-row snap-x snap-mandatory scroll-pl-6 grid-cols-2 flex-nowrap gap-9 overflow-x-scroll px-6 md:grid md:overflow-auto">
      {projects.map((project) => (
        <li
          key={project.slug}
          className="col-span-1 min-w-80 snap-start transition-opacity group"
        >
          <Link href={`/projects/${project.slug}`} className="space-y-4">
            <div className="aspect-video overflow-hidden rounded-md bg-secondary">
              <Halo strength={10}>
                <Image
                  draggable={false}
                  src={project.image}
                  alt={project.title}
                  fill
                  className="h-full w-full object-cover"
                />
              </Halo>
            </div>
            <div className="space-y-1">
              <p className="font-semibold leading-tight group-hover:text-primary">
                {project.title}
              </p>
              <p className="text-foreground/70">{project.summary}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

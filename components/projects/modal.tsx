import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  detailedInfo: string;
  myRole: string;
  myRoleDetailed: string;
  involvedTech: string[];
  links: {
    label: string;
    url: string;
    type?: "url" | "source" | "discord";
  }[];
  date: string;
}

export function ProjectModal({ project }: { project: Project }) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold mb-2 font-serif">
            {project.title}
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-[90%]">
            {project.description}
          </p>
          <div className="md:flex md:gap-6">
            <div className="md:w-[70%] space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 font-serif">
                  Project Details
                </h3>
                <p className="text-base whitespace-pre-line">
                  {project.detailedInfo}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-serif">
                  My Role - {project.myRole}
                </h3>
                <p className="text-base whitespace-pre-line">
                  {project.myRoleDetailed}
                </p>
              </div>
            </div>
            <div className="md:w-[30%] my-4 md:my-0 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 font-serif">Links</h3>
                <div className="space-y-1 flex flex-col">
                  {project.links.map(({ label, url, type }, i) => (
                    <Link
                      href={url}
                      key={i}
                      className="truncate font-semibold font-serif text-blue-500 hover:text-blue-600 transition duration-75 flex items-center gap-1"
                    >
                      {type === "url" ? (
                        <ExternalLink className="w-4 h-4 text-blue-500" />
                      ) : type === "discord" ? (
                        <FaDiscord className="w-4 h-4 text-blue-500" />
                      ) : (
                        <FaGithub className="w-4 h-4 text-blue-500" />
                      )}
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-serif">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.involvedTech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-serif">Date</h3>
                <div className="flex flex-wrap gap-2">{project.date}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

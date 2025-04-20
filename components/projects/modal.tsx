import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";
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
    <div className="flex flex-col h-full max-h-[90vh] overflow-y-auto">
      <div className="px-6 py-8 border-b">
        <h2 className="text-3xl font-bold font-serif text-theme">
          {project.title}
        </h2>
        <p className="text-xl mt-2 text-muted-foreground font-serif">
          {project.description}
        </p>
        <div className="flex items-center mt-4 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{project.date}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
        <div className="lg:col-span-2 space-y-8">
          <section className="border bg-muted/30 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 font-serif border-b pb-2">
              Project Details
            </h3>
            <p className="text-base whitespace-pre-line leading-relaxed">
              {project.detailedInfo}
            </p>
          </section>

          <section className="border bg-muted/30 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 font-serif border-b pb-2">
              My Role - {project.myRole}
            </h3>
            <p className="text-base whitespace-pre-line leading-relaxed">
              {project.myRoleDetailed}
            </p>
          </section>
        </div>

        <div className="space-y-8">
          <section className="border bg-muted/30 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 font-serif border-b pb-2">
              Links
            </h3>
            <div className="grid grid-cols-1 gap-1">
              {project.links.map(({ label, url, type }, i) => (
                <Link
                  href={url}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-150 flex items-center gap-2 p-2 rounded-md hover:bg-muted/50"
                >
                  {type === "url" ? (
                    <ExternalLink className="w-5 h-5 flex-shrink-0" />
                  ) : type === "discord" ? (
                    <FaDiscord className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <FaGithub className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span className="truncate">{label}</span>
                </Link>
              ))}
            </div>
          </section>
          
          <section className="border bg-muted/30 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 font-serif border-b pb-2">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline"
                  className="py-1 text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
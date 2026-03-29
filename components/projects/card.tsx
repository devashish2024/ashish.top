import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectModal } from "./modal";
import { Project } from "./modal";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTitle className="sr-only">{project.title}</DialogTitle>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <CardContent className="p-0">
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={240}
                className="w-full h-48 object-cover transition-transform duration-200 hover:scale-105"
              />
            </div>
            <div className="p-6 space-y-3">
              <CardTitle className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {project.title}
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400 line-clamp-2">
                {project.description}
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-11/12 h-[90vh] p-0 outline-none">
        <ProjectModal project={project} />
      </DialogContent>
    </Dialog>
  );
}

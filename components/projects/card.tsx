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
        <Card className="cursor-pointer shadow-none">
          <CardContent className="space-y-2">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-md my-6"
            />
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-11/12 h-[90vh] p-0 outline-none">
      <ProjectModal project={project} />
        {/* <div className="relative hidden md:block w-full h-24 md:h-60">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="overflow-y-scroll">
          <ProjectModal project={project} />
        </div> */}
      </DialogContent>
    </Dialog>
  );
}

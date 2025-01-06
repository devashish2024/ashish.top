import WorkExperience from "@/components/portfolio/experience";
import ProjectList from "@/components/portfolio/projects";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import experiences from "@/data/experiences";
import { getProjects } from "@/lib/projects";

export default async function Page() {
  const projects = await getProjects();

  return (
    <div className="container px-4 mb-12 md:mt-4 space-y-4 min-h-screen">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Work</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section>
        <div className="text-3xl font-medium font-serif">Projects</div>
        <p className="mt-2 mb-6">
          Click a project to view all skills involved and a detailed info.
        </p>
        <ProjectList projects={projects} showSearch />
      </section>
      <section className="space-y-8">
        <div className="text-3xl font-medium font-serif">Work Experience</div>
        <WorkExperience experiences={experiences} />
      </section>
    </div>
  );
}

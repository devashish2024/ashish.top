import WorkExperience from "@/components/portfolio/experience";
import experiences from "@/data/experiences";

import { ProjectsList } from "@/components/projects/list";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function Page() {
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

      <section className="space-y-6">
        <div>
          <div className="space-y-2">
            <div className="text-3xl font-semibold font-serif">Work</div>
            <hr className="border-b w-full" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-2xl font-semibold font-serif">Projects</div>
            <p className="text-sm">Click a project to view it detailed.</p>
          </div>
          <ProjectsList />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-2xl font-semibold font-serif">Experience</div>
            <p className="text-sm">My work experience</p>
          </div>
          <WorkExperience experiences={experiences} />
        </div>
      </section>
    </div>
  );
}

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
            <BreadcrumbLink>Projects</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section>
        <div className="text-3xl font-medium font-serif">Projects</div>
        <p className="mt-2 mb-6">
          Click a project to view all skills involved and a detailed info.
        </p>
        <ProjectsList />
      </section>
    </div>
  );
}

import WorkExperience from "@/components/portfolio/experience";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import experiences from "@/data/experiences";

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
            <BreadcrumbLink>Work Experience</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="space-y-8">
        <div className="text-3xl font-medium font-serif">Work Experience</div>
        <WorkExperience experiences={experiences} />
      </section>
    </div>
  );
}

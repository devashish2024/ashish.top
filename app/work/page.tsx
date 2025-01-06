import WorkExperience from "@/components/portfolio/experience";
import ProjectList from "@/components/portfolio/projects";
import experiences from "@/data/experiences";
import projects from "@/data/projects";

export default function Page() {
  return (
    <div className="container px-4 mb-12 md:mt-8 space-y-8 min-h-screen">
      <section className="space-y-8">
        <div className="text-3xl font-medium font-serif">Work Experience</div>
        <WorkExperience experiences={experiences} />
      </section>

      <section>
        <div className="text-3xl font-medium font-serif">Projects</div>
        <p className="mt-2 mb-6">
          Click a project to view all skills involved and a detailed info.
        </p>
        <ProjectList projects={projects} showSearch />
      </section>
    </div>
  );
}

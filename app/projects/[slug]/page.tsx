import { getProjectBySlug, getProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProjectPage from "@/components/projects/projectPage";

export async function generateStaticParams() {
  const projects = await getProjects();
  const slugs = projects.map((project) => ({ slug: project.slug }));

  return slugs;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  return {
    metadataBase: new URL(
      process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000"
    ),
    title: project?.metadata.title,
    description: project?.metadata.summary,
    openGraph: {
      title: project?.metadata.title,
      description: project?.metadata.summary,
      images: [project?.metadata.image],
    },
    twitter: {
      card: "summary_large_image",
      images: [project?.metadata.image],
    },
  };
}

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;

  return (
    <div className="container px-4 mb-12 mt-2 md:mt-4 space-y-4 min-h-screen">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/work">Work</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>{metadata.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <ProjectPage {...metadata} content={content} />
    </div>
  );
}

export const dynamicParams = false;

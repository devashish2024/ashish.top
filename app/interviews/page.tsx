import Articles from "@/components/interviews/articles";
import VideoInterviews from "@/components/interviews/videointerviews";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Page() {
  return (
    <div className="container px-4 mb-12 mt-2 md:mt-4 space-y-4 min-h-screen">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Interviews</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className="space-y-6">
        <div>
          <div className="space-y-2">
            <div className="text-3xl font-semibold font-serif">Interviews</div>
            <hr className="border-b w-full" />
          </div>
        </div>

        <VideoInterviews />

        <Articles />
        {/* <InterviewList priority interviews={listedInterviews} />
          <ActionLink
            label={isExpanded ? "Collapse" : "Expand all articles"}
            href="#"
            onClick={() => toggleInterviews()}
          /> */}
      </section>
    </div>
  );
}

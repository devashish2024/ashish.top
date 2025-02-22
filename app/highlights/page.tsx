import Articles from "@/components/highlights/articles";
import Books from "@/components/highlights/books";
import VideoInterviews from "@/components/highlights/videointerviews";
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
            <BreadcrumbLink>Highlights</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className="space-y-6">
        <div>
          <div className="space-y-2">
            <div className="text-3xl font-semibold font-serif">Highlights</div>
            <hr className="border-b w-full" />
          </div>
        </div>

        <Books />

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

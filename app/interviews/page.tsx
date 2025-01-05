import Articles from "@/components/articles";
import VideoInterviews from "@/components/videointerviews";

export default function Page() {
  return (
    <div className="container px-4 mb-12 md:mt-8 space-y-8 min-h-screen">
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

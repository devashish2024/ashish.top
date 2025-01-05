"use client";

import { interviews } from "@/data/interviews";
import Link from "next/link";
import { useState } from "react";
import InterviewList from "./interviews";

export default function VideoInterviews() {
  const [interviewsExpanded, setInterviewsExpanded] = useState(false);
  const [listedInterviews, setListedInterviews] = useState<any>(
    interviews.slice(0, 4),
  );

  const toggleInterviews = () => {
    setInterviewsExpanded(!interviewsExpanded);
    setListedInterviews(
      interviewsExpanded ? interviews.slice(0, 4) : interviews,
    );
  };

  return (
    <div>
      <div className="text-2xl font-semibold font-serif">Videos</div>
      <p className="text-sm mt-2 mb-8">
        Already featured on ABP News, Amar Ujala, Dainik Jagran and more
        channels.
      </p>
      <InterviewList priority interviews={listedInterviews} />
      <Link
        className="justify-center lg:justify-start flex items-center group gap-2 mt-6 text-gray-900 dark:text-gray-300 underline-offset-4 hover:underline"
        href="#"
        onClick={() => toggleInterviews()}
      >
        {interviewsExpanded ? "Collapse" : "Expand all interviews"}
      </Link>
    </div>
  );
}

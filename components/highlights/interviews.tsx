import Image from "next/image";

import Halo from "@/components/ui/halo";
import Link from "next/link";

type InterviewListProps = {
  interviews: string[];
  priority?: boolean;
};

export default function InterviewList({
  interviews,
  priority,
}: InterviewListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {interviews.map((interview: string) => (
        <Link 
          key={interview} 
          href={interview} 
          target="_blank"
          className="group block"
        >
          <div className="aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-theme transition-colors">
            <Halo strength={10}>
              <Image
                draggable={false}
                src={`https://img.youtube.com/vi/${interview.split("v=")[1]}/0.jpg`}
                alt="Interview"
                width={1280}
                height={720}
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                priority={priority}
              />
            </Halo>
          </div>
        </Link>
      ))}
    </div>
  );
}

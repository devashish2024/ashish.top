import Image from "next/image";

import Halo from "@/components/ui/halo";
import Link from "next/link";

type InterviewListProps = {
  interviews: string[];
};

export default function InterviewList({ interviews }: InterviewListProps) {
  return (
    <ul className="animated-list --mx-4 md:-mx-6 flex flex-col md:flex-row snap-x snap-mandatory scroll-pl-6 grid-cols-2 flex-nowrap gap-9 overflow-x-scroll px-6 md:grid md:overflow-auto">
      {interviews.map((interview: string) => (
        <li
          key={interview}
          className="col-span-1 min-w-80 snap-start transition-opacity"
        >
          <Link href={interview} className="space-y-4" target="_blank">
            <div className="aspect-video overflow-hidden rounded-md bg-secondary">
              <Halo strength={10}>
                <Image
                  draggable={false}
                  src={`https://img.youtube.com/vi/${interview.split("v=")[1]}/0.jpg`}
                  alt="Interview"
                  layout="fill"
                  objectFit="cover"
                />
              </Halo>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

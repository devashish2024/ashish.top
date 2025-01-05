import Image from "next/image";
import avatarImage from "@/public/assets/avatar.png";
import ProjectList from "@/components/projects";
import InterviewList from "@/components/interviews";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const featuredProjects = [
  {
    slug: "clickcrystals",
    title: "Full-Stack Landing Website",
    summary:
      "Full-stack next.js website for a popular minecraft mod, built with Next.js, Framer Motion, TailwindCSS, Postgres, Prisma and NextAuth.",
    image: "/assets/projects/clickcrystals.png",
  },
  {
    slug: "supercord",
    title: "Supercord (verified discord bot)",
    summary:
      "A verified, fun and general-purpose discord bot and alternative to Dank Memer with 100+ servers and 15k+ users.",
    image: "/assets/projects/supercord.png",
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio v1",
    summary:
      "First version of my personal portfolio website built with Next.js, TailwindCSS and Framer Motion.",
    image: "/assets/projects/portfolio-v1.png",
  },
];

const featuredInterviews = [
  "https://www.youtube.com/watch?v=x-hxsph7y38",
  "https://www.youtube.com/watch?v=yHSHZ1rVrPs",
  "https://www.youtube.com/watch?v=oOjwzJX6Jxc",
  "https://www.youtube.com/watch?v=UBULwjwGg0E",
  // "https://www.youtube.com/watch?v=lnx5byB6-hA",
  // "https://www.youtube.com/watch?v=1wKvqLa9rd8",
];

export default function Page() {
  return (
    <div className="container px-4 mb-12 md:mt-8 space-y-12 min-h-screen">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Image
            src={avatarImage}
            alt="Avatar"
            priority
            className="size-16 rounded-full ring ring-primary"
          />
          <div className="font-serif">
            <div className="text-2xl font-medium">Ashish Agarwal</div>
            <div className="text-xl text-gray-500">@devashish2024</div>
          </div>
        </div>
        <p className="text-lg">
          Welcome to my personal, new portfolio! 🌟 Here you'll find information
          about my projects, interests, and more. Feel free to explore and
          connect with me on social media. 🌐
        </p>
        <p className="text-lg">
          I'm a young software engineer with a passion for building web
          applications. I've been interviewed multiple times and featured in
          various magazines, articles, and news channels due to my skills at
          such a young age. I'm also given the title "computer boy aligarh" by
          the social media and news channels that you can search on Google to
          find out most of my interviews. 🚀
        </p>
        <div className="flex gap-4">
          <Link
            href="/about"
            className="justify-center lg:justify-start flex items-center group gap-2 mt-6 text-gray-300 underline-offset-4 hover:underline"
          >
            About me{" "}
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="inline-block align-text-bottom size-4 -translate-x-1 group-hover:translate-x-0 motion-safe:transition"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12H3"
                className="scale-x-0 origin-right [transform-box:fill-box] group-hover:scale-x-100 motion-safe:transition"
              />
            </svg>
          </Link>
          <Link
            href="/sign"
            className="justify-center lg:justify-start flex items-center group gap-2 mt-6 text-gray-300 underline-offset-4 hover:underline"
          >
            Sign my guestbook{" "}
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="inline-block align-text-bottom size-4 -translate-x-1 group-hover:translate-x-0 motion-safe:transition"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12H3"
                className="scale-x-0 origin-right [transform-box:fill-box] group-hover:scale-x-100 motion-safe:transition"
              />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="justify-center lg:justify-start flex items-center group gap-2 mt-6 text-gray-300 underline-offset-4 hover:underline"
          >
            Contact me{" "}
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="inline-block align-text-bottom size-4 -translate-x-1 group-hover:translate-x-0 motion-safe:transition"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12H3"
                className="scale-x-0 origin-right [transform-box:fill-box] group-hover:scale-x-100 motion-safe:transition"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Pinned Interviews Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-medium text-primary mb-4 font-serif">
          Pinned Interviews
        </h2>
        <InterviewList interviews={featuredInterviews} />
        <Link
          href="/interviews"
          className="justify-center lg:justify-start flex items-center group gap-2 mt-6 text-gray-300 underline-offset-4 hover:underline"
        >
          View all interviews{" "}
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="inline-block align-text-bottom size-4 -translate-x-1 group-hover:translate-x-0 motion-safe:transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12H3"
              className="scale-x-0 origin-right [transform-box:fill-box] group-hover:scale-x-100 motion-safe:transition"
            />
          </svg>
        </Link>
      </div>
      {/* Featured Projects Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-medium text-primary mb-4 font-serif">
          Featured Projects
        </h2>
        <ProjectList projects={featuredProjects} />
        <Link
          href="/projects"
          className="justify-center lg:justify-start flex items-center group gap-2 mt-6 text-gray-300 underline-offset-4 hover:underline"
        >
          View all projects{" "}
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="inline-block align-text-bottom size-4 -translate-x-1 group-hover:translate-x-0 motion-safe:transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12H3"
              className="scale-x-0 origin-right [transform-box:fill-box] group-hover:scale-x-100 motion-safe:transition"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

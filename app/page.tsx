import avatarImage from "@/public/assets/avatar.png";

import Image from "next/image";
import ProjectList from "@/components/portfolio/projects";
import InterviewList from "@/components/interviews/interviews";
import ActionLink from "@/components/ui/actionlink";
import WorkExperience from "@/components/portfolio/experience";

import projects from "@/data/projects";
import { interviews } from "@/data/interviews";
import experiences from "@/data/experiences";

const featuredProjects = projects.slice(0, 2);
const featuredInterviews = interviews.slice(0, 4);
const currentRole = experiences.slice(0, 1);

export default function Page() {
  return (
    <div className="container px-4 mb-12 mt-2 md:mt-4 space-y-12 min-h-screen">
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
          Welcome to my brand-new portfolio! 🌟 Here, you can discover details
          about my projects, interests, and achievements. Feel free to explore
          and connect with me on social media to stay updated! 🌐✨
        </p>
        <p className="text-lg">
          I'm a young and passionate software engineer with a knack for building
          innovative web applications. Over the years, I've been recognized for
          my skills and dedication, earning features in magazines, articles, and
          news channels. The media has even honored me with the title "computer
          boy of Aligarh." Search me on Google by my title to find more about my
          journey and interviews! 🚀
        </p>

        <WorkExperience experiences={currentRole} />

        <div className="flex flex-col sm:flex-row gap-4">
          {/* href: "/sign", label: "Sign my guestbook" */}
          {[
            { href: "/about", label: "About me" },
            { href: "/work", label: "My projects" },
            { href: "/contact", label: "Contact me" },
          ].map((link, index) => {
            return (
              <ActionLink
                className="justify-start mt-0"
                key={index}
                {...link}
              />
            );
          })}
        </div>
      </div>

      {/* Pinned Interviews Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-medium text-primary mb-4 font-serif">
          Pinned Interviews
        </h2>
        <InterviewList interviews={featuredInterviews} />
        <ActionLink label="View all interviews" href="/interviews" />
      </div>

      {/* Featured Projects Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-medium text-primary mb-4 font-serif">
          Featured Projects
        </h2>
        <ProjectList projects={featuredProjects} />
        <ActionLink label="View all projects" href="/work" />
      </div>
    </div>
  );
}

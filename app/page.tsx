import avatarImage from "@/public/assets/avatar.png";

import Image from "next/image";
import InterviewList from "@/components/highlights/interviews";
import ActionLink from "@/components/ui/actionlink";
import WorkExperience from "@/components/portfolio/experience";
import Link from "next/link";

import { interviews } from "@/data/interviews";
import experiences from "@/data/experiences";
import { ProjectsList } from "@/components/projects/list";

const featuredInterviews = interviews.slice(0, 4);
const currentRole = experiences.slice(0, 1);

export default async function Page() {
  return (
    <div className="container px-4 mb-16 mt-8 md:mt-12 max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="space-y-8 mb-20">
        <div className="flex items-start space-x-6">
          <Image
            src={avatarImage}
            alt="Avatar"
            priority
            className="size-20 rounded-full ring-2 ring-gray-200 dark:ring-gray-700"
          />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 mb-2">
              Ashish Agarwal
            </h1>
            <Link
              href="https://github.com/devashish2024"
              target="_blank"
              className="text-lg text-gray-600 dark:text-gray-400 hover:text-theme transition-colors"
            >
              @devashish2024
            </Link>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
              Passionate software engineer building innovative web applications. 
              Known as the "Computer Boy of Aligarh" and featured across media outlets.
            </p>
          </div>
        </div>

        {/* Current Role */}
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
          <WorkExperience experiences={currentRole} />
        </div>

        {/* Primary Actions */}
        <div className="flex flex-wrap gap-3">
          <ActionLink 
            href="/work" 
            label="View Projects" 
            className="bg-theme text-white px-6 py-3 rounded-lg hover:bg-theme/90 transition-colors no-underline font-medium"
            icon={false}
          />
          <ActionLink 
            href="/about" 
            label="About Me" 
            className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors no-underline"
            icon={false}
          />
          <ActionLink 
            href="/contact" 
            label="Get in Touch" 
            className="text-theme hover:underline"
          />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-20">
        <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-8">
          Featured Projects
        </h2>
        <ProjectsList isHome />
        <div className="mt-8 text-center">
          <ActionLink 
            label="View all projects" 
            href="/work" 
            className="text-gray-600 dark:text-gray-400 hover:text-theme transition-colors"
          />
        </div>
      </section>

      {/* Media Features */}
      <section>
        <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-8">
          Featured Interviews
        </h2>
        <InterviewList interviews={featuredInterviews} />
        <div className="mt-8 text-center">
          <ActionLink 
            label="View all interviews" 
            href="/highlights" 
            className="text-gray-600 dark:text-gray-400 hover:text-theme transition-colors"
          />
        </div>
      </section>
    </div>
  );
}

import Certifications from "@/components/portfolio/certificates";
import Skills from "@/components/portfolio/skills";
import ActionLink from "@/components/ui/actionlink";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Page() {
  return (
    <div className="container px-4 mb-16 mt-8 md:mt-12 max-w-4xl mx-auto">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>About</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-12">
        <section>
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 mb-8">
            About Me
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-6">
            <p className="text-xl leading-relaxed">
              Hi there! I'm Ashish Agarwal, a 13-year-old self-taught web developer from Aligarh, India. 
              I've been passionate about coding since I was 8 years old and love building innovative web applications.
            </p>
            <p>
              Over the years, my work has gained recognition across various media outlets. 
              I've been featured in magazines, articles, and news channels, earning the title 
              "Computer Boy of Aligarh" for my dedication and achievements in technology.
            </p>
          </div>
        </section>

        <Skills />

        <section>
          <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-6">
            Professional Experience
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              I've completed an internship at Safar as an Operations Intern and am currently 
              working as a MERN Developer Intern at The Entrepreneurship Network.
            </p>
            <p>
              I've contributed to large-scale community projects including Supercord 
              (a Discord bot with 75+ guilds and 15k+ users) and ClickCrystals 
              (a Minecraft mod with 150k+ downloads and 4k+ community members).
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-6">
            Certifications
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I've earned professional certifications to solidify my expertise:
          </p>
          <Certifications />
        </section>

        <section>
          <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-6">
            Published Works
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            I've authored 9 books on programming, all available on Google Play Books.
          </p>
        </section>

        <section className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-8 border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I'm always learning and looking for new opportunities. 
            Feel free to reach out if you'd like to collaborate or just say hello!
          </p>
          <div className="flex flex-wrap gap-3">
            <ActionLink 
              href="/work" 
              label="View My Work" 
              className="text-theme hover:underline"
            />
            <ActionLink 
              href="/highlights" 
              label="Media Features" 
              className="text-theme hover:underline"
            />
            <ActionLink 
              href="/sign" 
              label="Sign Guestbook" 
              className="text-theme hover:underline"
            />
            <ActionLink 
              href="/contact" 
              label="Contact Me" 
              className="text-theme hover:underline"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
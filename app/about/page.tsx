import Certifications from "@/components/certificates";
import Skills from "@/components/skills";
import ActionLink from "@/components/ui/actionlink";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container px-4 mb-12 md:mt-4 space-y-4 min-h-screen">
      <Breadcrumb>
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
      <div className="space-y-4">
        <Skills />
        <p className="text-lg">
          Hi there! 👋 I'm Ashish Agarwal, a 13-year-old self-taught and
          accomplished web developer from Aligarh, India. Currently a class 8th
          student, I’ve been passionate about coding since I was just 8 years
          old. I love building innovative web applications and crafting
          beautiful designs, bringing my ideas to life through code. 💻
        </p>
        <p className="text-lg">
          Over the years, my work and skills have been recognized widely. I've
          been interviewed and featured in various magazines, articles, and news
          channels thanks to my dedication and the unwavering support of my
          parents. The media has even dubbed me the "computer boy of Aligarh."
          You can search for my interviews on Google to learn more about my
          journey! 🚀{" "}
          <ActionLink
            className="inline-flex justify-start mt-0"
            label="Interviews"
            href="/interviews"
          />
        </p>
        <p className="text-lg">
          I’ve explored and mastered a range of technologies, from JavaScript,
          TypeScript, and Python to frameworks and tools like React, Next.js,
          TailwindCSS, Framer Motion, Supabase, and Firebase. I’ve also earned 4
          professional certifications on Coursera to further solidify my
          expertise. I’m passionate about building pixel-perfect, responsive,
          and dynamic web designs that deliver an exceptional user experience.
          🎨
        </p>
        <p className="text-lg">
          List of professional certificates I've completed by 2025:
        </p>
        <Certifications />
        <p className="text-lg">
          Even after that, I've done an internship at Safar as a Operations
          Intern (3-months internship) and currently working on a Frontend
          Developer Internship at Beyondriffs (6-months internship). I've also
          built websites for several projects and clients, including a website I
          built for the Goverment College my sister studies in. 🌐{" "}
          <ActionLink
            className="inline-flex justify-start mt-0"
            label="Work"
            href="/work"
          />
        </p>
        <p className="text-lg">
          I've also contributed to some large projects which involve a large
          scale of community. Supercord, a verified discord bot with over 75+
          guilds installed and 15k+ users. ClickCrystals, a minecraft mod with
          over 150k+ downloads and 4k+ discord community. I've also contributed
          to many more projects privately as well. ️‍🔥{" "}
          <ActionLink
            className="inline-flex justify-start mt-0"
            label="Projects"
            href="/projects"
          />
        </p>
        <p className="text-lg">
          Last but not least, I've also authored a total of 9 books related to
          programming! All of them are available for purchase on Google Play
          Books, go ahead and buy them now! 📚
        </p>
        <p className="text-lg">
          So far, this is a incredible list of achievements for a 13-year old
          kid like me. I'm proud of myself and my parents are proud of me too.
          I'm looking forward to learning more and building more amazing
          projects in the future. 🚀
        </p>
        <p className="text-lg">
          This is still not the end. I'm still learning and actively applying
          for new jobs, internships and contracts. If you have any opportunity
          for me, please let me know. I'm always ready to learn and work. 🤝{" "}
          <ActionLink
            className="inline-flex justify-start mt-0"
            label="Contact me"
            href="/contact"
          />
        </p>
      </div>
    </div>
  );
}

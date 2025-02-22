import { ProjectCard } from "./card";
import { Project } from "./modal";

const projects: Project[] = [
  {
    title: "Portfolio v2",
    description:
      "Second, modern version of my Next.js portfolio, featuring a guestbook, blog, and detailed information about me.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Web Development"],
    image: "/assets/projects/portfolio-v2.png",
    detailedInfo:
      "Portfolio v2 is a refined and modernized version of my portfolio website. It includes advanced animations, a guestbook feature, a blog, and an improved UI for better user experience.",
    involvedTech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    myRole: "Developer",
    myRoleDetailed:
      "Developed the UI/UX, implemented a guestbook and blog system, and optimized animations and page transitions.",
    links: [
      {
        label: "Demo",
        url: "https://ashish.top",
        type: "url",
      },
      {
        label: "Source",
        url: "https://github.com/devashish2024/ashish.top",
        type: "source",
      },
    ],
    date: "Jan 2, 2025",
  },
  {
    title: "ClickCrystals",
    description:
      "Full-stack next.js website for a popular minecraft mod, built with Next.js, Framer Motion, TailwindCSS, Postgres, Prisma and NextAuth.",
    tags: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Postgres",
      "Prisma",
      "NextAuth",
    ],
    image: "/assets/projects/clickcrystals.png",
    detailedInfo:
      "This is a full-stack website for a popular minecraft mod. It is built with Next.js, Framer Motion, TailwindCSS, Postgres, Prisma and NextAuth.\n\nThe website includes features like user authentication, scripting playground, configs explorer and more.\n\nIt is for the minecraft mod ClickCrystals, which is a mod that gives significiant advantages in the game over other players.",
    involvedTech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Postgres",
      "Prisma",
      "NextAuth",
    ],
    myRole: "Web Developer",
    myRoleDetailed:
      "In this project, I worked on the both sides of the website, the front-end and the back-end. All my contributions were to the website and not the actual minecraft mod.\n\nI also implemented some features that were used in the actual mod like (i.) Configs API for the mod and (ii.) Scripts API for the mod",
    links: [
      {
        label: "Demo",
        url: "https://clickcrystals.xyz",
        type: "url",
      },
      {
        label: "Source",
        url: "https://github.com/thetrouper/clickcrystals.xyz",
        type: "source",
      },
      {
        label: "Discord",
        url: "https://discord.gg/clickcrystals",
        type: "discord",
      },
    ],
    date: "July 25, 2024",
  },
  {
    title: "MusicMaster Landing Page",
    description:
      "Landing page built with Next.js, Framer Motion, and TailwindCSS. Created in <2hours as a task for an internship application at Beyondriffs.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Web Development"],
    image: "/assets/projects/musicmaster.png",
    detailedInfo:
      "MusicMaster is a landing page developed using Next.js, Framer Motion, and TailwindCSS. The project was designed as part of an internship application at Beyondriffs, showcasing smooth animations, a modern UI, and responsive design.\n\nI did not put too much designs in it and it was made in just nearly 2 hours or less.",
    involvedTech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    myRole: "Developer",
    myRoleDetailed:
      "Developed the entire landing page, focusing on UI design, animations, and responsiveness.",
    links: [
      {
        label: "Demo",
        url: "https://musicmastersite.vercel.app/",
        type: "url",
      },
      {
        label: "Source",
        url: "https://github.com/devashish2024/musicmaster",
        type: "source",
      },
    ],
    date: "Sep 19, 2024",
  },

  {
    title: "Supercord (Verified Discord Bot)",
    description:
      "A verified, fun, and general-purpose Discord bot, serving as an alternative to Dank Memer with 100+ servers and 15k+ users. (RESIGNED)",
    tags: ["Python", "Discord Bots", "AI", "Fun Bot"],
    image: "/assets/projects/supercord.png",
    detailedInfo:
      "Supercord is a powerful, multipurpose Discord bot that provides entertainment, economy, and utility commands. It is verified by Discord and used across 100+ servers with over 15,000 users.",
    involvedTech: ["Python", "Discord.py", "Postgres", "Jishaku"],
    myRole: "Bot Developer",
    myRoleDetailed:
      "Developed and maintained core functionalities, including currency systems, mini-games, and administrative tools.",
    links: [
      {
        label: "Website",
        url: "https://supercord.lol",
        type: "url",
      },
      {
        label: "Discord",
        url: "https://discord.gg/super-florr-players-1079971830384828497",
        type: "discord",
      },
    ],
    date: "March, 2024 (resigned)",
  },
  {
    title: "Periodic Table Visualizer & SVG Generator",
    description:
      "A periodic table visualizer and SVG generator. Uses Python to generate SVGs and HTML, CSS, and JS for visualization.",
    tags: ["Python", "SVG", "Web Development"],
    image: "/assets/projects/periodictable.png",
    detailedInfo:
      "This project allows users to visualize periodic table elements dynamically. SVGs for each element are generated using Python's svgwrite library and rendered on the web with HTML, CSS, and JavaScript.",
    involvedTech: ["Python", "svgwrite", "HTML", "CSS", "JavaScript"],
    myRole: "Developer",
    myRoleDetailed:
      "Created the complete SVG generator using Python and implemented a web-based viewer for interactive exploration.",
    links: [
      {
        label: "Demo",
        url: "https://vortexprime24.github.io/periodic-table/",
        type: "url",
      },
      {
        label: "Source",
        url: "https://github.com/vortexprime24/periodic-table",
        type: "source",
      },
    ],
    date: "Dec 11, 2024",
  },
  {
    title: "Portfolio v1",
    description:
      "First version of my personal portfolio website, built with Next.js, TailwindCSS, and Framer Motion.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Web Development"],
    image: "/assets/projects/portfolio-v1.png",
    detailedInfo:
      "Portfolio v1 was my initial attempt at building a personal portfolio. It highlights my projects and skills with an interactive, animated layout.",
    involvedTech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    myRole: "Developer",
    myRoleDetailed:
      "Designed and built the entire portfolio, focusing on performance, animations, and responsive design.",
    links: [
      {
        label: "Demo",
        url: "https://v1.ashish.top",
        type: "url",
      },
      {
        label: "Source",
        url: "https://github.com/devashish2024/v1.ashish.top",
        type: "source",
      },
    ],
    date: "March 31, 2024",
  },
];

export function ProjectsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
}

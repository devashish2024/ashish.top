import { Project } from "@/components/projects/modal";

export const projects: Project[] = [
  {
    title: "Pulse Client",
    description: "Full-stack website for a paid minecraft cheating solution having a large community of over 2k+ members and growing!",
    tags: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Web Development",
      "Framer Motion",
      "Clerk",
      "Postgres",
      "Prisma",
    ],
    image: "/assets/projects/pulse.png",
    detailedInfo:
      "Pulse Client is a paid Minecraft cheating solution that offers a range of features and functionalities. The website serves as a platform for users to manage the client, check their subscription, update IP, username, email, hardware ID and more.",
    myRole: "Web Developer",
    myRoleDetailed:
      "Solely built the complete website on both sides: frontend and backend.\n\nImplemented authentication with Clerk, Prisma with Neon Postgres for database, and Next.js for the most.\n\nAdded nice features and coded APIs to let the application communicate with the website.",
    involvedTech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Clerk",
      "Postgres",
      "Prisma",
    ],
    links: [
      {
        label: "Demo",
        url: "https://pulseclient.cc",
        type: "url",
      },
      {
        label: "Discord",
        url: "https://discord.gg/HBhRh694Bh",
        type: "discord",
      },
    ],
    date: "March 25, 2025",
  },
  {
    title: "Walecz Ghost",
    description: "Built a complete website for a popular minecraft and CS2 cheat, with a large community of over 10k+ members.",
    tags: ["React", "TailwindCSS", "Framer Motion", "Web Development"],
    image: "/assets/projects/walecz-ghost.png",
    detailedInfo:
      "Walecz Ghost is a popular, free minecraft auto clicker and CS2 cheat which is used by many players. Our discord community has over 10k+ members and we have more than 500 customers who are enjoying our premium, paid clicker as well.",
    myRole: "Web Developer",
    myRoleDetailed:
      "Solely worked on the complete website, including the design and animations.",
    involvedTech: ["React", "Tailwind CSS", "Framer Motion"],
    links: [
      {
        label: "Demo",
        url: "https://waleczghost.com",
        type: "url",
      },
      {
        label: "Discord",
        url: "https://discord.gg/7kppf2fWXK",
        type: "discord",
      },
    ],
    date: "Jan 17, 2025",
  },
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
      "Solely developed the whole website on both sides: frontend and backend.\n\nImplemented authentication and guestbook, contact form, blog and much more. Also prevented inapportiate user content by using Perspective API.",
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
      "Solely built the complete frontend + backend, combining design and logic. Implemented authentication with NextAuth.js, Configs API + uploading system, scripting playground and more.\n\nI also worked on all of the frontend in this website, solely. Also made some API routes where the mod can communicate with the website.",
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
    title: "Supercord Discord Bot",
    description:
      "A verified, fun, and general-purpose Discord bot, serving as an alternative to Dank Memer with 100+ servers and 15k+ users.",
    tags: ["Python", "Discord Bots"],
    image: "/assets/projects/supercord.png",
    detailedInfo:
      "Supercord is a powerful, multipurpose Discord bot that provides entertainment, economy, and utility commands. It's a verified discord bot used across 100+ servers by over 15,000 users.",
    involvedTech: ["Python", "discord.py", "Postgres", "Debugging"],
    myRole: "Bot Developer",
    myRoleDetailed:
      "Developed and maintained core functionalities, including currency systems, mini-games, and administrative tools.\n\nI've stopped working on Supercord since March 2024.",
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
    date: "September, 2023",
  },
  {
    title: "Portfolio v1",
    description:
      "First version of my personal portfolio website, built with Next.js, TailwindCSS, and Framer Motion.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Web Development"],
    image: "/assets/projects/portfolio-v1.png",
    detailedInfo:
      "Portfolio v1 was my initial attempt at building a personal portfolio. It highlights my projects and skills with an interactive, animated layout.",
    involvedTech: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "NextAuth",
      "Firestore",
    ],
    myRole: "Developer",
    myRoleDetailed:
      "Solely built the complete portfolio, involving both frontend and backend. Contact form, guestbook, design, authentication, database and everything.",
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

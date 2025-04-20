export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  isCurrent?: boolean;
};

const experiences: Experience[] = [
  {
    title: "MERN Developer Intern",
    company: "The Entrepreneurship Network",
    location: "Remote",
    period: "April 2024 - Present",
    description:
      "Collaborating daily with other interns and working on a variety of projects with the MERN stack.",
    isCurrent: true,
  },
  {
    title: "Operations Intern",
    company: "Safar",
    location: "Remote",
    period: "Jun 2024 - Sep 2024",
    description:
      "Participated in weekly strategy meetings and led the organization of data using spreadsheets and Google Forms. Created and presented impactful presentations, collaborating with team members to streamline workflows and achieve operational objectives.",
    isCurrent: false,
  },
];

export default experiences;

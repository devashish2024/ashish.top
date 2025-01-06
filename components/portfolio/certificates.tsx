import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const certificates = [
  {
    title: "Google IT Support",
    issuer: "Google",
    image: "/assets/badges/gitsupport.png",
    link: "https://www.credly.com/badges/36b52ef9-b4fe-475a-aae1-400452724d07",
  },
  {
    title: "Google Data Analytics",
    issuer: "Google",
    image: "/assets/badges/gdataanalytics.png",
    link: "https://www.coursera.org/professional-certificates/google-data-analytics",
  },
  {
    title: "Google AI Essentials",
    issuer: "Google",
    image: "/assets/badges/gaiessentials.png",
    link: "https://www.credly.com/badges/824989ca-1c6d-419e-98c9-1b9c0369b3b4",
  },
  {
    title: "Meta Frontend Developer",
    issuer: "Meta",
    image: "/assets/badges/metafrontend.png",
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
  },
];

export default function Certifications() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {certificates.map((cert, index) => (
        <Link
          href={cert.link}
          target={cert.link != "#" ? "_blank" : undefined}
          key={index}
          className="flex items-center p-3 rounded-lg transition-all border hover:scale-105 duration-75"
        >
          <Image
            src={cert.image}
            alt={`${cert.issuer} logo`}
            width={40}
            height={40}
            className="mr-3"
          />
          <div className="flex-grow">
            <h3 className="text-sm font-medium">{cert.title}</h3>
            <Badge variant="secondary" className="mt-1 text-xs">
              {cert.issuer}
            </Badge>
          </div>
        </Link>
      ))}
    </div>
  );
}

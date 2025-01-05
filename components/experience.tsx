type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  location: string;
  isCurrent?: boolean;
};

type WorkExperienceProps = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <div className="space-y-4">
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative space-y-4 border p-6 ${experience.isCurrent && "border-green-300 dark:border-green-800"}`}
        >
          <div className="space-y-1.5">
            <time className="block text-sm text-gray-950 dark:text-gray-400 font-serif">
              {experience.period}
            </time>
            <div className={`space-y-1 text-gray-700 dark:text-gray-100`}>
              <h3 className="font-semibold font-serif text-lg">
                {experience.title}
              </h3>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-400">
                — {experience.company} · {experience.location}
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-800 tracking-tight dark:text-gray-400 font-light">
            {experience.description}
          </p>
        </div>
      ))}
    </div>
  );
}

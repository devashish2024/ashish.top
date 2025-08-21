import { Experience } from "@/data/experiences";

type WorkExperienceProps = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <div className="space-y-3">
      {experiences.map((experience, index) => (
        <div key={index} className="space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                {experience.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {experience.company} · {experience.location}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {experience.isCurrent && (
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
              )}
              <time className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                {experience.period}
              </time>
            </div>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {experience.description}
          </p>
        </div>
      ))}
    </div>
  );
}

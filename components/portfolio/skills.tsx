"use client";

const skills = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "MongoDB", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "Tools" },
  { name: "Firebase", category: "Backend" },
  { name: "Flask", category: "Backend" },
];

export default function Skills() {
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-8">
        Technologies & Skills
      </h2>
      
      <div className="space-y-6">
        {categories.map(category => (
          <div key={category}>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wider">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter(skill => skill.category === category)
                .map(skill => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm rounded-full border border-gray-200 dark:border-gray-700 hover:border-theme transition-colors"
                  >
                    {skill.name}
                  </span>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

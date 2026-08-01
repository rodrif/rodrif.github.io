import { cvData } from "@/app/data/cv-data";

export default function SkillsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Habilidades
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {cvData.skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full shadow-md font-medium hover:shadow-lg transition-shadow"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

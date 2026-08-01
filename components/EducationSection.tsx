import { cvData } from "@/app/data/cv-data";

export default function EducationSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Educación
      </h2>
      <div className="space-y-6">
        {cvData.education.map((edu, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              {edu.degree}
            </h3>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-1">
              {edu.institution}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {edu.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

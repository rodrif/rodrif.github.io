import { cvData } from "@/app/data/cv-data";

export default function ExperienceSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Experiencia Laboral
      </h2>
      <div className="space-y-6">
        {cvData.experience.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg relative"
          >
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block" />
            <div className="md:ml-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {exp.role}
                </h3>
                <span className="text-sm text-slate-500 dark:text-slate-400 mt-1 md:mt-0">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                {exp.company}
              </p>
              {exp.duration && (
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Duración: {exp.duration}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { CVData } from "@/app/data/cv-data";

interface ExperienceSectionProps {
  data: CVData;
}

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Experiencia Laboral
      </h2>
      <div className="space-y-6">
        {data.experience.map((exp, index) => (
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
              {exp.location && (
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {exp.location}
                </p>
              )}
              {exp.description && exp.description.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  {exp.description.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

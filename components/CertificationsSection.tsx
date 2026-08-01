import { cvData } from "@/app/data/cv-data";

export default function CertificationsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Certificaciones e Idiomas
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            Certificaciones
          </h3>
          <ul className="space-y-2">
            {cvData.certifications.map((cert, index) => (
              <li
                key={index}
                className="text-slate-700 dark:text-slate-300 flex items-start gap-2"
              >
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <div>
                  <span className="font-medium">{cert.name}</span>
                  {cert.issuer && (
                    <span className="text-slate-500 dark:text-slate-400 text-sm">
                      {" "}
                      - {cert.issuer}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
              />
            </svg>
            Idiomas
          </h3>
          <ul className="space-y-2">
            {cvData.languages.map((lang, index) => (
              <li
                key={index}
                className="text-slate-700 dark:text-slate-300 flex items-center gap-2"
              >
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span className="font-medium">{lang.name}</span>
                {lang.level && (
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    {" "}
                    - {lang.level}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import { cvData } from "@/app/data/cv-data";

export default function HeaderSection() {
  return (
    <section className="text-center mb-20">
      <div className="mb-8">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-4xl font-bold text-slate-600 dark:text-slate-300">
          {cvData.personal.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
        {cvData.personal.name}
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
        {cvData.personal.currentRole}
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
        <span className="flex items-center gap-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {cvData.personal.location}
        </span>
        <span className="flex items-center gap-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a
            href={`mailto:${cvData.personal.email}`}
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            {cvData.personal.email}
          </a>
        </span>
        <span className="flex items-center gap-2">
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <a
            href={cvData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </span>
      </div>
    </section>
  );
}

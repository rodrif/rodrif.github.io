export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="max-w-4xl mx-auto px-6 py-20">
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Facundo Rodriguez
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300">
            Software Developer & Technology Enthusiast
          </p>
        </section>

        <section className="mb-16 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            I'm a passionate software developer focused on building modern web applications
            and creating elegant solutions to complex problems. I love working with cutting-edge
            technologies and continuously learning to stay ahead in the ever-evolving tech landscape.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Frontend Development
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                React, Next.js, TypeScript, Tailwind CSS, Modern JavaScript
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Backend Development
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Node.js, API Design, Database Management, Server Architecture
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Tools & Technologies
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Git, CI/CD, Testing, Docker, Cloud Services
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Soft Skills
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Problem Solving, Team Collaboration, Communication, Agile Methodologies
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Get In Touch
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/rodrif"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact@example.com"
              className="px-8 py-3 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-full font-semibold hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-colors"
            >
              Email
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

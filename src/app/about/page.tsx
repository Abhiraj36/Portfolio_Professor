import {
  BookOpen,
  GraduationCap,
  Flame,
  Users,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen animated-gradient bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-gray-900 dark:via-black dark:to-gray-950 text-slate-800 dark:text-gray-300 px-6 py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Title */}
        <header className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            About Dr. V. N. Lakshmi Durga
          </h1>
          <p className="text-lg text-slate-600 dark:text-gray-400">
            Pioneering academic and researcher in sustainable energy systems
          </p>
        </header>

        {/* Academic + Research Summary */}
        <section className="space-y-6 text-lg leading-relaxed">
          <p>
            <strong className="text-slate-900 dark:text-white">Dr. V. N. Lakshmi Durga</strong> is an accomplished educator and researcher with
            <span className="font-semibold text-slate-900 dark:text-white"> over 15 years</span> of experience across premier institutions. Her expertise spans
            <span className="text-slate-900 dark:text-white"> renewable energy</span>,
            <span className="text-slate-900 dark:text-white"> solar drying technologies</span>,
            <span className="text-slate-900 dark:text-white"> thermal energy systems</span>, and
            <span className="text-slate-900 dark:text-white"> biofuels</span>.
          </p>

          <p>
            She holds a <strong className="text-slate-900 dark:text-white">Ph.D. in Mechanical Engineering</strong> from
            <span className="text-slate-900 dark:text-white"> NIT Durgapur (2019)</span>, and an
            <strong className="text-slate-900 dark:text-white"> M.Tech in Fluid & Thermal Engineering</strong> from
            <span className="text-slate-900 dark:text-white"> IIT Guwahati</span>. Her academic path reflects a fusion of deep theoretical foundation with real-world problem-solving in sustainable technologies.
          </p>
        </section>

        {/* Highlighted Contributions */}
        <section className="grid gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all">
            <Flame className="w-6 h-6 text-yellow-500 dark:text-yellow-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-gray-100">Clean Energy Innovator</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400">
                Extensive research in solar drying, biofuels, and thermal storage aimed at climate-friendly energy solutions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all">
            <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-gray-100">Research Excellence</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400">
                Published in top-tier <span className="text-slate-900 dark:text-white">SCI & Scopus-indexed journals</span> and presented at global conferences.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all">
            <Users className="w-6 h-6 text-green-600 dark:text-green-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-gray-100">Mentorship & Collaboration</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400">
                Actively guides research scholars, fosters interdisciplinary projects, and partners with industry and academia.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all">
            <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-gray-100">Sustainability Advocate</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400">
                Promotes sustainable development education and believes engineering must serve real-world social challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Line */}
        <footer className="pt-10 text-center">
          <p className="text-slate-500 dark:text-gray-500 italic">
            “Engineering is not just about innovation — it’s about impact.”
          </p>
        </footer>
      </div>
    </main>
  );
}

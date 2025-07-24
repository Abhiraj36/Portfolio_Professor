
import Image from "next/image";
import {
  BookOpen,
  GraduationCap,
  Flame,
  Users,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen animated-gradient bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-slate-900 dark:text-gray-100 px-6 py-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <header className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
  {/* Profile Image */}
  <div className="flex-shrink-0">
    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg transform transition-transform duration-300 hover:scale-105">
  <Image
    src="/display_picture.jpg"
    alt="Dr. V. N. Lakshmi Durga"
    width={192}
    height={192}
    className="object-cover object-[60%_top] w-full h-full"
    priority
  />
</div>

  </div>

  {/* Text Content */}
  <div className="space-y-3">
    <h1 className="text-4xl md:text-5xl font-bold">
      Dr. V. N. Lakshmi Durga
    </h1>
    <h2 className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium">
      Assistant Professor, Department of Mechanical Engineering
    </h2>
    <p className="text-base md:text-lg text-slate-700 dark:text-gray-300">
      Pioneering academic and researcher in sustainable energy systems
    </p>
  </div>
</header>


        {/* Academic & Research Summary */}
        <section className="space-y-6 text-lg leading-relaxed text-slate-700 dark:text-gray-300">
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

        {/* Highlights Section */}
        <section className="grid gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all">
            <Flame className="w-6 h-6 text-yellow-500 dark:text-yellow-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Clean Energy Innovator</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400">
                Extensive research in solar drying, biofuels, and thermal storage aimed at climate-friendly energy solutions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all">
            <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Research Excellence</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400">
                Published in top-tier <span className="text-slate-900 dark:text-white">SCI & Scopus-indexed journals</span> and presented at global conferences.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all">
            <Users className="w-6 h-6 text-green-600 dark:text-green-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Mentorship & Collaboration</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400">
                Actively guides research scholars, fosters interdisciplinary projects, and partners with industry and academia.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all">
            <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Sustainability Advocate</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400">
                Promotes sustainable development education and believes engineering must serve real-world social challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Quote */}
        <footer className="pt-10 text-center">
          <p className="text-slate-500 dark:text-gray-500 italic">
            “Engineering is not just about innovation — it’s about impact.”
          </p>
        </footer>
      </div>
    </main>
  );
}
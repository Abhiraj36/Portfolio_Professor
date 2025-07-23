import {
  GraduationCap,
  Briefcase,
  FileText,
  Wrench,
  Star,
  BookOpenCheck,
} from "lucide-react";

export default function AchievementsPage() {
  return (
    <main className="min-h-screen animated-gradient bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-gray-900 dark:via-black dark:to-gray-950 text-slate-800 dark:text-gray-300 px-6 py-16 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Page Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Achievements & Recognitions
          </h1>
          <p className="text-lg text-slate-600 dark:text-gray-400">
            A distinguished journey of academic excellence, impactful research, and leadership.
          </p>
        </header>

        {/* Sections Grid */}
        <section className="grid gap-8 sm:grid-cols-2">
          {/* Academic Excellence */}
          <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Academic Excellence</h2>
            </div>
            <ul className="list-disc list-inside text-slate-600 dark:text-gray-400 space-y-2">
              <li>Ph.D. in Mechanical Engineering from NIT Durgapur (2019).</li>
              <li>M.Tech from IIT Guwahati with 8.53 CGPA.</li>
              <li>Consistently high academic record since school.</li>
            </ul>
          </div>

          {/* Professional Journey */}
          <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-amber-500 dark:text-amber-400" />
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Professional Journey</h2>
            </div>
            <ul className="list-disc list-inside text-slate-600 dark:text-gray-400 space-y-2">
              <li>15+ years of teaching & research across premier institutions.</li>
              <li>Currently Assistant Professor at Sarala Birla University, Ranchi.</li>
              <li>Project Engineer & Research Fellow at IIT Guwahati.</li>
              <li>Organized national and international conferences & FDPs.</li>
            </ul>
          </div>

          {/* Research Contributions */}
          <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Research Contributions</h2>
            </div>
            <ul className="list-disc list-inside text-slate-600 dark:text-gray-400 space-y-2">
              <li>Publications in Q1 SCI and Scopus-indexed journals.</li>
              <li>Focus: solar drying, hybrid systems, thermal storage, biofuels.</li>
              <li>Invented PCM-integrated solar dryer systems.</li>
              <li>Google Scholar: <strong className="text-slate-900 dark:text-white">754 citations, h-index 8</strong>.</li>
            </ul>
          </div>

          {/* Technical Proficiency */}
          <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="flex items-center gap-3">
              <Wrench className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Technical Proficiency</h2>
            </div>
            <ul className="list-disc list-inside text-slate-600 dark:text-gray-400 space-y-2">
              <li>Experimental & simulation-based system design.</li>
              <li>CFD, thermodynamic modeling, hybrid system optimization.</li>
              <li>Thermal performance testing and renewable systems.</li>
            </ul>
          </div>

          {/* Recognition & Leadership */}
          <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Recognition & Leadership</h2>
            </div>
            <ul className="list-disc list-inside text-slate-600 dark:text-gray-400 space-y-2">
              <li>Organizing Secretary for national/international programs.</li>
              <li>Invited speaker on IoT, green energy, sustainability.</li>
              <li>Editorial roles in advanced tech conferences.</li>
            </ul>
          </div>

          {/* Continuous Learning */}
          <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="flex items-center gap-3">
              <BookOpenCheck className="w-6 h-6 text-pink-500 dark:text-pink-400" />
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Continuous Learning</h2>
            </div>
            <ul className="list-disc list-inside text-slate-600 dark:text-gray-400 space-y-2">
              <li>Participated in 20+ FDPs and tech training programs.</li>
              <li>Recent interests: Quantum Computing, Robotics, Green Hydrogen.</li>
              <li>Always evolving in emerging sustainable technologies.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

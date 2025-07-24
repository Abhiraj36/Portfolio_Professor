import Image from "next/image";
import { ArrowRight, BookOpen, Calendar, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen animated-gradient bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-slate-900 dark:text-gray-100 px-6 py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Image Section */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/display_picture.jpg"
              alt="Dr. V. N. Lakshmi Durga"
              width={256}
              height={256}
              className="object-cover object-top w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left space-y-8 max-w-2xl">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Dr. V. N. Lakshmi Durga
          </h1>

          <h2 className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-medium">
            Assistant Professor, Department of Mechanical Engineering
          </h2>

          <p className="text-lg sm:text-xl leading-relaxed text-slate-700 dark:text-gray-300">
            A dedicated academic and researcher with over <span className="text-slate-900 dark:text-white font-semibold">15 years of experience</span> in teaching and applied research across top institutions. Her research spans <span className="text-slate-900 dark:text-white font-semibold">renewable energy</span>, <span className="text-slate-900 dark:text-white font-semibold">solar drying systems</span>, <span className="text-slate-900 dark:text-white font-semibold">thermal storage</span>, <span className="text-slate-900 dark:text-white font-semibold">biofuels</span>, and <span className="text-slate-900 dark:text-white font-semibold">IoT for sustainability</span>.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-slate-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              <span>18+ Publications</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              <span>Supervisor & Mentor</span>
            </div>
          </div>

          <a href="/about">
            <button className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-7 rounded-lg shadow-lg transition">
              Learn More <ArrowRight className="w-5 h-5" />
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}

// src/app/page.tsx or src/app/home/page.tsx

import { ArrowRight, BookOpen, Calendar, Users, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-100 flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        
        {/* Hero Title */}
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
          Dr. V. N. Lakshmi Durga
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl text-blue-400 font-medium">
          Associate Professor, Department of Mechanical Engineering
        </h2>

        {/* Intro Paragraph */}
        <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
          A dedicated academic and researcher with over <span className="text-white font-semibold">15 years of experience</span> in teaching and applied research across top institutions. Her research spans <span className="text-white font-semibold">renewable energy</span>, <span className="text-white font-semibold">solar drying systems</span>, <span className="text-white font-semibold">thermal storage</span>, <span className="text-white font-semibold">biofuels</span>, and <span className="text-white font-semibold">IoT for sustainability</span>.
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-400">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <span>18+ Publications</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-400" />
            <span>15+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-400" />
            <span>Supervisor & Mentor</span>
          </div>
        </div>

        {/* Call to Action */}
        <a href="/about">
          <button className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-7 rounded-lg shadow-lg transition">
            Learn More <ArrowRight className="w-5 h-5" />
          </button>
        </a>
      </div>
    </main>
  );
}

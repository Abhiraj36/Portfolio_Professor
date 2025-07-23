// src/app/about/page.tsx

import { BookOpen, GraduationCap, Flame, Sun, Users, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-gray-300 px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Title */}
        <header className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Dr. V. N. Lakshmi Durga
          </h1>
          <p className="text-lg text-gray-400">
            Pioneering academic and researcher in sustainable energy systems
          </p>
        </header>

        {/* Academic + Research Summary */}
        <section className="space-y-6 text-lg leading-relaxed">
          <p>
            <strong className="text-white">Dr. V. N. Lakshmi Durga</strong> is an accomplished educator and researcher with 
            <span className="text-white font-semibold"> over 15 years</span> of experience across premier institutions. Her expertise spans 
            <span className="text-white"> renewable energy</span>, 
            <span className="text-white"> solar drying technologies</span>, 
            <span className="text-white"> thermal energy systems</span>, and 
            <span className="text-white"> biofuels</span>.
          </p>

          <p>
            She holds a <strong className="text-white">Ph.D. in Mechanical Engineering</strong> from 
            <span className="text-white"> NIT Durgapur (2019)</span>, and an 
            <strong className="text-white"> M.Tech in Fluid & Thermal Engineering</strong> from 
            <span className="text-white"> IIT Guwahati</span>. Her academic path reflects a fusion of deep theoretical foundation with real-world problem-solving in sustainable technologies.
          </p>
        </section>

        {/* Highlighted Contributions */}
        <section className="grid gap-6 sm:grid-cols-2 text-gray-100">
          <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg shadow-md">
            <Flame className="w-6 h-6 text-yellow-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Clean Energy Innovator</h3>
              <p className="text-sm text-gray-400">
                Extensive research in solar drying, biofuels, and thermal storage aimed at climate-friendly energy solutions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg shadow-md">
            <BookOpen className="w-6 h-6 text-blue-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Research Excellence</h3>
              <p className="text-sm text-gray-400">
                Published in top-tier <span className="text-white">SCI & Scopus-indexed journals</span> and presented at global conferences.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg shadow-md">
            <Users className="w-6 h-6 text-green-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Mentorship & Collaboration</h3>
              <p className="text-sm text-gray-400">
                Actively guides research scholars, fosters interdisciplinary projects, and partners with industry and academia.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg shadow-md">
            <Globe className="w-6 h-6 text-purple-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Sustainability Advocate</h3>
              <p className="text-sm text-gray-400">
                Promotes sustainable development education and believes engineering must serve real-world social challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Line */}
        <footer className="pt-10 text-center">
          <p className="text-gray-500 italic">
            “Engineering is not just about innovation — it’s about impact.”
          </p>
        </footer>
      </div>
    </main>
  );
}

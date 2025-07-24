// src/app/blog/solar-drying-innovation/page.tsx

export default function BlogPost() {
  return (
    <main className="min-h-screen animated-gradient bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-slate-800 dark:text-gray-100 px-6 py-20 transition-colors duration-300">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">
          Solar Drying Innovation for Sustainable Agriculture
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Published on July 10, 2024
        </p>

        <article className="space-y-4 text-lg leading-relaxed">
          <p>
            Solar drying offers an energy-efficient and sustainable alternative to traditional
            drying techniques in agriculture. In our research, we explored the integration of
            Phase Change Materials (PCM) into solar dryer designs...
          </p>
          <p>
            This method has shown significant improvements in drying time, energy conservation,
            and product quality, especially in rural settings with limited grid access.
          </p>
          <p>
            Our findings suggest that PCM-based solar drying is a promising solution for
            post-harvest management, offering long-term benefits to farmers and food processors.
          </p>
        </article>
      </div>
    </main>
  );
}

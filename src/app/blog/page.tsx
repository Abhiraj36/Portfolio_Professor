// src/app/blog/page.tsx
import Link from "next/link";

const blogPosts = [
  {
    title: "Solar Drying Innovation for Sustainable Agriculture",
    date: "2024-07-10",
    summary:
      "A deep dive into how PCM-integrated solar dryers can revolutionize post-harvest processes.",
    slug: "solar-drying-innovation",
  },
  {
    title: "Thermal Storage Systems: What’s Next?",
    date: "2024-06-22",
    summary:
      "Exploring the future of thermal energy storage in the context of climate goals.",
    slug: "thermal-storage-future",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen animated-gradient bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-slate-900 dark:text-gray-100 px-6 py-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Blog</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Insights, reflections, and innovations from Dr. V. N. Lakshmi Durga
          </p>
        </header>

        {/* Blog List */}
        <section className="space-y-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg hover:scale-[1.01] transition-all space-y-2 cursor-pointer">
                <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
                <p className="text-gray-700 dark:text-gray-300">{post.summary}</p>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Read more →</p>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}

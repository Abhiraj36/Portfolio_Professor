import { Image } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-center text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Gallery</h1>

      <div className="flex justify-center">
        <div className="p-6 rounded-full bg-blue-100 dark:bg-gray-800 animate-pulse">
          <Image className="w-16 h-16 text-blue-500" />
        </div>
      </div>

      <p className="text-lg text-gray-700 dark:text-gray-300">
        The gallery is coming soon. Please check back shortly.
      </p>
    </div>
  );
}

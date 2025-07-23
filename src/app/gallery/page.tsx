// src/app/gallery/page.tsx
import { Image } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-center text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold text-primary">Gallery</h1>

      <div className="flex justify-center">
        <div className="animate-pulse">
          <Image className="w-20 h-20 text-blue-500 opacity-70" />
        </div>
      </div>

      <p className="text-lg text-gray-600 dark:text-gray-300">
        Images will be updated soon. Please check back later.
      </p>
    </div>
  );
}

// src/app/contact/page.tsx
import { Mail, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Contact</h1>

      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 sm:p-8 space-y-6 text-gray-800 dark:text-gray-100 transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Mail className="w-6 h-6 text-blue-600 shrink-0" />
          <a
            href="mailto:lakshmi.durga@iittp.ac.in"
            className="hover:underline break-all"
          >
            lakshmi.durga@iittp.ac.in
          </a>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Linkedin className="w-6 h-6 text-blue-600 shrink-0" />
          <a
            href="https://linkedin.com/in/lakshmi-d-vn-9348b41b8"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="pt-4">
          <a
            href="/lakshmi-cv-2025.pdf"
            download
            className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            📄 Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

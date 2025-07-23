'use client';

import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen animated-gradient bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Contact
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-white/90 dark:bg-black/70 backdrop-blur-md shadow-lg rounded-xl p-6 sm:p-8 space-y-6 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 transition-all"
        >
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-blue-600 shrink-0" />
            <a
              href="mailto:lakshmi.durga@iittp.ac.in"
              className="hover:underline hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200 break-all"
            >
              lakshmi.durga@iittp.ac.in
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Linkedin className="w-6 h-6 text-blue-600 shrink-0" />
            <a
              href="https://linkedin.com/in/lakshmi-d-vn-9348b41b8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200"
            >
              LinkedIn Profile
            </a>
          </div>

          <hr className="border-t border-gray-200 dark:border-gray-700" />

          <div className="pt-2">
            <a
              href="/lakshmi-cv-2025.pdf"
              download
              className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              📄 Download CV
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

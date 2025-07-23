'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="animated-gradient bg-gradient-to-r from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-opacity-80 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Title */}
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Dr. V. N. Lakshmi Durga
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block">
            Associate Professor, Mechanical Engineering
          </p>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200 transition-transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-wrap gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          {['/', '/about', '/achievements', '/publications', '/gallery', '/contact'].map((path, index) => {
            const name = path === '/' ? 'Home' : path.replace('/', '').replace(/^\w/, c => c.toUpperCase());
            return (
              <Link
                key={index}
                href={path}
                className="relative group transition"
              >
                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mx-4 mb-4 p-4 space-y-2 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 shadow-md text-sm font-medium text-gray-800 dark:text-gray-300 transition-all backdrop-blur-md">
          {['/', '/about', '/achievements', '/publications', '/gallery', '/contact'].map((path, index) => {
            const name = path === '/' ? 'Home' : path.replace('/', '').replace(/^\w/, c => c.toUpperCase());
            return (
              <Link
                key={index}
                href={path}
                onClick={() => setIsOpen(false)}
                className="block hover:text-blue-600 dark:hover:text-blue-400 hover:scale-[1.02] transition-transform"
              >
                {name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

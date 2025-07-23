// src/components/Navbar.tsx

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
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

        {/* Right: Hamburger */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Links - desktop */}
        <div className="hidden md:flex flex-wrap gap-4 text-sm text-gray-700 dark:text-gray-300 font-medium">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link>
          <Link href="/achievements" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Achievements</Link>
          <Link href="/publications" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Publications</Link>
          <Link href="/gallery" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Gallery</Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
          <Link href="/" className="block hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="block hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/achievements" className="block hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsOpen(false)}>Achievements</Link>
          <Link href="/publications" className="block hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsOpen(false)}>Publications</Link>
          <Link href="/gallery" className="block hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link href="/contact" className="block hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


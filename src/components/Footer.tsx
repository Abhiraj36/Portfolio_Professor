// src/components/Footer.tsx
const Footer = () => (
  <footer className="bg-gray-100 text-gray-600 border-t border-gray-300 mt-10">
    <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm">
      <p className="mb-1">
        © {new Date().getFullYear()} <span className="font-medium">Dr.V.N. Lakshmi Durga</span>. All rights reserved.
      </p>
      <p className="text-xs text-gray-500">Empowering research, education, and innovation.</p>
    </div>
  </footer>
);

export default Footer;

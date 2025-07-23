// src/app/layout.tsx
import "./globals.css";
import Layout from "@/components/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Professor Portfolio",
  description: "Personal website of Prof. [Name]",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen flex flex-col`}>
        <Layout>
          <main className="flex-1 text-base sm:text-lg max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-12 space-y-6">
            {children}
          </main>
        </Layout>
      </body>
    </html>
  );
}

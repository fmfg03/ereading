import React from 'react';
import { Book, Globe, BookOpen } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">E-Reading.link</span>
            </div>
            <div className="flex items-center space-x-4">
              <Globe className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-600">Digital Library</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Digital Knowledge Repository
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated collection of academic and research materials, preserving valuable knowledge across multiple languages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: <Book className="h-8 w-8 text-blue-600" />,
              title: "Research Archive",
              description: "Access to historical documents and academic resources"
            },
            {
              icon: <Globe className="h-8 w-8 text-blue-600" />,
              title: "Multi-Language",
              description: "Content available in English, Russian, German, and more"
            },
            {
              icon: <BookOpen className="h-8 w-8 text-blue-600" />,
              title: "Digital Library",
              description: "Preserving valuable knowledge for future generations"
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center text-gray-600 text-sm">
            © 2025 E-Reading.link - Digital Knowledge Repository
          </div>
        </div>
      </footer>
    </div>
  );
}

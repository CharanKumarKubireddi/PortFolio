import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Name */}
          <a href="#home" className="text-2xl font-bold text-blue-600">
            MyPortfolio
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Resume
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                // Close Icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#home" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#about" className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#skills" className="block text-gray-700 hover:text-blue-600">Skills</a>
          <a href="#projects" className="block text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-center"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

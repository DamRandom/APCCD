"use client";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-gray-100 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-xl font-semibold text-orange-400">
          APCCD
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

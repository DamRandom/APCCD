"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-16">
      <div className="container mx-auto px-6 text-center">
        {/* Main Text */}
        <p className="text-sm">
          &copy; 2025 APCCD. All rights reserved.
        </p>

        {/* Secondary Text */}
        <p className="text-xs mt-2 text-gray-500">
          Designed to assist in predictive analysis of faculty composition at UCI.
        </p>

        {/* Links */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors duration-200"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

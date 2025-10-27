import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-center py-6 text-sm text-gray-600 border-0 shadow-none mt-12">
      <div className="flex justify-center gap-6 flex-wrap mb-2">
        <Link
          to="/privacy"
          className="text-blue-600 hover:text-blue-800 hover:underline transition-all duration-200"
        >
          privacy
        </Link>
        <Link
          to="/terms"
          className="text-blue-600 hover:text-blue-800 hover:underline transition-all duration-200"
        >
          terms
        </Link>
        <Link
          to="/cookies"
          className="text-blue-600 hover:text-blue-800 hover:underline transition-all duration-200"
        >
          cookies
        </Link>
      </div>
      <div className="text-gray-500">
        © {new Date().getFullYear()} Hiking Minnesota
      </div>
    </footer>
  );
}

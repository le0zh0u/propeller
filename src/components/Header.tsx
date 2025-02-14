"use client";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 max-w-5xl">
        <div className="flex justify-between items-center">
          <div className="relative overflow-hidden rounded-lg bg-gradient-primary px-4 py-2">
            <span className="text-white font-bold text-xl">PROPELLER</span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-primary-purple transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div
            className={`md:flex gap-8 items-center ${
              isMenuOpen
                ? "flex flex-col absolute top-full left-0 right-0 bg-black/90 p-4 space-y-4"
                : "hidden"
            } md:static md:bg-transparent md:p-0 md:space-y-0`}
          >
            <a
              href="#"
              className="text-white hover:text-primary-purple transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-primary-purple transition-colors"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-white hover:text-primary-purple transition-colors"
            >
              Showcase
            </a>
            <a
              href="#"
              className="text-white hover:text-primary-purple transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-primary-purple transition-colors"
            >
              About Us
            </a>
            <button className="bg-gradient-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Talk to us
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

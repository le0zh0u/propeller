"use client";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl relative group">
            <span className="relative z-10">PROPELLER</span>
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
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
            <button className="relative group overflow-hidden bg-black/20 backdrop-blur-sm px-6 py-2 rounded-lg">
              <span className="relative z-10 text-white group-hover:text-white transition-colors">
                Talk to us
              </span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

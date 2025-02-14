"use client";

import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log("Submitted email:", email);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Ready to Innovate, Create, and Amplify?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Let&apos;s Chat, Today 🏄
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg focus:outline-none focus:border-primary-purple focus:ring-1 focus:ring-primary-purple transition-all duration-300 pr-12 text-white placeholder:text-gray-400"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-primary text-white py-4 px-6 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 font-semibold"
          >
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

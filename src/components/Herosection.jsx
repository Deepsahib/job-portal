import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br  from-blue-100 to-indigo-200 py-16 flex flex-col items-center justify-center">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-4">
          Welcome to <span className="text-indigo-600">Job Hunt India</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          India’s best site to find your dream job. Search, apply, and get hired!
        </p>
        <form className="flex items-center justify-center gap-2">
          <input
            type="text"
            placeholder="Search jobs, companies, skills..."
            className="w-64 sm:w-80 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow hover:scale-105 transition-transform"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
// filepath: d:\JobPortalPatel\frontend\Jobportal\src\components\HeroSection.jsx
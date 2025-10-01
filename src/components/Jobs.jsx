import React from "react";
import JobCard from "./JobCard";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova",
    description: "Build modern UI with React and Tailwind.",
    position: "Junior / Mid",
    type: "Full Time",
    salary: "₹8-12 LPA",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Cloudify",
    description: "Work on scalable APIs and cloud solutions.",
    position: "Mid / Senior",
    type: "Remote",
    salary: "₹10-15 LPA",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "AnalyticsPro",
    description: "Analyze data and build predictive models.",
    position: "Senior",
    type: "Full Time",
    salary: "₹12-18 LPA",
  },
];

const Jobs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Left Filters */}
        <aside className="bg-white shadow-lg rounded-xl p-6 md:col-span-1 h-fit">
          <h3 className="text-lg font-bold text-blue-700 mb-4">Filter Jobs</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Company</label>
              <input
                type="text"
                placeholder="Search company"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Job Type</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500">
                <option>All</option>
                <option>Full Time</option>
                <option>Remote</option>
                <option>Internship</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Salary Range</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500">
                <option>Any</option>
                <option>₹5-10 LPA</option>
                <option>₹10-15 LPA</option>
                <option>₹15+ LPA</option>
              </select>
            </div>
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Apply Filters
            </button>
          </div>
        </aside>

        {/* Job Cards */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;

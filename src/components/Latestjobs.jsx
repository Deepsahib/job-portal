import React from "react";
import LatestJobCard from "./LatestJobCard";


const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova",
    location: "Bangalore, India",
    salary: "₹8-12 LPA",
    posted: "2 days ago",
    type: "Full Time",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Cloudify",
    location: "Remote",
    salary: "₹10-15 LPA",
    posted: "1 day ago",
    type: "Remote",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Mumbai, India",
    salary: "₹12-18 LPA",
    posted: "Today",
    type: "Full Time",
  },
  {
    id: 4,
    title: "Mobile App Developer",
    company: "AppWorks",
    location: "Delhi, India",
    salary: "₹7-11 LPA",
    posted: "3 days ago",
    type: "Full Time",
  },
];

const LatestJobs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-700 mb-2">
            Top Jobs & Openings
          </h2>
          <p className="text-gray-600 text-lg">
            Explore the latest opportunities from top companies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <LatestJobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;

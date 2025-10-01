import React from "react";

const LatestJobCard = ({ job }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
      <h3 className="text-xl font-bold text-blue-700 mb-2">{job.title}</h3>
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-700 font-semibold">{job.company}</span>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
          {job.type}
        </span>
      </div>
      <p className="text-gray-600 mb-2">{job.location}</p>
      <div className="flex items-center justify-between">
        <span className="text-indigo-600 font-semibold">{job.salary}</span>
        <span className="text-gray-400 text-sm">{job.posted}</span>
      </div>
      <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all">
        Apply Now
      </button>
    </div>
  );
};

export default LatestJobCard;

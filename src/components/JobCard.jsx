import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate=useNavigate();
  function hanldeclick(){
   navigate("/description/1234")
  }
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-bold text-blue-700">{job.title}</h3>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
          {job.type}
        </span>
      </div>
      <h4 className="text-gray-800 font-semibold mb-2">{job.company}</h4>
      <p className="text-gray-600 text-sm mb-3">{job.description}</p>
      <p className="text-gray-500 text-sm mb-2">
        <span className="font-medium text-gray-700">Position:</span> {job.position}
      </p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-indigo-600 font-semibold">{job.salary}</span>
        <div className="flex gap-2">
          <button onClick={hanldeclick} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Details
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
            Save for Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

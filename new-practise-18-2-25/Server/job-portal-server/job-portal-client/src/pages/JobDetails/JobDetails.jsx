import React from "react";
import { Link, useLoaderData } from "react-router";

const jobDetails = () => {
  const {
    _id,
    title,
    company,
    salaryRange,
    location,
    jobType,
    category,
    description,
    company_logo,
    hr_email,
    hr_name,
  } = useLoaderData();
  return (
    <div className="max-w-5xl mx-auto my-10 px-6 py-8 bg-white shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Company Logo */}
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-40 h-40 object-contain border p-2 bg-gray-50 rounded-md"
        />

        {/* Job Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
          <p className="text-lg text-gray-600 mb-1">
            <span className="font-semibold">Company:</span> {company}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Salary:</span> {salaryRange.min} –{" "}
            {salaryRange.max}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Job Type:</span> {jobType}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Category:</span> {category}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Job Description
        </h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* HR Contact Info */}
      <div className="mt-6 border-t pt-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">HR Contact</h2>
        <p className="text-gray-700">Name: {hr_name}</p>
        <p className="text-gray-700">Email: {hr_email}</p>
      </div>

      {/* Apply Button */}
      <div className="mt-8">
        <Link to={`/jobApply/${_id}`}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default jobDetails;

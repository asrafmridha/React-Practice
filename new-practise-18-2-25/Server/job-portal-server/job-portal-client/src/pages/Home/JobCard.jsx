import React from "react";
import { SiGooglemaps } from "react-icons/si";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  console.log(job);
  const {
    _id,
    applicationDeadline,
    category,
    company,
    company_logo,
    location,
    title,
    requirements,
    description,
    salaryRange
  } = job;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex gap-2 m-3">
        <figure>
          <img className="" src={company_logo} alt="Company Logo" />
        </figure>
        <div className="flex flex-col justify-center">
          <h4 className="text-2xl">{company}</h4>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <SiGooglemaps className="text-red-500" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">
          {title} <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex flex-wrap gap-4">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="flex items-center gap-1 text-sm text-gray-700"
            >
              <span>✅</span>
              <span>{requirement}</span>
            </div>
          ))}
        </div>

        <div className="card-actions justify-end">
          <p>$ {salaryRange.max} - {salaryRange.min}</p>
          <Link to={`/jobs/${_id}`}>
          <button className="btn btn-primary mt-4">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

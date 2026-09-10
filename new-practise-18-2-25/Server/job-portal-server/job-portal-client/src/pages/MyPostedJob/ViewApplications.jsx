import React from "react";
import { useLoaderData } from "react-router";
import ViewApplicationsDetails from "./ViewApplicationsDetails";

const ViewApplications = () => {
  const jobApplications = useLoaderData();

  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl text-center m-5">
        View Applications For This Job ({jobApplications.length})
      </h1>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Applicant Email</th>
            <th>Linkedin Url</th>
            <th>Github Url</th>
            <th>Resume Url</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobApplications.map((jobApplication, index) => (
            <ViewApplicationsDetails
              key={jobApplication._id}
              index={index}
              job_application={jobApplication}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplications;

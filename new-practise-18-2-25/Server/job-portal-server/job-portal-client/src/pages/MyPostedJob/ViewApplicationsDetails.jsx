import React from "react";

const ViewApplicationsDetails = ({ job_application, index }) => {
  const { applicant_email, linkedin_url, github_url, resume_url } = job_application;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{applicant_email}</td>
      <td>{linkedin_url}</td>
      <td>{github_url}</td>
      <td>{resume_url}</td>
      <td>
        <button className="btn btn-link">View</button>
      </td>
    </tr>
  );
};

export default ViewApplicationsDetails;

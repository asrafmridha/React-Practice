import React from "react";
import { Link } from "react-router";

const MyPostedJobDetails = ({ jobs }) => {
  const { _id, title, location, jobType } = jobs;
  return (
    <tr>
      <th>1</th>
      <td>{title}</td>
      <td>{location}</td>
      <td>{jobType}</td>
      <td>
        <Link to={`/viewApplications/${_id}`}>
          <button className="btn btn-link">View Application</button>
        </Link>
      </td>
    </tr>
  );
};

export default MyPostedJobDetails;

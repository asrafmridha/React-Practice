import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyPostedJobDetails from "./MyPostedJobDetails";

const MyPostedJob = () => {
  const { user } = useAuth();
  const [postedJobs, setpostedJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setpostedJobs(data));
  }, [user.email]);
  return (
    <>
      <h1 className="text-2xl text-center m-5">
        My Posted Job {postedJobs.length}
      </h1>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Location</th>
            <th>JobType</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {postedJobs.map((job) => (
            <MyPostedJobDetails key={job._id} jobs={job}></MyPostedJobDetails>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MyPostedJob;

import React from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  console.log(user);
  const handleJobApplicationSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin_url = form.linkedin_url.value;
    const github_url = form.github_url.value;
    const resume_url = form.resume_url.value;
    console.log(linkedin_url, github_url, resume_url);
    const jobAppyInfo = {
      job_id: id,
      applicant_email: user.email,
      linkedin_url,
      github_url,
      resume_url,
    };
    console.log(jobAppyInfo);
    fetch(`http://localhost:5000/jobs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobAppyInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        form.reset();
      });
  };
  return (
    <div className="hero bg-base-200 min-h-16">
      <div className="hero-content flex-col w-full max-w-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Job Application</h1>
          <p className="text-base-content">
            Submit your professional profile below
          </p>
        </div>
        <form className="w-full" onSubmit={handleJobApplicationSubmit}>
          <div className="card bg-base-100  shadow-2xl">
            <div className="card-body space-y-4">
              <fieldset className="space-y-4">
                <div>
                  <label className="label">
                    <span className="label-text">LinkedIn URL</span>
                  </label>
                  <input
                    name="linkedin_url"
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">GitHub URL</span>
                  </label>
                  <input
                    name="github_url"
                    type="url"
                    placeholder="https://github.com/yourprofile"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Resume URL</span>
                  </label>
                  <input
                    name="resume_url"
                    type="url"
                    placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-neutral w-full">
                    Submit Application
                  </button>
                </div>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;

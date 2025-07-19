import React from "react";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData);
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange={min,max,currency};
    console.log(newJob);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Post a New Job</h2>

        <form onSubmit={handleAddJob} className="space-y-6">
          {/* Grid layout for grouped fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label font-medium">Job Title</label>
              <input
                type="text"
                name="title"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">Job Location</label>
              <input
                type="text"
                name="location"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">Job Type</label>
              <select
                name="jobType"
                className="select select-bordered w-full"
                required
              >
                <option disabled selected>
                  Pick a Job Type
                </option>
                <option>Full-time</option>
                <option>Intern</option>
                <option>Part-time</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label font-medium">Job Field</label>
              <select
                name="jobField"
                className="select select-bordered w-full"
                required
              >
                <option disabled selected>
                  Pick a Job Field
                </option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Teaching</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label font-medium">Min Salary</label>
              <input
                type="text"
                name="min"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">Max Salary</label>
              <input
                type="text"
                name="max"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">Currency</label>
              <select
                name="currency"
                className="select select-bordered w-full"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Currency
                </option>
                <option value="BDT">BDT</option>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label font-medium">Application Deadline</label>
              <input
                type="date"
                name="applicationDeadline"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">Company Name</label>
              <input
                type="text"
                name="company"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">Company Logo URL</label>
              <input
                type="text"
                name="company_logo"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">HR Name</label>
              <input
                type="text"
                name="hr_name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">HR Email</label>
              <input
                type="email"
                name="hr_email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Textareas: full width, below grid */}
          <div className="form-control">
            <label className="label font-medium">Job Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label font-medium">Job Requirements</label>
            <textarea
              name="requirements"
              className="textarea textarea-bordered w-full"
              rows="4"
              placeholder="Put each requirement in a new line"
              required
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label font-medium">Job Responsibilities</label>
            <textarea
              name="responsibilities"
              className="textarea textarea-bordered w-full"
              rows="4"
              placeholder="Put each responsibility in a new line"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <div className="form-control">
            <button type="submit" className="btn btn-primary w-full">
              Submit Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;

import React from "react";
import styles from "./../Home/css/JobCategory.module.css"

const JobCategory = () => {
  const categories = [
    "Marketing & Sales",
    "Design & Creative",
    "Development",
    "Customer Support",
    "Finance",
    "Project Management",
    "HR & Recruiting",
  ];

  return (
    <div className="mt-10 px-4">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-semibold">Browse By Category</h3>
        <p className="mt-2 text-lg text-gray-600">Find the job that's perfect for you</p>
      </div>

      <div className={`overflow-x-auto whitespace-nowrap ${styles.noScrollbar}`}>
        {categories.map((category, index) => (
          <div
            key={index}
            className="inline-block min-w-[160px] mx-2 px-4 py-3 bg-white text-center border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
          >
            <span className="text-sm font-medium text-gray-700">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <p className="mb-5 font-semibold">All Category ({categories.length})</p>

      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <NavLink 
          key={category.category_id}
          to={`category/${category.category_id}`}
          className="btn bg-base-100 "
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;

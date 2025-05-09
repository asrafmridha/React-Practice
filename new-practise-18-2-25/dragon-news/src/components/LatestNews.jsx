import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 p-4 bg-base-200 ">
      <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true} className="space-x-12">
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          maxime!
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          maxime!
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          maxime!
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;

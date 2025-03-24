import React from "react";
import authLogo from '../../assets/authlogo.png'

const Banner = () => {
  return (
    <div className="mb-6 min-h-96 hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img
          src={authLogo}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="py-6 m-9">
          <h1 className="text-5xl font-bold">Auth Integretion Firebase and Private Route</h1>
  
          <button className="mt-2 btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
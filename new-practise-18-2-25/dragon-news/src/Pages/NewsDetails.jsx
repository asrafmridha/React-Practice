import React from "react";
import Header from "../components/Header";
import RightNavbar from "../components/layout-component/RightNavbar";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";

const NewsDetails = () => {
  const  {data}  = useLoaderData();
  const newsDetails=data[0];

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <nav className="w-11/12 mx-auto"><Navbar></Navbar></nav>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
            <p className="text-xl font-semibold">News Details :</p>
          <div className="card bg-base-100  shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={newsDetails?.image_url}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <p>
                {
                    newsDetails?.details
                }
              </p>
              <div className="card-actions">
              <Link to={`/category/${newsDetails.category_id}`} className="btn btn-primary">Go Back</Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;

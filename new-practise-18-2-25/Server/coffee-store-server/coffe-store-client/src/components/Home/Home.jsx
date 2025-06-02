import React from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <p>All Coffee</p>
      <div className="grid grid-cols-2 gap-3">
        {coffees.map((coffee) => (
          <CoffeeCard coffee={coffee} key={coffee._id}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;

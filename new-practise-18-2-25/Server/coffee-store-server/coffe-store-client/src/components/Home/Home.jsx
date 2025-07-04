import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import Swal from "sweetalert2";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const Home = () => {
  // const coffees = useLoaderData();
  // const [coffeeList, setCoffeeList] = useState([]);

  // useEffect(() => {
  //   setCoffeeList(coffees);
  // }, [coffees]);

  const getCoffees = async () => {
    const res = await fetch(`http://localhost:5000/coffee`);
    if (!res.ok) {
      throw new Error("Failed to fetch coffee data");
    }
    return res.json();
  };
  const queryClient = useQueryClient();
  const {
    data: coffeeList,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getCoffees,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = coffeeList.filter((c) => c._id !== id);
              setCoffeeList(remaining);
              Swal.fire("Deleted!", "Coffee has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <p>All Coffee</p>
      <div className="grid grid-cols-2 gap-3">
        {coffeeList.map((coffee) => (
          <CoffeeCard
            coffee={coffee}
            key={coffee._id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

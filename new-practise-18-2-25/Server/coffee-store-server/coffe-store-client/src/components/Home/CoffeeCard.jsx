import React from "react";

const CoffeeCard = ({ coffee }) => {
  console.log(coffee);
  const { name, quantity, supplierName, taste, category, photo_url, details } =
    coffee;
  return (
    <div className="card card-side bg-base-100 shadow-sm my-1">
      <figure>
        <img src={photo_url} alt="Movie" />
      </figure>
      <div className=" flex justify-between w-full p-8">
        <div>
          <h2 className="card-title">Name : {name}</h2>
          <p>Quantity : {quantity}</p>
          <p>Supplier : {supplierName}</p>
          <p>Taste : {taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-2">
            <button className="btn join-item">View</button>
            <button className="btn join-item bg-primary">Edit</button>
            <button className="btn join-item bg-red-600">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

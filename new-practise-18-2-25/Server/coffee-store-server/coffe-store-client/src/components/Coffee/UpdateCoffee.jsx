import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const UpdateCoffee = () => {
  const navigate = useNavigate();
  const {
    _id,
    name,
    quantity,
    supplierName,
    taste,
    category,
    photo_url,
    details,
  } = useLoaderData();
  const handleUpdateData = (event) => {
    event.preventDefault();
    const id = _id;
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplierName = form.supplier_name.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo_url = form.photo_url.value;
    const details = form.details.value;
    const updateData = {
      name,
      quantity,
      supplierName,
      taste,
      category,
      photo_url,
      details,
    };
    fetch(`http://localhost:5000/coffee/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Update success:", data);
        navigate("/");
      });
  };
  // console.log(details)
  return (
    <div className="max-w-3xl mx-auto  p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Update Coffee
      </h2>
      <form
        onSubmit={handleUpdateData}
        className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Coffee Name */}
        <div>
          <label
            htmlFor="coffeeName"
            className="block text-sm font-medium text-gray-700"
          >
            Coffee Name
          </label>
          <input
            type="text"
            defaultValue={name}
            name="name"
            id="coffeeName"
            placeholder="Enter coffee name"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Quantity */}
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity
          </label>
          <input
            defaultValue={quantity}
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Enter quantity"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        {/* Supplier Name */}
        <div>
          <label
            htmlFor="supplier_name"
            className="block text-sm font-medium text-gray-700"
          >
            Supplier Name
          </label>
          <input
            defaultValue={supplierName}
            type="text"
            name="supplier_name"
            id="supplier_name"
            placeholder="Enter Supplier Name"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        {/* Taste */}
        <div>
          <label
            htmlFor="taste"
            className="block text-sm font-medium text-gray-700"
          >
            Taste
          </label>
          <input
            defaultValue={taste}
            type="text"
            name="taste"
            id="taste"
            placeholder="Taste"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <input
            defaultValue={category}
            name="category"
            type="text"
            id="category"
            placeholder="Category"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        {/* Details */}
        <div>
          <label
            htmlFor="details"
            className="block text-sm font-medium text-gray-700"
          >
            Details
          </label>
          <input
            defaultValue={details}
            name="details"
            type="text"
            id="details"
            placeholder="Details"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        {/* Photo Url */}
        <div className="md:col-span-2">
          <label
            htmlFor="photo_url"
            className="block text-sm font-medium text-gray-700"
          >
            Photo Url
          </label>
          <input
            defaultValue={photo_url}
            name="photo_url"
            type="text"
            id="photo_url"
            placeholder="Photo Url"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Submit Button */}
        <div className=" md:col-span-2">
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Update Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;

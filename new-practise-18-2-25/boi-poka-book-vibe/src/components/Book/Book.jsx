import React from "react";

const Book = ({book}) => {
    const {image,bookName,author}=book;
  return (
    <div className="p-6 border shadow-sm rounded-2xl card bg-base-100 w-96 ">
      <figure className="py-8 bg-gray-400 rounded-2xl">
        <img className="h-[166px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Card Title
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          By : {author}
        </p>
        <div className="justify-end card-actions">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;

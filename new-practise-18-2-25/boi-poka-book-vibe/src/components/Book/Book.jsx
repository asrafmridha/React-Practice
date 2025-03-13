import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId,image, bookName, author, tags, category } = book;
  return (
    <Link to={`bookDetails/${bookId}`}>
      {" "}
      <div className="p-6 border shadow-sm rounded-2xl card bg-base-100 w-96 ">
        <figure className="py-8 bg-gray-400 rounded-2xl">
          <img className="h-[166px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4 ">
            {tags.map((tag) => (
              <button type="submit" className="bg-green-300 btn">
                {tag}
              </button>
            ))}
          </div>
          <p>By : {author}</p>
          <div className="justify-between border-t-2 border-dashed card-actions">
            <div className="mt-5 badge badge-outline">{category}</div>
            <div className="mt-5 ">
              <div className="rating">
                <div className="mask mask-star" aria-label="1 star"></div>
                <div className="mask mask-star" aria-label="2 star"></div>
                <div
                  className="mask mask-star"
                  aria-label="3 star"
                  aria-current="true"
                ></div>
                <div className="mask mask-star" aria-label="4 star"></div>
                <div className="mask mask-star" aria-label="5 star"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const books = useLoaderData();
  const book = books.find((book) => book.bookId === id);
  console.log(book);

  const { bookId: currentBookId, bookName, image,author,category,review } = book;
  return (
    <>
      <div className="flex gap-8 p-5 mx-20 mt-10 border-1">
        <div className="flex-1 bg-amber-900"><img className="h-[450px] w-auto " src={image} alt="" /></div>
        <div className="flex-1">
            <h1 className="mb-2 text-xl font-bold">{bookName}</h1> <hr />
            <p className="mb-2">By :{author}</p> <hr />
            <p className="mb-2">{category}</p> <hr />
            <p className="mb-2">Review:{review}</p> <hr />
            <div className="flex gap-4 mt-2">
            <button className="btn btn-outline btn-success">Read</button>
            <button className="btn btn-outline btn-secondary">Wishlist</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;

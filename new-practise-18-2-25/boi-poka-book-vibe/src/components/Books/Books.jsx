import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  console.log(books);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Books</h1>
      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <Book book={book} key={book.bookId}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;

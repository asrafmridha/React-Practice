import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreReadList, getStoreWishList } from "../../utlity/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [readWishListBooks, setWishListBooks] = useState([]);
  const [sort, setSort] = useState("");
  useEffect(() => {
    const storeReadList = getStoreReadList();
    const storeReadListInt = storeReadList.map((id) => parseInt(id));

    const storeWishList = getStoreWishList();
    const storeWishListInt = storeWishList.map((id) => parseInt(id));

    const readBookListData = allBooks.filter((book) =>
      storeReadListInt.includes(book.bookId)
    );
    setReadBooks(readBookListData);

    const readWishListData = allBooks.filter((book) =>
      storeWishListInt.includes(book.bookId)
    );
    setWishListBooks(readWishListData);
  }, []);

  const handleSort = (sortBy) => {
    setSort(sortBy);
    if (sortBy === "rating") {
        const sortedReadList=[...readBooks].sort((a,b)=>a.rating-b.rating);
        const sortedWishList=[...readWishListBooks].sort((a,b)=>a.rating-b.rating);
        setReadBooks(sortedReadList);
        setWishListBooks(sortedWishList);
    } else {
      const sortedReadList=[...readBooks].sort((a,b)=>a.totalPages-b.totalPages);
      const sortedWishList=[...readWishListBooks].sort((a,b)=>a.totalPages-b.totalPages);
      setReadBooks(sortedReadList);
      setWishListBooks(sortedWishList);
    }
  };

  return (
    <div>
      <h3>Listed Books</h3>
      <div className="dropdown dropdown-start">
        <div tabIndex={0} role="button" className="m-1 btn">
          {sort ? `Sort By :  ${sort}` : "Sort By  ⬇️"}
        </div>
        <ul
          tabIndex={0}
          className="p-2 shadow-sm dropdown-content menu bg-base-100 rounded-box z-1 w-52"
        >
          <li onClick={() => handleSort("rating")}>
            <a>Rating</a>
          </li>
          <li onClick={() => handleSort("number of pages")}>
            <a>Number Of Pages</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="my-5">Read List Books {readBooks.length}</h2>
          <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {readBooks.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="my-5">Wish List Books {readWishListBooks.length}</h2>
          <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {readWishListBooks.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;

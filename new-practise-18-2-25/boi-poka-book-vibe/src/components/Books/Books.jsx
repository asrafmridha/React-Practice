import React, { useEffect, useState } from 'react';

const Books = () => {
    const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch('./booksData.json')
            .then(res=>res.json())
            .then(data=>setBooks(data));
    },[]);

    return (
        <div>
           Books Length Is: {books.length}
        </div>
    );
};

export default Books;
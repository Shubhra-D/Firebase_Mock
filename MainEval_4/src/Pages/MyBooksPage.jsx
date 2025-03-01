import React, { useState } from "react";

const MyBooksPage = () => {
  const [books, setBooks] = useState(true);
  
  const handleStatusChange = (bookId,newStatus)=>{
      const updatedBooks = books.map((book)=>{
        if(book.id === bookId){
            return {...book,status:newStatus}
        }
        return book;
      })
      setBooks(updatedBooks);
      localStorage.setItem("mybooks",JSON.stringify(updatedBooks))
  }
  return (
    <div>
      <h1>My Books</h1>
      <div>
        {books.map((book) => {
          <div>
            <h2>{book.title}</h2>
            <p>{book.auther}</p>
            <p>
              <select
                value={book.status}
                onChange={(e) => handleStatusChange(book.id, e.target.value)}>
                 <option value="want to rread">Want to Read</option>
                 <option value="currently reading">Currently Reading</option>
                 <option value="read">Read</option>
              </select>

            </p>
            <p>Rate :</p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default MyBooksPage;

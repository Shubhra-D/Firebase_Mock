import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";

const MyBooksPage = () => {
  const [books, setBooks] = useState(true);
   const user = useSelector((state)=>state.auth.user)
  const handleStatusChange = (bookId, newStatus) => {
    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        return { ...book, status: newStatus };
      }
      return book;
    });
    setBooks(updatedBooks);
    localStorage.setItem("mybooks", JSON.stringify(updatedBooks));
  };
   useEffect = (()=>{
     const fetchBooks = async()=>{
        try{
               const response = await fetch(`https://book-tracker-19fcd-default-rtdb.firebaseio.com/books?useId=${user.id}`);
               const data = await response.json();
               setBooks(data)
               
        }catch(err){
            console.log(err)
        }
        fetchBooks()
     }
  },[user.id]);

  const handleRatingChange = (bookId,newRating)=>{
    const updatedBooks = books.map((book)=>{
        if(book.id === bookId){
            return {...book,rating:newRating}
        }
        return book;
    })
    setBooks(updatedBooks);
    updateBookRating(bookId,newRating)
  }
  const updateBookRating = async(bookId,newRating)=>{
      try{
         await fetch(`https://book-tracker-19fcd-default-rtdb.firebaseio.com/books/${bookId}`,{
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({rating:newRating})
         })
      }catch(err){
           console.log("err",err)
      }
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
                onChange={(e) => handleStatusChange(book.id, e.target.value)}
              >
                <option value="Want to Read">Want to Read</option>
                <option value="Currently Reading">Currently Reading</option>
                <option value="Read">Read</option>
              </select>
            </p>
            <p>
              Rate :
              <select
                value={book.rating}
                onChange={(e) => handleRatingChange(book.id, e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default MyBooksPage;

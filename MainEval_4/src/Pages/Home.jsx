import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  const [books,setBooks] = useState([]);
  const [loading,setLoading] = useState(true);
  const [isLoggedIn ,setisLoggedIn] = useState(localStorage.getItem(isLoggedIn)==="true")
  useEffect(()=>{
       const fetchBooks = async()=>{
        try{
            const response = await fetch("https://book-tracker-19fcd-default-rtdb.firebaseio.com/books")
            const data = await response.json();
            setBooks(data)
            setLoading(false);
        }catch(err){
            console.log("Error fetching the Books",err)
        }
       }
       fetchBooks();
  },[]);

  if(loading){
    return <h1>Loading......</h1>
  }
  //handle want to read\
   const handleWantToRead = (bookId)=>{
       if(isLoggedIn){
        const storedBook = localStorage.getItem("myBooks")
       if(storedBook){
        const myBooks = JSON.parse(storedBook);
        myBooks.push(books.find((book)=>book.id === bookId));
        localStorage.setItem("myBooks",JSON.stringify(myBooks))
       }
       }else{
        alert("Please Login to Add the Book")
       }
   }
    return (
    <div>
       <h1>Book List</h1>
       <ul>
        {books.map((book)=>{
            <li key={book.id}>
               <img src={book.coverImage}/>
               <p>Author:{book.author}</p>
               <p>{book.title}</p>
               <Link to={`/books/${book.id}`}>
                  <button>View Details</button>
               </Link>
               <button onClick={()=>handleWantToRead(book.id)}>Want to Read</button>
            </li>
        })}
       </ul>

    </div>
  )
}

export default Home
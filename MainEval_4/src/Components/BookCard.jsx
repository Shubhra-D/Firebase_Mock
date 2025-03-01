import React from 'react'

export const BookCard = ({book}) => {
  
    return (
    <div>
       <img src={book.coverImage}/>
       <p>{book.title}</p>
       <p>Auther : {book.auther}</p>
       <p>Available  : {book.availability}</p>
    </div>
  )
}

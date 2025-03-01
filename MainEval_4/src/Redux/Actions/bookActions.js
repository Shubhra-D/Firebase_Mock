import axios from 'axios';

export const FETCH_BOOK_REQUEST = "FETCH_BOOK_REQUEST";
export const FETCH_BOOK_SUCCESS = "FETCH_BOOK_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";
export const ADD_BOOK_TO_USER_LIST = "ADD_BOOK_TO_USER_LIST";
export const FETCH_MY_BOOKS = "FETCH_MY_BOOKS";
export const UPDATE_BOOK_STATUS = "UPDATE_BOOK_STATUS";
export const UPDATE_BOOK_RATING = "UPDATE_BOOK_RATING";

export const fetchBooksRequest = ()=>{
    return {
        type:FETCH_BOOK_REQUEST
    }
};

export const fetchBookSuccess = (books)=>{
    return {
        type:FETCH_BOOK_SUCCESS,
        books,
    }
};

export const fetchBookFailure = (err)=>{
    return {
        type:FETCH_BOOKS_FAILURE,
        err
    }
};

export const addBookToUserList = (bookId)=>{
    return {
        type:ADD_BOOK_TO_USER_LIST,
        bookId,
    }
};

export const fetchMyBooks = ()=>{
    return (dispatch)=>{
        dispatch(fetchBooksRequest());
        axios.get("https://book-tracker-19fcd-default-rtdb.firebaseio.com/books.json")
        .then((response)=>{
            dispatch(fetchBookSuccess(response.data))
        }).catch((err)=>{
           dispatch(fetchBookFailure(err))
        })
    }
};

export const updateBookStatus = (bookId,newStatus)=>{
    return {
        type:UPDATE_BOOK_STATUS,
        bookId,
        newStatus
    }
};

export const updateBookRating = (bookId,newRating)=>{
    return {
        type:UPDATE_BOOK_RATING,
        bookId,
        newRating
    }
}
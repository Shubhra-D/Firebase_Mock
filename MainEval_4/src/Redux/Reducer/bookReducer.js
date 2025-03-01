import { ADD_BOOK_TO_USER_LIST, FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS, FETCH_BOOKS_FAILURE, FETCH_MY_BOOKS, UPDATE_BOOK_RATING, UPDATE_BOOK_STATUS } from "../Actions/bookActions";

const initState = {
    books:[],
    myBooks:[],
    loading:false,
    error:null,
};

export const bookReducer = (state=initState,action)=>{
    switch(action.type){
        case FETCH_BOOK_REQUEST:
            return{
                ...state,loading:true,error:null
            }
        case FETCH_BOOK_SUCCESS:
            return {
                ...state,books:action.books,
                error:null
            }
        case FETCH_BOOKS_FAILURE:
            return{
                ...state,error:action.error,
                loading:false
            }
        case ADD_BOOK_TO_USER_LIST:
            return {
                ...state,myBooks:[...state.myBooks,action.bookId]
            }
        case FETCH_MY_BOOKS:
            return {
                ...state,
                myBooks:action.myBooks
            }
        case UPDATE_BOOK_STATUS:
            return {
                ...state,
                myBooks:state.myBooks.map((book)=>{
                    if(book.id === action.bookId){
                        return {
                            ...book,status:action.newStatus
                        }

                    }
                    return book;
                })
            }
        case UPDATE_BOOK_RATING:
            return {
                ...state,
                myBooks:state.myBooks.map((book)=>{
                    if(book.id === action.bookId){
                        return {
                            ...book,rating:action.newRating
                        }

                    }
                    return book;
                })
            }
        default:
            return state;
    }
}
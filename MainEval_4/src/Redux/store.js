import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import { bookReducer } from "./Reducer/bookReducer";
import { authReducer } from "./Reducer/authReducer";
import thunk from 'thunk'

const rootReducer = combineReducers({
    auth:authReducer,
    books:bookReducer

});
export const store = createStore(rootReducer,
    applyMiddleware(thunk)
) 
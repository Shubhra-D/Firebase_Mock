import {combineReducers, legacy_createStore as createStore} from 'redux'
import authReducer from '../Redux/authReducer'
import notesReducer from '../Redux/notesReducer'

const rootReducer = combineReducers({
    auth:authReducer,
    notes:notesReducer,
});

export const store = createStore(rootReducer)
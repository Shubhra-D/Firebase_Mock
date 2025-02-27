import axios from "axios";
// irebase Authentication
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
//notes form
export const FETCH_NOTES_REQUEST = "FETCH_NOTES_REQUEST";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_FAILURE = "FETCH_NOTES_FAILURE";

//noteslist working

export const ADD_NOTE = "ADD_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

const FIREBASE_URL = `https://mock-firebase-ca5fa-default-rtdb.firebaseio.com/notes.json`;
export const login = () => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST, user });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  };
};

export const fetchNotes = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_NOTES_REQUEST });
    axios
      .get(FIREBASE_URL)
      .then((res) => {
        dispatch({ type: FETCH_NOTES_SUCCESS, notes: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_NOTES_FAILURE, err: err.message });
      });
  };
};

export const addNote = (note) => {
  return (dispatch) => {
    axios
      .post(FIREBASE_URL, note)
      .then((res) => {
        dispatch({ type: ADD_NOTE, note: res.data });
      })
      .catch((err) => {
        console.log("erro", err);
      });
  };
};

export const editNote = (noteId, note) => {
  return (dispatch) => {
    axios
      .patch(
        `https://mock-firebase-ca5fa-default-rtdb.firebaseio.com/notes/${noteId}.json`,
        note
      )
      .then((res) => {
        dispatch({ type: EDIT_NOTE, note: res.data });
      })
      .catch((err) => {
        console.log("Error edititng the note", err);
      });
  };
};


export const deleteNote = (noteId)=>(dispatch)=>{
    return(
        axios.delete(`https://mock-firebase-ca5fa-default-rtdb.firebaseio.com/notes/${noteId}.json`)
        .then(()=>{
            dispatch({type:DELETE_NOTE,noteId})
        }).catch((err)=>{
            console.log(err)
        })
    )
   
}
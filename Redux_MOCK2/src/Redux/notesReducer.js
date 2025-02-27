import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  FETCH_NOTES_FAILURE,
  FETCH_NOTES_REQUEST,
  FETCH_NOTES_SUCCESS,
} from "./actions";

const initState = {
  notes: [],
  loading: false,
  error: null,
};

const notesReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_NOTES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_NOTES_SUCCESS:
      return { ...state, loading: false, error: null };
    case FETCH_NOTES_FAILURE:
      return { ...state, loading: false, error: action.error };
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.notes] };
    case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.note.id ? action.note : note
        ),
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.noteId),
      };
    default:
      return state;
  }
};

export default notesReducer;

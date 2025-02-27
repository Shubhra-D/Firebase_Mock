import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote, fetchNotes } from "../Redux/actions";

const NoteList = () => {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  const [editNote, setEditNote] = useState(null);
  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const handleEditNote = (note) => {
    setEditNote(note);
  };
  const handleAddNote = () => {
    dispatch(addNote(newNote));
    setNewNote({ title: "", content: "" });
  };
  const handleSaveNote = () => {
    dispatch(editNote(editNote.id, editNote));
    setEditNote(null);
  };
  const handleDeleteNote = (noteId) => {
    dispatch(deleteNote(noteId));
  };
  const handleInputChange = (e) => {
    setNewNote({ ...newNote, [e.target.value]: e.target.value });
  };
  const handleEditInputChange = (e) => {
    setEditNote({ ...editNote, [e.target.value]: e.target.value });
  };

  return (
    <div>
      <h1>Notes</h1>
      <input
        type="text"
        placeholder="Add a Note"
        value={newNote.title}
        onChange={handleInputChange}
      />
      <textarea value={newNote.content} onChange={handleInputChange} />
      <button onClick={handleAddNote}>Add</button>
      <ul>
        {notesReducer.map((note) => (
          <li key={note.id}>
            <h5>{note.title}</h5>
            <p>{note.content}</p>
            <button onClick={() => handleEditNote(note)}>Edit</button>
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editNote && (
        <div>
            <input type="text" onChange={handleEditInputChange}/>
            <textarea onChange={handleEditInputChange}/>
            <button onClick={handleSaveNote}>Save</button>
        </div>

      )}
    </div>
  );
};

export default NoteList;

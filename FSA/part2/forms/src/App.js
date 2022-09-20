import axios from "axios";
import { useState, useEffect } from "react";
import Note from "./Note";
import noteServices from "./services/notes";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [notes, setNote] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const deleteElementOf = (id) => {
    noteServices.deleteElement(id).then((response) => setNote(response));
  };

  const toggleImportanceOf = (id) => {
    // const url = `http://localhost:3002/notes/${id}`;
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };
    noteServices.update(id, changedNote).then((response) => {
      setNote(notes.map((note) => (note.id !== id ? note : response)));
    });
  };

  useEffect(() => {
    noteServices.getAll().then((note) => setNote(note));
  }, []);

  const setFalseOrTrue = (e) => {
    e.preventDefault();
    setShowAll(!showAll);
  };

  const handleInput = (e) => {
    e.preventDefault();
    setNewNote(e.target.value);
  };

  const saveNotes = (e) => {
    e.preventDefault();
    if (newNote !== "") {
      let myId = uuidv4();
      const injectedObject = {
        id: myId,
        content: newNote,
        date: new Date().toISOString(),
        important: Math.random() < 0.5,
      };
      noteServices.create(injectedObject).then((response) => {
        setNote(notes.concat(response));
        setNewNote("");
      });
    }
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={setFalseOrTrue}>
          show {showAll ? "All" : "Important"}
        </button>
      </div>
      <ul>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
            deleteElement={() => deleteElementOf(note.id)}
          />
        ))}{" "}
        <form onSubmit={saveNotes}>
          <input value={newNote} onChange={handleInput}></input>
          <button type="submit">Save</button>
        </form>
      </ul>
    </div>
  );
};

export default App;

import { useState } from "react";
import Note from "./Note";








const App = (props) => {
  const [notes, setNote] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

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
    const injectedObject = {
      id: notes.lengt + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };

    setNote(notes.concat(injectedObject));
    setNewNote("");
  };

  const isitImportant = showAll
    ? notes.filter((note) => note.important === true)
    : notes;


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
          <Note key={note.id} note={note} />
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

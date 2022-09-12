import { useState } from "react";
import Note from "./Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNotes, setNewNotes] = useState("a new note");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
  };
  const handleNoteChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setNewNotes(event.target.value);
  };
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNotes} onChange={handleNoteChange} />
        <button type="sumbit">Save</button>
      </form>
    </div>
  );
};

export default App;

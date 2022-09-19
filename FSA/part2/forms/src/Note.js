const Note = ({ note, toggleImportance, deleteElement }) => {
  const label = note.important ? "make not important" : "make important";
  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>{" "}
      <button onClick={deleteElement}>delete</button>{" "}
    </li>
  );
};

export default Note;

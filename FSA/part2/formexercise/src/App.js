import logo from "./logo.svg";
import React from "react";
import { useState } from "react";

function App() {
  const personArr = [];
  const [existingNames, setExistingNames] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
  };

  const addName = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h1>Numbers</h1>
    </div>
  );
}

export default App;

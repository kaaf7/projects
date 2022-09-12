import logo from "./logo.svg";
import React from "react";
import { useState } from "react";
import Name from "./Name";

function App() {
  const personArr = [];
  const [existingNames, setExistingNames] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(0);

  const handleInput = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  const addName = (event) => {
    const newPerson = { name: newName };
    event.preventDefault();

    // a samrt way to compare array of objects to an outsider object by filtering
    // the similar objects and then if the array dfference is equal zero that means the array does not contain an object with similar peoperties
    const exName = existingNames.filter(
      (existingname) => existingname.name === newPerson.name
    );
    if (exName.length === 0) {
      setExistingNames(existingNames.concat(newPerson));
      setNewName("");
    } else {
      window.confirm(
        `${newPerson.name} is already added to phonebook, replace the old number with a new one?`
      );
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleInput} />
        </div>
        <div>
          number: <input calue />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h1>Numbers</h1>
      {existingNames.map((name) => (
        <Name key={Math.floor(Math.random() * 1000)} name={name} />
      ))}
    </div>
  );
}

export default App;

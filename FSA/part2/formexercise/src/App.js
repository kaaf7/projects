import React from "react";
import { useState } from "react";
import Name from "./Name";

function App() {
  let numbers = /^[0-9]+$/;
  const [currentPerson, setCurrentPerson] = useState([
    { name: "karim", number: "22119233" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState();

  const handleInput = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };
  const handleNumber = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  const addNameandNumber = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    // a samrt way to compare array of objects to an outsider object by filtering
    // the similar objects and then if the array dfference is equal zero that means the array does not contain an object with similar peoperties
    const exName = currentPerson.filter(
      (existingname) => existingname.name === newPerson.name
    );
    if (
      exName.length === 0 &&
      newPerson.number.match(/^[0-9]+$/) &&
      !newPerson.name.match(/^[0-9]+$/) &&
      newPerson.number > 7
    ) {
      setCurrentPerson(currentPerson.concat(newPerson));
      setNewName("");
    } else {
      window.confirm("please insert a number or a name");
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addNameandNumber}>
        <div>
          name: <input value={newName} onChange={handleInput} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h1>Numbers</h1>
      {currentPerson.map((name) => (
        <Name key={Math.floor(Math.random() * 1000)} name={name} />
      ))}
    </div>
  );
}

export default App;

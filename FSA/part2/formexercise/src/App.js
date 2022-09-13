import React from "react";
import { useState } from "react";
import Name from "./Name";

function App() {
  const [currentPerson, setCurrentPerson] = useState([
    { name: "karim", number: "22119233" },
    { name: "Mirak", number: "1155233" },
    { name: "Amir", number: "2119233" },
    { name: "Mysara", number: "211923543" },
    { name: "Azza", number: "211921233" },
    { name: "Sophia", number: "21249233" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState();
  const [filterName, setFilterName] = useState("");

  const handleFilterName = (event) => {
    event.preventDefault();
    setFilterName(event.target.value);
  };

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
      newPerson.number.length > 7
    ) {
      setCurrentPerson(currentPerson.concat(newPerson));
      setNewName("");
      setNewNumber("")
    } else {
      window.confirm("please insert a number or a name");
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      filter shown with:{" "}
      <input value={filterName} onChange={handleFilterName} />
      <h2>Add New Number </h2>
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
      <h2>Numbers</h2>
      {currentPerson
        .filter((name) => {
          if (filterName === "") {
            return name;
          } else if (name.name.toLowerCase().includes(filterName.toLocaleLowerCase())){
            return name;
          }
       return false; }  )
        .map((name) => (
          <Name key={Math.floor(Math.random() * 1000)} name={name} />
        ))}
    </div>
  );
}

export default App;

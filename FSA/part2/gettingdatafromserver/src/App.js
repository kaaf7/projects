import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Note from "./Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [country, setCountry] = useState("");

  const hook = () => {
    console.log("effect");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      const countryArr = response.data;
      console.log("promise fullfilled");
      setNotes(countryArr);
      console.log(countryArr[9].name.common);
    });
  };

  useEffect(hook, []);

  return (
    <div>
     Search Country: <input></input>
    </div>
  );
};

export default App;

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Country from "../../../getdata/src/Country";

const App = () => {
  const [countries, setCountry] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState("");
 

  const hook = () => {
    console.log("effect");
    axios.get("https://restcountries.com/v2/all").then((response) => {
      const countryArr = response.data;
      console.log("promise fullfilled");
      setCountry(countryArr);
    });
  };

  useEffect(hook, []);

  const onChangeOfInput = (e) => {
    setSearchedCountry(e.target.value);
  };

  const handleSearchBarValue = (text) => {
    console.log(text.name);
    setSearchedCountry(text.name);
    setCountry()
    console.log();
  };

  const searchFilter = countries
    .filter((country) => {
      return (
        searchedCountry &&
        country.name.toLowerCase().startsWith(searchedCountry)
      );
    })
    .slice(0, 5);

  return (
    <div>
      Search Country:{" "}
      <input value={searchedCountry} onChange={onChangeOfInput}></input>
      <div>
        {searchFilter &&
          searchFilter.map((country, i) => (
            <div onClick={() => handleSearchBarValue(country)} key={i}>
              {country.name}
            </div>
          ))}
        <Country country={country}/>
      </div>
    </div>
  );
};

export default App;

import axios from "axios";
import { useForm } from "rc-field-form";
import React from "react";
import { useState, useEffect } from "react";
import Country from "./Country";

const App = () => {
  const [countries, setCountry] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState("");
  const [countryName, setCountryName] = useState("");
  const [allanguages, setAllLanguages] = useState([]);

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
    setCountryName(e.target.value);
    console.log(allanguages);
  };

  const handleSearchBarValue = (country) => {
    setSearchedCountry(country.name);
    setCountryName(country);
    const languages = Array.from(country.languages);
    setAllLanguages(languages);
    console.log(country.flag)
    console.log(country.weather)
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
      find countries:{" "}
      <input value={searchedCountry} onChange={onChangeOfInput}></input>
      <div>
        {searchFilter &&
          searchFilter.map((country, i) => (
            <div onClick={() => handleSearchBarValue(country)} key={i}>
              {country.name}
              <button>Show</button>
      
            </div>
          ))}
      </div>
      <Country
        value={searchedCountry}
        country={countryName}
        languages={allanguages}
      />
      
    </div>
  );
};

export default App;

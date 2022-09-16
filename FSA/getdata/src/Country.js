const Country = ({ country, languages }) => {
  return (
    <div>
      <h1>{country && country.name}</h1>
      <li>Capital : {country && country.capital}</li>
      <li>area : {country && country.area} m²</li>
      <h3>language: </h3>
      <ul>
        {country.name
          ? languages.map((languge, i) => <li key={i}>{languge.name}</li>)
          : (languages.name = "")}
      </ul>
      <div>
        <img
          src={country.name && country.flag}
          width={250}
          height={150}
          style={{ border: "1px solid black" }}
          alt=""
        />
      </div>
    </div>
  );
};
export default Country;

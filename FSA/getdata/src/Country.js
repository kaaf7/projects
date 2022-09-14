const Country = ({ country}) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
    </div>
  );
};
export default Country;

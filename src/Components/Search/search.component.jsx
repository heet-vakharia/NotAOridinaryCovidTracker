import React from "react";
import countries from "./countries";
import "./search.styles.scss";

const Search = ({
  selectedCountryName,
  setSelectedCountryName,
  CountryInfo,
}) => {
  const onClickHandle = ({ target }) => {
    const allCountries = document.getElementsByTagName("path");
    var id = "";
    window.location.href = "#countryInfo";
    for (let country of countries) {
      if (country.id === target.id) {
        id = target.id;
        setSelectedCountryName(country.name);
        CountryInfo(id);
      }
    }
    for (let country of allCountries) {
      if (country.id !== id) {
        country.classList.remove("selected");
      } else {
        country.classList.add("selected");
      }
    }
  };

  return (
    <div className="search" id="search">
      <label htmlFor="search_input">
        <input
          type="text"
          id="search__input"
          value={selectedCountryName}
          onChange={(event) => setSelectedCountryName(event.target.value)}
          className="search__input"
          placeholder="Search Countries"
        />
      </label>
      <div className="result">
        {countries.map((country) => {
          if (
            country.name
              .toLowerCase()
              .includes(selectedCountryName.toLowerCase())
          ) {
            return (
              <button
                id={country.id}
                className="country"
                key={country.id}
                onClick={onClickHandle}
                href="#countryInfo"
                name={country.id}
              >
                {country.name}
              </button>
            );
          } else {
            return undefined;
          }
        })}
      </div>
    </div>
  );
};
export default Search;
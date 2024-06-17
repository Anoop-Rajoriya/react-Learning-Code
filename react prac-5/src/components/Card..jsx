import React from "react";
import { NavLink } from "react-router-dom";

export default function ({ country, countryData }) {
  return (
    <NavLink id="card" to={country.name.common} state={countryData}>
      <div className="top">
        <img src={country.flags.svg} alt={country.flag + " flag"} />
      </div>
      <div className="bottom">
        <p className="name">{country.name.common}</p>
        <p className="population">
          {" "}
          <span>population</span>
          {Number(country.population).toLocaleString("en-IN")}
        </p>
        <p className="region">
          {" "}
          <span>region</span>
          {country.region}
        </p>
        <p className="capital">
          {" "}
          <span>capital</span>
          {country.capital}
        </p>
      </div>
    </NavLink>
  );
}

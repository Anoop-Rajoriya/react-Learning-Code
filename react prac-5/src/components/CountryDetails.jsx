import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import HomeLoader from "./HomeLoader";

export default function CountryDetails() {
  const { country: countryName } = useParams();
  const [countryData, setCountryData] = useState({});
  const { state: data } = useLocation();

  useEffect(() => {
    try {
      setCountryData(
        data.filter((obj) => {
          return obj.name.common == countryName;
        })[0]
      );
    } catch {
      (error) => {
        console.log("state not found", error);
      };
    }
  }, [countryName]);

  if (!Object.values(countryData).length) {
    return (
      <>
        <HomeLoader />
        <p>please go to home</p>
      </>
    );
  }

  return (
    <div id="countryDetai">
      <div id="left">
        <img src={countryData.flags.svg} alt={"flag"} />
      </div>
      <div id="right">
        <div id="name">{countryData.name.common}</div>
        <div>
          <div>
            <p id="population">
              <span>population:</span>{" "}
              {countryData.population.toLocaleString("en-IN")}
            </p>
            <p id="region">
              <span>region:</span> {countryData.region}
            </p>
            <p id="capital">
              <span>capital:</span> {countryData.capital.join(". ")}
            </p>
            <p id="language">
              <span>language:</span>{" "}
              {Object.values(countryData.languages).join(", ")}
            </p>
          </div>
          <div>
            <p id="currancy">
              <span>currencies:</span>{" "}
              {Object.values(countryData.currencies)
                .map((curr) => curr.name)
                .join(", ")}
            </p>
            <p id="borders">
              <span>borders:</span>
              {Object.values(countryData).length &&
                data
                  .filter((country) => {
                    return countryData.borders.includes(country.cca3);
                  })
                  .map((val) => {
                    return (
                      <NavLink
                        key={val.cca3}
                        to={`/${val.name.common}`}
                        state={data}
                      >
                        {val.name.common}{" "}
                      </NavLink>
                    );
                  })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

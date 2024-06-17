import React, { useEffect, useState } from "react";
import Search from ".//Search";
import Filter from ".//Filter";
import Card from ".//Card.";
import HomeLoader from "./HomeLoader";
import {Themcontext} from "../Contexts/ThemContext";
import { useContext } from "react";

export default function Home() {
  const [isDark] = useContext(Themcontext);    
  const [data, setData] = useState([]);
  const [userinput, setUserInput] = useState("");

  console.log();

  useEffect(function () {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(setData)
      .catch(console.log)
  }, []);


  if(!data.length){
    return (<HomeLoader />)
  }

  return (
    <>
      <div id="navContainer"  className={`${isDark? 'dark': 'light'}`}>
        <Search setUserInput={setUserInput} />
        <Filter />
      </div>
      <div id="CardContainer"  className={`${isDark? 'dark': 'light'}`}>
        {(() => {
          if (userinput) {
            return data
              .filter((country) => {
                return country.name.common
                  .toLowerCase()
                  .includes(userinput.toLowerCase());
              })
              .map((country) => {
                return <Card key={country.flag} country={country} countryData={data} />;
              });
          }

          return data.map((country) => {
            return <Card key={country.flag} country={country} countryData={data} />;
          });
        })()}
      </div>
    </>
  );

  // return <HomeLoader />
}

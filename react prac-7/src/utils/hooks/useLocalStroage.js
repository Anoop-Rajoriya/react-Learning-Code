import React, { useEffect, useState } from "react";

export function useLocalStroage(key, value) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!data.length) {
      if (!localStorage.getItem(key)) {
        setLocalStorage(value);
      } else {
        setData(JSON.parse(localStorage.getItem(key)));
      }
    }
  }, []);

  function setLocalStorage(parameter) {
    if (typeof parameter === "function") {
      localStorage.setItem(key, JSON.stringify(parameter(data)));
    } else {
      localStorage.setItem(key, JSON.stringify(parameter));
    }

    setData(JSON.parse(localStorage.getItem(key)));
  }

  return [data, setLocalStorage];
}

import React, { useContext } from "react";
import {Themcontext} from "../Contexts/ThemContext";

export default function Header() {
  const [isDark, setIsDark] = useContext(Themcontext);
  return (
    <div id="header" className={`${isDark ? "dark" : "light"}`}>
      <a href="/" className="logo">
        where in the world?
      </a>
      <button
        onClick={() => {
          setIsDark(!isDark);
          localStorage.setItem("isDark", !isDark)
        }}
        className="button"
      >
        <img src="assets/dark-mode-icon.svg" alt="" />
        {`${isDark ? "Light" : "Dark"} mode`}
      </button>
    </div>
  );
}

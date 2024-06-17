import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Popup from "./Popup";

export default function Header() {

  const [showPopup, setShowPopup] = useState(false)

function signUpClick (event){
  console.log('click')
setShowPopup(true)

}



  return (
    <div className="px-4 py-2 flex justify-between shadow-md shadow-slate-400 ">
      <a href="/" id="logo" className="text-xl">
        logo
      </a>
      <div id="links" className="flex gap-4 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline text-blue-500" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "underline text-blue-500" : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contect"
          className={({ isActive }) =>
            isActive ? "underline text-blue-500" : ""
          }
        >
          Contect
        </NavLink>
        <NavLink
          to="/data"
          className={({ isActive }) =>
            isActive ? "underline text-blue-500" : ""
          }
        >
          data
        </NavLink>
        <button onClick={signUpClick} className="bg-blue-600 text-white px-2 text-sm flex items-center">
          sign up
        </button>
        {showPopup? <Popup state={[showPopup, setShowPopup]}/> : ""}
      </div>
    </div>
  );
}

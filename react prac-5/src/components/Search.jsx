import React from "react";
import searchicon from '../assets/searchIcon.svg'


export default function ({setUserInput}) {
  // console.log(setUserInput);
  return (
    <div id="search">
      <span><img src={searchicon} alt="" /></span>
        <input onChange={(event)=>{
          setUserInput(event.target.value)
        }} placeholder="search" type="text" />
    </div>
  );
}

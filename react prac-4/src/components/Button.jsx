import React from "react";

export default function Button({ img, setCount }) {
  return (
    <button onClick={setCount} className=" flex item-center justify-center bg-blue border text-base">
      <img src={img} alt="" />
    </button>
  );
}

import React from "react";

export default function ContextMenu({
  position,
  setPosition,
  id,
  setTable,
  TableData,
  setExpanse,
  setSave,
}) {
  function clickHandler(event) {
    setPosition({});
    if (event.target.innerText.toLowerCase() === "delete") {
      setTable((pre) => pre.filter((value) => value.id !== id));
    }

    if (event.target.innerText.toLowerCase() === "edit") {
      console.log("edit!!");
      setSave("is saving");
      TableData.find((val) => {
        if (val.id === id) {
          setExpanse({
            title: val.title,
            category: val.category,
            amount: val.amount,
          });
        }
      });
    }
  }

  if (!position.top) return;
  return (
    <div className="context-menu" style={position}>
      <div onClick={clickHandler}>Edit</div>
      <div onClick={clickHandler}>Delete</div>
    </div>
  );
}

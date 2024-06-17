import React, { useState } from "react";

export default function ShowData() {
  const [data, setData] = useState([]);

  function loadeData() {
    // setData()
    import("../todos").then((modul) => {
      setData(modul.todos);
    });
  }
  return (
    <div className="px-4">
      <button
        className="bg-blue-600 my-4 px-2 py-1 text-white capitalize"
        onClick={loadeData}
      >
        load data
      </button>

      <h1>
        {data.map((val) => (
          <p key={val.id}> {val.title}</p>
        ))}
      </h1>
    </div>
  );
}

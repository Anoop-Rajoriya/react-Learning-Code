import "./style.css";
import React from "./React";
import ReactDOM from "./ReactDOM";

// const test = <></>;

// const test = (
//   <div key={1} id="container" className="div">
//   </div>
// );

// const test = (
//   <div key={1} id="container" className="div">
//     logo
//   </div>
// );

// const test = (
//   <div key={1} id="container" className="div">
//     <p className="p">logo</p>
//   </div>
// );

// const test = <>{[" bob", " margi"]}</>;

// const test = <div className="div">{[" bob", " margi"]}</div>;

// const test = (
//   <div key={1} id="container" className="div">
//     {[<li className="li"> apple</li>, <li className="li"> banana</li>]}
//   </div>
// );

// function Card(params) {
//   return (
//     <div
//       id="card"
//       className="div"
//       style={{ width: "170px", height: "200px", borderRadius: "8px" }}
//     >
//       <div id="top" style={{ height: "50%", borderBottom: "2px solid" }}></div>
//       <div id="bottom" style={{ marginTop: "8px", marginLeft: "6px" }}>
//         <li style={{ textTransform: "capitalize" }}>name</li>
//         <li style={{ textTransform: "capitalize" }}>description</li>
//       </div>
//     </div>
//   );
// }

// const container = (
//   <div
//     style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
//     className="div"
//   >
//     {(function () {
//       let arr = [];
//       for (let index = 0; index < 20; index++) arr.push(<Card />);

//       return arr;
//     })()}
//   </div>
// );

let count = 0;

const Counter = function () {
  return (
    <div
      id="counter"
      style={{ border: "2px solid", width: "150px", fontSize: "20px" }}
    >
      <h1 style={{ textAlign: "center" }}>{count}</h1>
      <div style={{ textAlign: "center" }}>
        <spacn
          click={increament}
          style={{
            border: "2px solid",
            width: "50%",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          +
        </spacn>
        <spacn
          style={{
            border: "2px solid",
            width: "50%",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          -
        </spacn>
      </div>
      <p
        style={{ textAlign: "center", border: "2px solid", cursor: "pointer" }}
      >
        reset
      </p>
    </div>
  );
};

const container = (
  <div id="counter-container" className="div">
    <Counter />
  </div>
);



const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(container);

console.log("script is runnig very well!");

const reactComp = React.createElement(
  "div",
  {
    id: "card-container",
    className:
      "max-w-screen p-4 flex flex-wrape-1 justify-center gap w-full border bg-red-300",
  },
  createCards(5)
);



function createCards(num) {
  let cardArr = [];
  for (let i = 0; i < num; i++) {
    cardArr.push(
      React.createElement(
        "div",
        {
          key: i,
          id: "card",
          className: "w-30 h-40 p-4 mx-2 bg-white rounded border",
        },
        [
          React.createElement(
            "h2",
            { key: i, className: "font-base capitalize" },
            "user naem"
          ),
          React.createElement(
            "p",
            { key: i + 1, className: "font-md" },
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, id?"
          ),
        ]
      )
    );
  }

  return cardArr;
}

const reactRoot = ReactDOM.createRoot(document.querySelector("#root"));

reactRoot.render(reactComp);


console.log(reactRoot)
import reactDOM from "react-dom/client";
import "./index.css";
console.log("script running!");

const cards = [];

function Card({ img, username, email }) {
  return (
    <div id="card" className="w-30 h-40 p-4 mx-2 bg-white rounded border">
      <img title="user profile" className="w-full cursor-pointer" src={img} />
      <h1 title="username" className="font-base cursor-pointer capitalize">
        {username}
      </h1>
      <p title="user email" className="font-md cursor-pointer">
        {email}
      </p>
    </div>
  );
}

function createCard({ users }) {
  users.forEach((user) => {
    cards.push(
      <Card
        key={user.id}
        img={user.image}
        username={user.username}
        email={user.email}
      />
    );
  });

  const cardContainer = (
    <div
      id="card-container"
      className="bg-blue-400max-w-screen p-4 flex flex-wrape-1 justify-center gap w-full border bg-red-300"
    >
      {cards}
    </div>
  );

  reactDOM.createRoot(document.querySelector("#root")).render(cardContainer);
}

fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then(createCard);

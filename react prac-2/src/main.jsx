import reactDOM from "react-dom/client";
import './style.css'
console.log("script running!");

const cards = [];

fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then(createCard);

function createCard({ users }) {
  users.forEach((user) => {
    const card =   <div key={user.id} id="card" className="w-30 h-40 p-4 mx-2 bg-white rounded border">
    <img title="user profile" className="w-full cursor-pointer" src={user.image} />
    <h1 title="username" className="font-base cursor-pointer capitalize">{user.username}</h1>
    <p title="user email" className="font-md cursor-pointer">{user.email}</p>
  </div>

  cards.push(card)
  });

  const cardContainer = <div id="card-container" className="bg-blue-400max-w-screen p-4 flex flex-wrape-1 justify-center gap w-full border bg-red-300">{cards}</div>;

  reactDOM.createRoot(document.querySelector("#root")).render(cardContainer);
  
}

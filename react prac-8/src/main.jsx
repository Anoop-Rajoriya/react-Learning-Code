import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ShowData from "./pages/ShowData.jsx";
import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import Contect from "./pages/Contect.jsx";

// const Home = lazy(() =>
//   slow(0).then(() =>
//     import("./pages/Home.jsx").then((res) => ({ default: res.Home }))
//   )
// );
const About = lazy(() => slow(0).then(() => import("./pages/About.jsx")));
const Contect = lazy(() =>
  slow(0).then(() => import("./pages/Contect.jsx"))
);

function slow(time) {
  return new Promise((res) => setTimeout(() => res(), time));
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contect",
        element: <Contect />,
      },
      {
        path: "/data",
        element: <ShowData />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

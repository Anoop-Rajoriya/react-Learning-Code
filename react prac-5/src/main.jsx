import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Error from "./Error.jsx";
import Contect from "./Contect.jsx";
import CountryDetails from "./components/CountryDetails.jsx";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/:country',
            element: <CountryDetails />
        }
      ]
    },
    {
      path: "/contect",
      element: <Contect />,
      errorElement: <Error />,
    },
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<h1 className="text-2xl">Loading.....</h1>}>
      <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

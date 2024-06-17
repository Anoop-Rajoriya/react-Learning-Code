import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import ThemContext from './Contexts/ThemContext'

export default function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <ThemContext>
      <Header mode={[isDark, setIsDark]} />
      <Outlet context={[isDark, setIsDark]} />
    </ThemContext>
  );
}

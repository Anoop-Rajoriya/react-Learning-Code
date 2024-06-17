import { createContext, useState } from "react";

import React from "react";

export const Themcontext = createContext();

export default function ThemContext({ children }) {
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark'));
  return (
    <Themcontext.Provider value={[isDark, setIsDark]}>
      {children}
    </Themcontext.Provider>
  );
}

// import logo from './logo.svg';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import React from "react";
import { theme } from "./components/Theme";

import Dashboard from "./Container/Router";

const ThemeContext = React.createContext(theme);

function CarbsBuddy() {
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <Dashboard />
      </div>
    </ThemeContext.Provider>
  );
}

export default CarbsBuddy;

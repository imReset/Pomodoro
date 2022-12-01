import React, { useEffect, useContext } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="font-bold text-3xl text-red-300 transition ease-in-out 2s hover:scale-105 hover:text-white">
          Pomodoro Timer
        </h1>
        <Button />
      </header>
    </div>
  );
}

export default App;

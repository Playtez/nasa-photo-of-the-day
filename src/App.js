import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./Components/NewCard/Card";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Card />
    </div>
  );
}

export default App;

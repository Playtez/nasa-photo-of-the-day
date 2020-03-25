import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import NewCard from "./Components/NewCard/NewCard";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <NewCard />
    </div>
  );
}

export default App;

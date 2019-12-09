import React from "react";
import ReactDOM from "react-dom";
import TestReducer from "./TestReducer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Test array functions</h1>
      <hr />
      <TestReducer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

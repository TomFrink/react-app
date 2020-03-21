import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Welcome(props) {
  return <h1> Welcome, {props.name}!</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Edit to show I can Edit Stuff</h1>
        <Welcome name="Kara" />
      </header>
    </div>
  );
}

export default App;

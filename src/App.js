import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Function Component
function Welcome(props) {
  return <h1> 🖐 Welcome, {props.name}! 😃</h1>;
}
// Class Component
class Hello extends React.Component {
  render() {
    return (
      <>
        <p>Hello again, {this.props.name}! This is a Class Component</p>
        <p>I look forward to joining {this.props.place}</p>
      </>
    );
  }
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
        <Welcome name="Potential Employer" />
        <Hello name="Potential Team Member" place="the Team" />
      </header>
    </div>
  );
}

export default App;

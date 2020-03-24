import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Function Component
function Welcome(props) {
  return (
    <h1>
      <span role="img" aria-label="Waving Hand">
        🖐
      </span>{" "}
      Welcome, {props.name}!{" "}
      <span role="img" aria-label="Smiling Face">
        😃
      </span>
    </h1>
  );
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
          I'm putting what I'm
          <br />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning about React
          </a>
          <br />
          to use on this page.
        </p>
        <Welcome name="Potential Employer" />
        <Hello name="Potential Team Member" place="the Team" />
      </header>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Function Component
function Welcome(props) {
  return (
    <div className="top">
      <h1>
        <span role="img" aria-label="Waving Hand">
          🖐
        </span>{" "}
        Welcome, {props.name}!{" "}
        <span role="img" aria-label="Smiling Face">
          😃
        </span>
      </h1>
    </div>
  );
}
// Class Component
class Hello extends React.Component {
  render() {
    return (
      <div className="content1">
        <p>Hello again, {this.props.name}! This is a Class Component</p>
        <p>I look forward to joining {this.props.place}</p>
      </div>
    );
  }
}

// Clock Component
// Rules RE: using state
// Do Not Modify State Directly
// State Updates May be Asynchronous
// State Updates are Merged
// Data Flows Down
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="content2">
        <h1>Hola, Mundo!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// Toggle Component
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div className="content3">
        <button onClick={this.handleClick} className="toggle">
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        <h1> Toggle is {this.state.isToggleOn ? "ON" : "OFF"} </h1>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App parent">
      <header className="App-header side">
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
      </header>
      <Welcome name="Potential Employer" />
      <Hello name="Potential Team Member" place="the Team" />
      <Clock />
      <Toggle />
      <footer className="bottom">
        Made with{" "}
        <span role="img" aria-label="Face Palms">
          🤦‍♂️
        </span>{" "}
        &{" "}
        <span role="img" aria-label="IDK Shrugs">
          🤷‍♂️
        </span>{" "}
        by
        <a href="https://github.com/tomfrink"> Tom Frink</a>
      </footer>
    </div>
  );
}

export default App;

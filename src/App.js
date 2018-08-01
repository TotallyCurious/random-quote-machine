import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
const sauce = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          I just changed this text yall -> Awesome
        </p>
      </div>
    );
  }
  componentWillMount() {
          const script = document.createElement("script");

          script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
          script.async = true;

          document.body.appendChild(script);
      }
}
export default App;

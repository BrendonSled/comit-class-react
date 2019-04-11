// @ts-check
import React, { Component } from "react";
import Button from "./Button";
import Form from "./Form";
import Fetch from "./Fetch";
import logo from "./logo.svg";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button size="small">Click!</Button>
        <Form />
        <Fetch />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {props.name}
        </a>
      </header>
    </div>
  );
}

export default App;

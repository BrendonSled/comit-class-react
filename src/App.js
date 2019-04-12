// @ts-check
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Button from "./Button";
import Fetch from "./Fetch";
import Form from "./Form";
import logo from "./logo.svg";

export const AppState = React.createContext(undefined);

export default function App(props) {
  const [loginState, setLoginState] = useState(undefined);

  return (
    <AppState.Provider value={{ loginState, setLoginState }}>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/">Home</Link>
            <Link to="/form">Form</Link>
            <Link to="/button">Button</Link>
            <Switch>
              <Route exact path="/" component={Fetch} />
              <Route exact path="/form" component={Form} />
              <Route exact path="/button" component={Button} />
            </Switch>
          </header>
        </div>
      </Router>
    </AppState.Provider>
  );
}

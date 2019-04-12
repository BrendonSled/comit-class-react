// @ts-check
import React, { useState, useContext } from "react";
import { AppState } from "./App";

export default function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { loginState, setLoginState } = useContext(AppState);

  const onChange = name => event => {
    switch (name) {
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
    }
  };

  function onSubmit(e) {
    e.preventDefault();
    alert(firstName + " " + lastName);
  }
  if (loginState) {
    return (
      <form onSubmit={onSubmit}>
        <input type="text" value={firstName} onChange={onChange("firstName")} />
        <input type="text" value={lastName} onChange={onChange("lastName")} />
        <input type="submit" value="Submit" />
      </form>
    );
  } else {
    return (
        <div>Please login</div>
    );
  }
}

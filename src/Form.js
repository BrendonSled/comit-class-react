// @ts-check
import React, { useState } from "react";

export default function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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

  function onSubmit() {
    alert(firstName + " " + lastName);
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={firstName} onChange={onChange("firstName")} />
      <input type="text" value={lastName} onChange={onChange("lastName")} />
      <input type="submit" value="Submit" />
    </form>
  );
}

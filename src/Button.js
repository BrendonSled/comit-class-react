// @ts-check
import React, { useState } from "react";
import "./button.css";

export default function Button(props) {
    const [clicks, setClicks] = useState(0);

    const largeSize = { fontSize: "2em" };
    const smallSize = { fontSize: "1em" };

    function onClick() {
        setClicks(clicks + 1);
    }
    
  return (
    <div className="Button" style={props.size === "large" ? largeSize : smallSize} onClick={onClick}>
      {props.children}
      Clicks: {clicks}
    </div>
  );
}

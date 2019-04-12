// @ts-check
import React, { useState, useEffect, useContext } from "react";
import { AppState } from "./App";

export default function Fetch(props) {
  const [fetchJSON, setFetchJSON] = useState(undefined);
  const { loginState, setLoginState } = useContext(AppState);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        setLoginState(json[0].id);
        return setFetchJSON(json);
      });
  }

  return (
    <div>
      {fetchJSON
        ? fetchJSON.map(({ id, userId, title, body }) => (
            <div style={{ padding: "10px" }}>
              <div>Id: {id}</div>
              <div>UserId: {userId}</div>
              <div>Title: {title}</div>
              <div>Body: {body}</div>
            </div>
          ))
        : null}
      <button onClick={fetchData}>Fetch</button>
    </div>
  );
}

// @ts-check
import React, { useState, useEffect } from "react";

export default function Fetch(props) {
  const [fetchJSON, setFetchJSON] = useState(undefined);
  useEffect(() => {
      fetchData();
  }, [])

  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'GET'
    })
      .then(response => response.json())
      .then(json => setFetchJSON(json));
  }

  return (
    <div>
      {fetchJSON
        ? fetchJSON.map(({ id, userId, title, body }) => (
            <div style={{padding: '10px'}}>
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

import React from "react";
import Button from "./Button";
export default function Card(props) {
  console.log(props);
  function onDelete() {
    props.onCardDelete(props.id);
  }
  function onMove(where) {
    props.onCardMove(props.id, where);
  }
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.color}</p>
      <Button />
      <button onClick={onDelete}>Delete Me</button>
      <button onClick={() => onMove("todo")}>Move to ToDO</button>
      <button onClick={() => onMove("doing")}>Move to Doing</button>
      <button onClick={() => onMove("done")}>Move to Done</button>
    </li>
  );
}

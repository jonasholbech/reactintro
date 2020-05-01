import React from "react";
import Button from "./Button";
export default function Card(props) {
  console.log(props);
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.color}</p>
      <Button />
    </li>
  );
}

import React from "react";
import Button from "muicss/lib/react/button";

export default function Card(props) {
  console.log(props);
  function onDelete() {
    props.onCardDelete(props._id);
  }
  function onMove(where) {
    props.onCardMove(props._id, where);
  }
  const style = {
    backgroundColor: props.color,
  };
  return (
    <li>
      <h3>{props.title}</h3>
      <p style={style}>{props.color}</p>

      <Button color="danger" onClick={onDelete}>
        Delete Me
      </Button>
      <Button color="primary" onClick={() => onMove("todo")}>
        Move to ToDO
      </Button>
      <Button color="primary" onClick={() => onMove("doing")}>
        Move to Doing
      </Button>
      <Button color="primary" onClick={() => onMove("done")}>
        Move to Done
      </Button>
    </li>
  );
}

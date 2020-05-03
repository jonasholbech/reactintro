import React from "react";
import Button from "./Button";

export default function Form(props) {
  function submit(evt) {
    evt.preventDefault();
    //console.log("working?");
    props.onFormSubmit("hi mom");
  }
  return (
    <form onSubmit={submit}>
      <input />
      <Button />
    </form>
  );
}

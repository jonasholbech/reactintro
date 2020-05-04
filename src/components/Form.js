import React, { useState } from "react";
import styles from "./Form.module.css";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#bada55");
  function submit(evt) {
    evt.preventDefault();
    //console.log("working?");
    props.onFormSubmit({
      title: title,
      list: "todo",
      added: Date.now(),
      color: color,
      assignedTo: ["jofh"],
    });
    setTitle("");
    setColor("#bada55");
  }
  function titleChanged(e) {
    setTitle(e.target.value);
  }
  function colorChanged(e) {
    setColor(e.target.value);
  }
  const inputStyle = {
    borderColor: title.length > 0 ? "green" : "red",
    borderWidth: "2px",
    borderStyle: "solid",
  };
  return (
    <form className={styles.cardForm} onSubmit={submit}>
      <label>
        Title
        <input
          style={inputStyle}
          type="text"
          onChange={titleChanged}
          name="title"
          value={title}
        />
      </label>
      <label>
        Color
        <input
          type="color"
          onChange={colorChanged}
          name="color"
          value={color}
        />
      </label>
      <input disabled={title.length === 0} type="submit" value="Save" />
    </form>
  );
}

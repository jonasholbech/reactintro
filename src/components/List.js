import React from "react";
import Card from "./Card";
import Form from "./Form";

export default function List(props) {
  const cards = props.cards.map((card) => <Card key={card.id} {...card} />);
  return (
    <section>
      <h2>{props.header}</h2>
      <ul>{cards}</ul>
      <Form />
    </section>
  );
}

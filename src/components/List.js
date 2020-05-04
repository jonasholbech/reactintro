import React from "react";
import Card from "./Card";
import Form from "./Form";

export default function List(props) {
  const cards = props.cards.map((card) => (
    <Card
      onCardDelete={props.onCardDelete}
      onCardMove={props.onCardMove}
      key={card._id}
      {...card}
    />
  ));
  return (
    <section>
      <h2>{props.header}</h2>
      <ul>{cards}</ul>
      <Form onFormSubmit={props.onFormSubmit} />
    </section>
  );
}
